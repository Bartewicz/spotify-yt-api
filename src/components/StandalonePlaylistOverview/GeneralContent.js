import React from 'react'
import TopTracksList from './TopTracksList'
import { activePlaylistCard as style } from '../../ui/styles'
import Spinner from '../Spinner';

const GeneralContent = ({ playlist, tracksData, toggleTrackList, isFullListVisible }) => (
  <div style={style.contentWrapper}>
    <img style={style.coverImage}
      src={playlist.images[0].url}
      alt={"playlist's cover"} />
    <div style={style.detailsSection}>
      <h4 style={style.sectionTitle}>
        {'Most popular tracks:'}
      </h4>
      <ol style={style.topTracksList}>
        {
          tracksData
            ? <TopTracksList
              tracks={tracksData.items}
            />
            : <Spinner />
        }
      </ol>
      <button style={style.expandButton}
        onClick={() => toggleTrackList(!isFullListVisible)}
      >
        {
          !isFullListVisible
            ? 'See all...'
            : 'Hide...'
        }
      </button>
    </div>
    <div style={style.detailsSection}>
      <div>
        <h4 style={style.sectionTitle}>
          {'Total tracks: '}
          <span style={style.tracksCounter}>
            {playlist.tracks.total}
          </span>
        </h4>
      </div>
    </div>
  </div>
)

export default GeneralContent