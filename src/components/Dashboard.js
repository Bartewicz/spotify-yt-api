import React from 'react'
import PlaylistCard from './PlaylistCard'
import { dashboard as style } from '../ui/styles'

class Dashboard extends React.Component {
  state = {
    playlists: []
  }

  componentDidMount() {
    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: {
        'Authorization': `Bearer ${this.props.accessToken}`
      }
    }).then(
      response => response.json()
    ).then(
      playlists => {
        this.setState({ playlists })
        console.log(playlists)
      }
    ).catch(
      error => console.log(error)
    )
  }

  render() {
    return (
      <div style={style.wrapper}>
        <h1 className={'text-center'}>
          {`Welcome, ${this.props.user.display_name}`}
        </h1>
        <div style={style.avatarWrapper}>
          <img style={style.avatar}
            src={this.props.user.images[0].url}
            alt={"user's avatar"}
          />
        </div>
        <h2 className={'text-center'}>
          {'These are your Spotify playlists:'}
        </h2>
        <div style={style.playlistsWrapper}>
          {this.state.playlists.items ?
            this.state.playlists.items.map((playlist, i) =>
              <PlaylistCard key={i} playlist={playlist} />
            ) :
            'Loading...'
          }
        </div>
      </div>
    )
  }
}

export default Dashboard