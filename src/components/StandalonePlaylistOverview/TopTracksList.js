import React from "react";
import { activePlaylistCard as style } from "../../ui/styles";

const TopTracksList = ({ tracks }) =>
  tracks
    .map((trackData) => trackData.track)
    .sort((a, b) => b.popularity - a.popularity)
    .filter((track, i) => i < 3)
    .map((track, i) => (
      <li key={i} style={style.listElement}>
        <span style={style.colorWhite}>
          {(function() {
            let trackDescription = String(
              `${track.name} - ` +
                track.artists.map((artist) => artist.name).join(", ")
            );
            if (trackDescription.length >= 50) {
              return trackDescription.slice(0, 50) + "...";
            } else {
              return trackDescription;
            }
          })()}
        </span>
      </li>
    ));

export default TopTracksList;
