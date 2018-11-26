import React from 'react'
import { API_KEY, CLIENT_ID } from '../YouTubeAuth/credentials'
import GeneralContent from './GeneralContent'
import PlaylistHolder from './PlaylistHolder'
import closeButton from '../../img/cancel-music.svg'
import { activePlaylistCard as style } from '../../ui/styles'
import Spinner from '../Spinner'

class StandalonePlaylist extends React.Component {
  state = {
    tracksData: null,
    isFullListVisible: false
  }

  componentDidMount() {
    // opacity transition
    const active = document.querySelector('.active')
    active.style.opacity = 1

    // obtain playlist trakcs data
    fetch(
      `https://api.spotify.com/v1/playlists/${this.props.playlist.id}/tracks`
      , {
        headers: {
          'Authorization': `Bearer ${this.props.accessToken}`
        }
      }).then(response => response.json())
      .then(tracksData =>
        this.setState({ tracksData })
      ).then(() => {
        this.toggleTrackList(false)
      }).then(() => {
        window.gapi.load('client', function () {
          window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
          })
        })
        // }).then(() => {
        //   let track = this.state.tracksData.items[0].track
        //   console.log('track', track)
        //   let trackName = `${track.name} - ` +
        //     track.artists.map(artist => artist.name).join(', ')
        //   console.log(trackName)
        //   let request = window.gapi.client.youtube.search.list({
        //     q: trackName,
        //     maxResults: 10,
        //     order: 'relevance',
        //     part: 'snippet',
        //     type: 'video',
        //     videoCaption: 'any'
        //   })
        //   request.execute(function (response) {
        //     console.log(response)
        //   })
      }).catch(error => console.log(error))
  }

  toggleTrackListVisible = (isFullListVisible) => {
    this.setState({ isFullListVisible }, () => {
      const playlistList = document.querySelector('.playlist-list')
      const playlistHolder = document.querySelector('.playlist-holder')
      if (this.state.isFullListVisible) {
        playlistHolder.style.height = 'auto'
        playlistList.style.marginTop = 0
      } else {
        playlistList.style.marginTop = `${-playlistList.offsetHeight - 32}px`
        setTimeout(() => playlistHolder.style.height = 0, 300)
      }
    })
  }

  render() {
    return (
      <div className={'active'}
        style={style.wrapper}
      >
        {
          this.state.tracksData !== null
            ? <div>
              <div style={style.titleWrapper}>
                <h3 style={style.title}>
                  {this.props.playlist.name}
                </h3>
                <img style={style.closeButton}
                  onClick={this.props.playlistOverview}
                  src={closeButton}
                  alt={'icon more'}
                />
              </div>
              <GeneralContent
                playlist={this.props.playlist}
                tracksData={this.state.tracksData}
                toggleTrackList={this.toggleTrackListVisible}
                isFullListVisible={this.state.isFullListVisible}
              />
              <PlaylistHolder
                tracksData={this.state.tracksData}
                isFullListVisible={this.state.isFullListVisible}
              />
            </div>
            : <Spinner />
        }
      </div>
    )
  }
}

export default StandalonePlaylist