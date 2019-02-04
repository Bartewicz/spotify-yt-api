import React from "react";
import PlaylistList from "./PlaylistList";
import { activePlaylistCard as style } from "../../ui/styles";

const PlaylistHolder = ({ tracksData, youTubeDataResponses }) => (
  <div style={style.playlistHolder} className={"playlist-holder"}>
    <div className={"playlist-list"} style={style.playlistList}>
      {
        <PlaylistList
          tracks={tracksData}
          youTubeDataResponses={youTubeDataResponses}
        />
      }
    </div>
  </div>
);

export default PlaylistHolder;
