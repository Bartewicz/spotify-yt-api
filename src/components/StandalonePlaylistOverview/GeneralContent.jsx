import React from "react";

import TopTracksList from "./TopTracksList";
import Spinner from "../Spinner";

const GeneralContent = ({
  playlist,
  tracksData,
  toggleTrackList,
  isFullListVisible,
  googleUser,
  handleTransferRequest,
  handleTransferInit,
  youTubeResponses,
  transferPending,
  transferSuccesfull,
  tracksToInsert,
  counter,
}) => {
  const {
    contentWrapper,
    coverImage,
    detailsSection,
    topTracksList,
    sectionTitle,
    expandButton,
    textError,
    tracksCounter,
  } = styles;

  return (
    <div style={contentWrapper}>
      <img
        style={coverImage}
        src={playlist.images[0].url}
        alt={"playlist's cover"}
      />
      <div style={detailsSection}>
        <h4 style={sectionTitle}>{"Most popular tracks:"}</h4>
        <ol style={topTracksList}>
          <TopTracksList tracks={tracksData} />
        </ol>
        <button style={expandButton} onClick={() => toggleTrackList()}>
          {!isFullListVisible ? "See all..." : "Hide..."}
        </button>
        {transferSuccesfull ? (
          <p style={{ color: "#1db954" }}>Playlist transfer successfull!</p>
        ) : transferPending ? (
          <div style={{ display: "flex", flexWrap: "nowrap" }}>
            <p
              style={{ marginRight: 20 }}
            >{`Transfered ${counter} / ${tracksToInsert}`}</p>
            <Spinner />
          </div>
        ) : !googleUser ? (
          <span style={textError}>Connect your YT account</span>
        ) : youTubeResponses.length ? (
          <button
            style={{ ...expandButton, backgroundColor: "red" }}
            onClick={() => {
              handleTransferRequest();
            }}
          >
            Transfer now!
          </button>
        ) : (
          <button
            style={expandButton}
            onClick={() => {
              toggleTrackList(true);
              handleTransferInit();
            }}
          >
            Init transfer
          </button>
        )}
      </div>
      <div style={detailsSection}>
        <div>
          <h4 style={sectionTitle}>
            {"Total tracks: "}
            <span style={tracksCounter}>{playlist.tracks.total}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GeneralContent;

const styles = {
  contentWrapper: {
    paddingTop: "20px",
    paddingBottom: "20px",
    boxSizing: "padding-box",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  coverImage: {
    height: "200px",
    width: "200px",
    margin: "1.33em 0",
    objectFit: "cover",
  },
  detailsSection: {
    display: "flex",
    flexFlow: "column nowrap",
    alignSelf: "flex-start",
    marginLeft: "20px",
  },
  sectionTitle: {
    marginBottom: 3,
  },
  topTracksList: {
    marginBlockStart: "1.5em",
    marginBlockEnd: "1.5em",
    paddingInlineStart: "1rem",
  },
  textError: {
    color: "red",
  },
  expandButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "2 solid white",
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#FFF",
    cursor: "pointer",
  },
  tracksCounter: {
    marginLeft: "10px",
    color: "white",
    fontWeight: "bold",
  },
};
