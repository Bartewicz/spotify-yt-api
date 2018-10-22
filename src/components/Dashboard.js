import React from 'react'
import PlaylistCard from './PlaylistCard'
import ActivePlaylistCard from './ActivePlaylistCard'
import { dashboard as style } from '../ui/styles'
import YouTubeConnect from './YouTubeAuth';

class Dashboard extends React.Component {
  state = {
    activeCard: null,
    user: '',
    playlists: ''
  }

  componentDidMount() {
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
    if (key) {
      this.setState({ activeCard: key })
      setTimeout(() => {
        const active = document.querySelector('.active')
        const standardPlaylists = document.querySelectorAll('.standard')
        standardPlaylists.forEach(card => card.style.display = 'none')
        active.style.opacity = 1
      }, 150)
    } else {
      const active = document.querySelector('.active')
      active.style.opacity = 0
      const playlistWrapper = document.querySelector('.playlists-wrapper')
      playlistWrapper.style.height = 'auto'
      const standardPlaylists = document.querySelectorAll('.standard')
      standardPlaylists.forEach(card => card.style.display = 'flex')
      
      setTimeout(() => this.setState({ activeCard: null }), 450)
    }
  }
  
  render() {
    return (
      <div>
        {
          !this.state.user ?
          <div className={'text-center'}>
              {'Loading...'}
            </div> :
            <div style={style.wrapper}>
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
                  this.state.playlists ?
                    this.state.playlists.items.length ?
                      this.state.playlists.items.map((playlist, i) =>
                        this.state.activeCard !== i ?
                          <PlaylistCard key={i}
                            active={this.state.activeCard}
                            playlist={playlist}
                            playlistOverview={this.playlistOverview}
                            index={i}
                          /> :
                          <ActivePlaylistCard key={i}
                            active={this.state.activeCard}
                            accessToken={this.props.accessToken}
                            playlist={playlist}
                            playlistOverview={this.playlistOverview}
                            index={i}
                          />
                      ) :
                      'You have no playlists yet. Nothing to do here...'
                    :
                    'Loading...'
                }
              </div>
            </div>
        }
      </div>
    )
  }
}

export default Dashboard