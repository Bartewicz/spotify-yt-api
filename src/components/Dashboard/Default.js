import React from 'react'
import YouTubeConnect from '../YouTubeAuth'
import PlaylistCard from '../PlaylistCard'
import StandalonePlaylistOverview from '../StandalonePlaylistOverview'
import { dashboard as style } from '../../ui/styles'
import Spinner from '../Spinner';

class Dashboard extends React.Component {
  state = {
    activeCard: null,
    user: '',
    playlists: null
  }

  componentDidMount() {
    // obtain user and user's playlist data
    fetch(`https://api.spotify.com/v1/me`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`
      }
    }).then(
      response => response.json()
    ).then(
      user => this.setState({ user })
    ).catch(
      error => console.log(error)
    )
    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`
      }
    }).then(
      response => response.json()
    ).then(
      playlists => this.setState({ playlists })
    ).catch(
      error => console.log(error)
    )
  }

  playlistOverview = (key) => {
    // check if key is number from card or null from active
    if (typeof key === 'number') {
      const standardPlaylists = document.querySelectorAll('.standard')
      standardPlaylists.forEach(card => {
        card.style.opacity = 0
      })
      setTimeout(() => {
        standardPlaylists.forEach(card =>
          card.style.display = 'none'
        )
        this.setState({ activeCard: key })
      }, 150)
    } else {
      const active = document.querySelector('.active')
      active.style.opacity = 0
      setTimeout(() =>
        this.setState({ activeCard: null }, () => {
          const standardPlaylists = document.querySelectorAll('.standard')
          standardPlaylists.forEach(card => {
            card.style.display = 'flex'
            setTimeout(() => card.style.opacity = 1, 200)
          })
        }), 300)
    }
  }

  render() {
    return (
      <div>
        {
          !this.state.user
            ? <div className="spinner-wrapper">
              <Spinner />
            </div>
            : <div style={style.wrapper}>
              <h1 className={'text-center'}>
                {`Welcome, ${this.state.user.display_name}`}
              </h1>
              <div style={style.avatarWrapper}>
                <img style={style.avatar}
                  src={this.state.user.images[0].url}
                  alt={"user's avatar"} />
              </div>
              <YouTubeConnect />
              <h2 className={'text-center'}>
                {'Manage your Spotify playlists:'}
              </h2>
              <div style={style.playlistsWrapper}
                className={'playlists-wrapper'}
              >
                {
                  this.state.playlists
                    ? this.state.playlists.hasOwnProperty('items')
                      ? typeof this.state.activeCard === 'number'
                        ? this.state.playlists.items.filter((playlist, i) =>
                          this.state.activeCard === i
                        ).map((playlist, i) =>
                          <StandalonePlaylistOverview key={i}
                            active={this.state.activeCard}
                            accessToken={this.props.accessToken}
                            playlist={playlist}
                            playlistOverview={this.playlistOverview}
                            index={i}
                          />
                        )
                        : this.state.playlists.items.map((playlist, i) =>
                          <PlaylistCard key={i}
                            playlist={playlist}
                            playlistOverview={this.playlistOverview}
                            index={i}
                          />
                        )
                      : 'You have no playlists yet. Nothing to do here...'
                    : <Spinner />
                }
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Dashboard