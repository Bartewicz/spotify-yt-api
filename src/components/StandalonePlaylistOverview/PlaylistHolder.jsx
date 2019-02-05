import React from "react";

import PlaylistList from "./PlaylistList";

const PlaylistHolder = ({ tracksData, youTubeDataResponses }) => {
  const { playlistHolder, playlistList } = styles;

  return (
    <div style={playlistHolder} className={"playlist-holder"}>
      <div className={"playlist-list"} style={playlistList}>
        {
          <PlaylistList
            tracks={tracksData}
            youTubeDataResponses={youTubeDataResponses}
          />
        }
      </div>
    </div>
  );
};

export default PlaylistHolder;

const styles = {
  playlistHolder: {
    height: 0,
    overflow: "hidden",
  },
  playlistList: {
    transition: "margin-top 0.3s ease-in-out",
  },
};
