import React from 'react'
import { playlistCard as style } from '../ui/styles'

const PlaylistCard = ({ playlist }) => (
  <div style={style.wrapper}>
  <div style={style.titleWrapper}>
    <h3 style={style.title}>
      {playlist.name}
    </h3>
  </div>
    <div style={style.imageWrapper}>
      <img style={style.coverImage}
        src={playlist.images[0].url}
        alt={"playlist's cover"}
      />
    </div>
    <p>Tracks: {playlist.tracks.total}</p>
  </div>
)

export default PlaylistCard