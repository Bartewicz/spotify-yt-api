import React from "react";
import PlaylistList from "./PlaylistList";
import { activePlaylistCard as style } from "../../ui/styles";

const PlaylistHolder = ({ tracksData, isFullListVisible }) => (
  <div style={style.playlistHolder} className={"playlist-holder"}>
    {tracksData ? (
      <div className={"playlist-list"} style={style.playlistList}>
        {<PlaylistList tracks={tracksData.items} />}
      </div>
    ) : null}
  </div>
);

export default PlaylistHolder;
