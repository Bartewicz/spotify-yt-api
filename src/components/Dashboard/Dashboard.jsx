import React from "react";

import YouTubeConnect from "../YouTubeAuth";
import PlaylistCard from "../PlaylistCard";
import StandalonePlaylistOverview from "../StandalonePlaylistOverview";
import Spinner from "../Spinner";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.headers = {
      Authorization: `Bearer ${props.accessToken}`,
    };
  }

  state = {
    activeCard: null,
    spotifyUser: null,
    googleUser: null,
    playlists: null,
  };

  componentDidMount() {
    // obtain user and user's playlists data
    fetch(`https://api.spotify.com/v1/me`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((spotifyUser) => this.setState({ spotifyUser }))
      .catch((error) => console.log(error));
    fetch(`https://api.spotify.com/v1/me/playlists`, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((playlists) => this.setState({ playlists }))
      .catch((error) => console.log(error));
  }

  setGoogleUserToState = (googleUser) => {
    this.setState({ googleUser });
  };

  playlistOverview = (key) => {
    // check key from active is number (from card) or null (no active card)
    if (typeof key === "number") {
      const standardPlaylists = document.querySelectorAll(".standard");
      standardPlaylists.forEach((card) => {
        card.style.opacity = 0;
      });
      setTimeout(() => {
        standardPlaylists.forEach((card) => (card.style.display = "none"));
        this.setState({ activeCard: key });
      }, 150);
    } else {
      const active = document.querySelector(".active");
      active.style.opacity = 0;
      setTimeout(
        () =>
          this.setState({ activeCard: null }, () => {
            const standardPlaylists = document.querySelectorAll(".standard");
            standardPlaylists.forEach((card) => {
              card.style.display = "flex";
              setTimeout(() => (card.style.opacity = 1), 200);
            });
          }),
        300
      );
    }
  };

  render() {
    const { spotifyUser, googleUser, playlists, activeCard } = this.state;
    const { accessToken } = this.props;

    const { wrapper, avatarWrapper, avatar, playlistsWrapper } = styles;

    return (
      <div>
        {(!spotifyUser && (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        )) || (
          <div style={wrapper}>
            <h1 className={"text-center"}>{`Welcome, ${
              spotifyUser.display_name
            }`}</h1>
            <div style={avatarWrapper}>
              <img
                style={avatar}
                src={spotifyUser.images[0].url}
                alt={"user's avatar"}
              />
            </div>
            <YouTubeConnect
              returnUser={this.setGoogleUserToState}
              user={googleUser}
            />
            <h2 className={"text-center"}>
              {"Manage your Spotify playlists:"}
            </h2>
            <div style={playlistsWrapper} className={"playlists-wrapper"}>
              {playlists ? (
                playlists.hasOwnProperty("items") ? (
                  typeof activeCard === "number" ? (
                    playlists.items
                      .filter((p, i) => activeCard === i)
                      .map((playlist, i) => (
                        <StandalonePlaylistOverview
                          key={i}
                          active={activeCard}
                          accessToken={accessToken}
                          playlist={playlist}
                          playlistOverview={this.playlistOverview}
                          googleUser={googleUser}
                          index={i}
                        />
                      ))
                  ) : (
                    playlists.items.map((playlist, i) => (
                      <PlaylistCard
                        key={i}
                        playlist={playlist}
                        playlistOverview={this.playlistOverview}
                        index={i}
                      />
                    ))
                  )
                ) : (
                  "You have no playlists yet. Nothing to do here..."
                )
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  },
  avatarWrapper: {
    borderRadius: "100%",
    height: "100px",
    width: "100px",
    overflow: "hidden",
    border: "10px solid #102433",
  },
  avatar: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  playlistsWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    flexGrow: 1,
    justifyContent: "center",
    transition: "height 0.3s ease-in-out 0.15s",
  },
};
