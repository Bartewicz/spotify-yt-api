import React from "react";

import { activePlaylistCard as style } from "../../ui/styles";
import PlaylistListRow from "./PlaylistListRow";

class PlaylistList extends React.Component {
  render() {
    const { tracks, youTubeDataResponses } = this.props;
    const {
      tableRow,
      tableCell,
      position,
      trackTitle,
      artist,
      time,
      cover,
      attach,
    } = style;

    return (
      <div>
        <div style={tableRow}>
          <div style={{ ...tableCell, ...position }}>#</div>
          <div style={{ ...tableCell, ...trackTitle }}>Artist</div>
          <div style={{ ...tableCell, ...artist }}>Title</div>
          <div style={{ ...tableCell, ...time }}>Duration</div>
          {youTubeDataResponses.length ? (
            <div style={{ ...tableCell, ...cover }}>YouTube Cover</div>
          ) : null}
          {youTubeDataResponses.length ? (
            <div style={{ ...tableCell, ...attach }}>Attach</div>
          ) : null}
        </div>
        {tracks
          .map((trackData) => trackData.track)
          .map((track, i) => (
            <PlaylistListRow
              key={i}
              index={i}
              track={track}
              response={youTubeDataResponses[i]}
            />
          ))}
      </div>
    );
  }
}

export default PlaylistList;
