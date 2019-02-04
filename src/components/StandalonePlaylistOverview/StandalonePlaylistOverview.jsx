import React from "react";
import { API_KEY, CLIENT_ID } from "../YouTubeAuth/credentials";
import GeneralContent from "./GeneralContent";
import PlaylistHolder from "./PlaylistHolder";
import closeButton from "../../img/cancel-music.svg";
import { activePlaylistCard as style } from "../../ui/styles";
import Spinner from "../Spinner";

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
        console.log("tracksData", tracksData);
        this.manageTracksData(tracksData);
        this.setState({ total: tracksData.total });
      })
      .catch((error) => console.log(error));
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.tracksData.length === this.state.total) {
      Promise.all([
        window.gapi.load("client", function() {
          window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: "https://www.googleapis.com/auth/youtube.force-ssl",
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
            ],
          });
        }),
      ]).catch((error) => {
        console.log("error", error);
      });
    }
  };

  manageTracksData = (tracksData) => {
    const tracksDataItems =
      this.state.tracksData === null
        ? tracksData.items
        : this.state.tracksData.concat(tracksData.items);
    this.setState({ tracksData: tracksDataItems }, () => {
      const { next } = tracksData;
      console.log("manage tracks data, next:", Boolean(next));
      if (next) {
        console.log("fetch next tracks data");
        fetch(next, { headers: this.headers })
          .then((response) => response.json())
          .then((nextTracksData) => {
            this.manageTracksData(nextTracksData);
          });
      }
    });
  };

  toggleTrackListVisible = (isFullListVisible) => {
    this.setState({ isFullListVisible }, () => {
      const playlistList = document.querySelector(".playlist-list");
      const playlistHolder = document.querySelector(".playlist-holder");
      console.log("playlistHolder.offsetWidth", playlistHolder.offsetWidth);
      if (this.state.isFullListVisible) {
        playlistHolder.style.height = "auto";
        playlistList.style.marginTop = 0;
      } else {
        playlistList.style.marginTop = `${-playlistList.offsetHeight - 32}px`;
        setTimeout(() => (playlistHolder.style.height = 0), 300);
      }
    });
  };

  handleTransferRequest = (self) => {
    const { tracksData } = this.state;
    if (Array.isArray(tracksData)) {
      const promises = tracksData.map(
        (item) =>
          new Promise((resolve) => {
            console.log("item", item);
            let trackName =
              `${item.track.name} - ` + item.track.artists[0].name;
            let request = window.gapi.client.youtube.search.list({
              q: trackName,
              maxResults: 10,
              order: "relevance",
              part: "snippet",
              type: "video",
              videoCaption: "any",
            });
            request.execute(function(response) {
              console.log("response", response);
              const trackResponseItems = response.items;
              resolve(trackResponseItems);
            });
          })
      );
      Promise.all(promises).then((responses) => {
        console.log("responses", responses);
        self.setState({ youTubeDataResponses: responses });
      });
    }
  };

  render() {
    const { tracksData, youTubeDataResponses, isFullListVisible } = this.state;
    const { playlist, playlistOverview, googleUser } = this.props;

    console.log("tracksData", tracksData);
    console.log("youTubeDataResponses", youTubeDataResponses);

    return (
      <div className={"active"} style={style.wrapper}>
        {(tracksData && (
          <div>
            <div style={style.titleWrapper}>
              <h3 style={style.title}>{playlist.name}</h3>
              <img
                style={style.closeButton}
                onClick={playlistOverview}
                src={closeButton}
                alt={"icon more"}
              />
            </div>
            <GeneralContent
              playlist={playlist}
              tracksData={tracksData}
              toggleTrackList={this.toggleTrackListVisible}
              isFullListVisible={isFullListVisible}
              googleUser={googleUser}
              handleTransferRequest={() => this.handleTransferRequest(this)}
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
