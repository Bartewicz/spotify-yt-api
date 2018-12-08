import React from "react";
import { activePlaylistCard as style } from "../../ui/styles";

const PlaylistList = ({ tracks }) => (
  <ol>
    {tracks
      .map((trackData) => trackData.track)
      .map((track, i) => (
        <li key={i} style={style.listElement}>
          <p style={{ ...style.colorWhite, ...style.trackTitle }}>
            {`${track.name} - ` +
              track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </li>
      ))}
  </ol>
);

export default PlaylistList;
