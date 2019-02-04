import React from "react";
import TopTracksList from "./TopTracksList";
import { activePlaylistCard as style } from "../../ui/styles";

const GeneralContent = ({
  playlist,
  tracksData,
  toggleTrackList,
  isFullListVisible,
  googleUser,
  handleTransferRequest,
}) => (
  <div style={style.contentWrapper}>
    <img
      style={style.coverImage}
      src={playlist.images[0].url}
      alt={"playlist's cover"}
    />
    <div style={style.detailsSection}>
      <h4 style={style.sectionTitle}>{"Most popular tracks:"}</h4>
      <ol style={style.topTracksList}>
        {<TopTracksList tracks={tracksData} />}
      </ol>
      <button
        style={style.expandButton}
        onClick={() => toggleTrackList(!isFullListVisible)}
      >
        {!isFullListVisible ? "See all..." : "Hide..."}
      </button>
      {!googleUser ? (
        <span style={style.textError}>Connect your YT account</span>
      ) : (
        <button
          style={style.expandButton}
          onClick={() => {
            toggleTrackList(true);
            handleTransferRequest();
          }}
          disabled={Array.isArray(tracksData) && googleUser ? false : true}
        >
          Init transfer
        </button>
      )}
    </div>
    <div style={style.detailsSection}>
      <div>
        <h4 style={style.sectionTitle}>
          {"Total tracks: "}
          <span style={style.tracksCounter}>{playlist.tracks.total}</span>
        </h4>
      </div>
    </div>
  </div>
);

export default GeneralContent;
