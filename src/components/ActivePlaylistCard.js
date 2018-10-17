import React from 'react'
import closeButton from '../img/cancel-music.svg'
import { activePlaylistCard as style } from '../ui/styles'

class ActivePlaylistCard extends React.Component {
  state = {
    tracksData: null,
    isFullListVisible: false
  }

  componentDidMount() {
    fetch(
      `https://api.spotify.com/v1/playlists/${this.props.playlist.id}/tracks`
      , {
        headers: {
          'Authorization': `Bearer ${this.props.accessToken}`
        }
      }).then(response => response.json())
      .then(tracksData => {
        // const tracks = tracksData.items.map(trackData => trackData.track)
        this.setState({ tracksData })
        console.log(tracksData)
      })
      .then(() => {
        const playlistList = document.querySelector('.playlist-list')
        playlistList.style.marginTop = `${-playlistList.offsetHeight - 36}px`
        const active = document.querySelector('.active')
        const playlistsWrapper = document.querySelector('.playlists-wrapper')
        playlistsWrapper.style.height =
          `${active.offsetHeight - playlistList.offsetHeight}px`
        const playlistHolder = document.querySelector('.playlist-holder')
        playlistHolder.style.visibility = 'visible'
      })
      .catch(error => console.log(error))
  }

  expandFullTrackList(isFullListVisible) {
    this.setState({ isFullListVisible }, () => {
      const playlistsWrapper = document.querySelector('.playlists-wrapper')
      const active = document.querySelector('.active')
      const playlistList = document.querySelector('.playlist-list')
      if (this.state.isFullListVisible) {
        playlistsWrapper.style.height =
          `${active.offsetHeight + playlistList.offsetHeight + 36}px`
      } else {
        playlistList.style.marginTop = `${-playlistList.offsetHeight - 36}px`
        playlistsWrapper.style.height =
          `${active.offsetHeight - playlistList.offsetHeight}px`
      }
    })
  }

  render() {
    return (
      <div style={style.wrapper}
        className={'active'}
      >
        <div style={style.titleWrapper}>
          <h3 style={style.title}>
            {this.props.playlist.name}
          </h3>
          <img style={style.closeButton}
            onClick={() => this.props.playlistOverview(this.props.index)}
            src={closeButton}
            alt={'icon more'} />
        </div>
        <div style={style.contentWrapper}>
          <img style={style.coverImage}
            src={this.props.playlist.images[0].url}
            alt={"playlist's cover"} />
          <div style={style.detailsSection}>
            <h4 style={style.sectionTitle}>
              {'Most popular tracks:'}
            </h4>
            <ol style={style.topTracksList}>
              {
                this.state.tracksData ?
                  this.state.tracksData.items
                  .map(trackData => trackData.track)
                  .sort((a, b) => (
                    b.popularity - a.popularity
                  )).filter((track, i) => i < 3)
                    .map((track, i) => (
                      <li key={i}
                        style={style.listElement}
                      >
                        <span style={style.colorWhite}>
                          {
                            (function () {
                              let trackDescription = String(`${track.name} - ` +
                                track.artists.map(artist => artist.name).join(', '))
                              if (trackDescription.length >= 50) {
                                return trackDescription.slice(0, 50) + '...'
                              } else {
                                return trackDescription
                              }
                            })()
                          }
                        </span>
                      </li>
                    )) :
                  'Loading...'
              }
            </ol>
            <button style={style.expandButton}
              onClick={() => this.expandFullTrackList(!this.state.isFullListVisible)}
            >
              {'See all...'}
            </button>
          </div>
          <div style={style.detailsSection}>
            <div>
              <h4 style={style.sectionTitle}>
                {'Total tracks: '}
                <span style={style.tracksCounter}>
                  {this.props.playlist.tracks.total}
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div style={style.playlistHolder}
          className={'playlist-holder'}
        >
          {
            this.state.tracksData ?
              <div style={
                this.state.isFullListVisible ?
                  {
                    ...style.playlistListHidden,
                    ...style.playlistListVisible
                  }
                  :
                  style.playlistListHidden
              }
                className={'playlist-list'}
              >
                <ol>
                  {
                    this.state.tracksData.items
                  .map(trackData => trackData.track)
                  .map((track, i) => (
                      <li key={i}
                        style={style.listElement}
                      >
                        <span style={style.colorWhite}>
                          {
                            `${track.name} - ` +
                            track.artists.map(artist => artist.name).join(', ')
                          }
                        </span>
                      </li>
                    ))
                  }
                </ol>
              </div>
              :
              'Loading...'
          }
        </div>
      </div>
    )
  }
}

export default ActivePlaylistCard