import React from "react";

import { API_KEY, CLIENT_ID } from "../YouTubeAuth/credentials";
import GeneralContent from "./GeneralContent";
import PlaylistHolder from "./PlaylistHolder";
import closeButton from "../../img/cancel-music.svg";
import Spinner from "../Spinner";
import * as logic from "./logic";

const SCOPE = "https://www.googleapis.com/auth/youtube.force-ssl";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
];

class StandalonePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.headers = {
      Authorization: `Bearer ${props.accessToken}`,
    };
  }

  state = {
    tracksData: null,
    youTubeDataResponses: [],
    isFullListVisible: false,
    transferPending: false,
    transferSuccesfull: false,
    tracksToInsert: 0,
    counter: 0,
  };

  componentDidMount() {
    // opacity transition
    const { playlist } = this.props;
    const active = document.querySelector(".active");
    active.style.opacity = 1;

    // obtain playlist tracks data
    fetch(`https://api.spotify.com/v1/playlists/${playlist.id}/tracks`, {
      headers: this.headers,
    })
      .then((response) => response.json())
      .then((tracksData) => {
        logic.manageTracksData(this, tracksData);
        this.setState({ total: tracksData.total });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate = () => {
    const { tracksData, total } = this.state;
    if (tracksData.length === total) {
      Promise.all([
        window.gapi.load("client", function() {
          window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPE,
            discoveryDocs: DISCOVERY_DOCS,
          });
        }),
      ]).catch((error) => {
        console.log("error", error);
      });
    }
  };

  render() {
    const {
      tracksData,
      youTubeDataResponses,
      isFullListVisible,
      transferPending,
      transferSuccesfull,
      tracksToInsert,
      counter,
    } = this.state;
    const { playlist, playlistOverview, googleUser } = this.props;

    const {
      wrapper,
      titleWrapper,
      title,
      closeButton: closeButtonStyle,
    } = styles;

    return (
      <div className={"active"} style={wrapper}>
        {(tracksData && (
          <div>
            <div style={titleWrapper}>
              <h3 style={title}>{playlist.name}</h3>
              <img
                style={closeButtonStyle}
                onClick={playlistOverview}
                src={closeButton}
                alt={"icon more"}
              />
            </div>
            <GeneralContent
              playlist={playlist}
              tracksData={tracksData}
              toggleTrackList={(bool) =>
                logic.toggleTrackListVisible(this, bool)
              }
              isFullListVisible={isFullListVisible}
              googleUser={googleUser}
              handleTransferRequest={() => logic.handleTransferRequest(this)}
              handleTransferInit={() => logic.onTransferInit(this)}
              youTubeResponses={youTubeDataResponses}
              transferPending={transferPending}
              transferSuccesfull={transferSuccesfull}
              tracksToInsert={tracksToInsert}
              counter={counter}
            />
            <PlaylistHolder
              tracksData={tracksData}
              youTubeDataResponses={youTubeDataResponses}
            />
          </div>
        )) || <Spinner />}
      </div>
    );
  }
}

export default StandalonePlaylist;

const styles = {
  wrapper: {
    opacity: 0,
    backgroundColor: "#102433",
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "column nowrap",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    minWidth: "260px",
    maxWidth: "1000px",
    marginBottom: "36px",
    padding: "20px",
    borderRadius: "20px",
    color: "#888",
    transition: "opacity 0.3s ease-in-out",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  title: {
    width: "100%",
    color: "white",
    fontSize: "1rem",
    textAlign: "center",
  },
  closeButton: {
    width: "25px",
    cursor: "pointer",
    margin: "10px 0 0 10px",
    alignSelf: "flex-start",
  },
};
