import React from "react";

const TopTracksList = ({ tracks }) => {
  const { listElement, textWhite } = styles;

  return tracks
    .map((trackData) => trackData.track)
    .sort((a, b) => b.popularity - a.popularity)
    .filter((track, i) => i < 3)
    .map((track, i) => (
      <li key={i} style={listElement}>
        <span style={textWhite}>
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
};

export default TopTracksList;

const styles = {
  listElement: {
    lineHeight: "1.5",
  },
  textWhite: {
    color: "#FFF",
  },
};
