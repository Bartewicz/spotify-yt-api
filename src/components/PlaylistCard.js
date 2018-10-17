import React from 'react'
import moreIcon from '../img/more.svg'
import { playlistCard } from '../ui/styles'

const PlaylistCard = ({ playlist, index, active, playlistOverview }) => {
  let style = {}
  if (active) {
    style = {
      ...playlistCard,
      wrapper: {
        ...playlistCard.wrapper,
        opacity: 0,
        transform: 'scale(0, 0)'
      }
    }
  } else {
    style = playlistCard
  }
  return (
    <div style={style.wrapper}
      className={'standard'}
    >
      <div style={style.titleWrapper}>
        <h3 style={style.title}>
          {playlist.name}
        </h3>
      </div>
      <div style={style.imageWrapper}>
        <img style={style.coverImage}
          src={playlist.images[0].url}
          alt={"playlist's cover"} />
      </div>
      <div style={style.playlistDetails}>
        <div style={style.tracksCounter}>
          <p>
            {'Tracks: '}
            <b>{playlist.tracks.total}</b>
          </p>
        </div>
        <img style={style.moreButton}
          onClick={() => playlistOverview(index)}
          src={moreIcon}
          alt={'icon more'} />
      </div>
    </div>
  )
}

export default PlaylistCard