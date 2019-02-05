import React from "react";

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
    } = styles;

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

const styles = {
  tableRow: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    padding: "5px",
    boxSizing: "border-box",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    wordWrap: "all",
  },
  position: {
    width: 20,
  },
  trackTitle: {
    flex: 3,
  },
  artist: {
    flex: 1,
  },
  time: {
    width: 70,
  },
  cover: {
    width: 130,
  },
  attach: {
    width: 60,
  },
};
