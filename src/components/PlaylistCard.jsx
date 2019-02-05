import React from "react";

import MoreIcon from "../img/more.svg";

const PlaylistCard = ({ playlist, index, playlistOverview }) => {
  const {
    wrapper,
    titleWrapper,
    title,
    imageWrapper,
    coverImage,
    playlistDetails,
    tracksCounter,
    moreButton,
  } = styles;

  return (
    <div style={wrapper} className={"standard"}>
      <div style={titleWrapper}>
        <h3 style={title}>{playlist.name}</h3>
      </div>
      <div style={imageWrapper}>
        <img
          style={coverImage}
          src={playlist.images[0].url}
          alt={"playlist's cover"}
        />
      </div>
      <div style={playlistDetails}>
        <div style={tracksCounter}>
          <p>
            {"Tracks: "}
            <b>{playlist.tracks.total}</b>
          </p>
        </div>
        <img
          style={moreButton}
          onClick={() => playlistOverview(index)}
          src={MoreIcon}
          alt={"icon more"}
        />
      </div>
    </div>
  );
};

export default PlaylistCard;

const styles = {
  wrapper: {
    backgroundColor: "#102433",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "240px",
    boxSizing: "border-box",
    margin: "10px",
    padding: "15px 20px",
    borderRadius: "20px",
    transition: "opacity 0.15s ease-in-out",
  },
  titleWrapper: {
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    marginBottom: "15px",
  },
  title: {
    margin: 0,
    fontSize: "1rem",
    textAlign: "center",
  },
  imageWrapper: {
    paddingTop: "10px",
    paddingBottom: "10px",
    boxSizing: "padding-box",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
  },
  coverImage: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
  playlistDetails: {
    width: "200px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tracksCounter: {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
  },
  moreButton: {
    width: "25px",
    cursor: "pointer",
  },
};
