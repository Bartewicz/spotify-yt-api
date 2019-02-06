import React from "react";

import { onSignInRequest } from "./logic";
import { CLIENT_ID } from "./credentials";
import Icon from "../../img/youtube.png";
import Spinner from "../Spinner";

const SCOPES = `https://www.googleapis.com/auth/youtube.force-ssl`;
const SRCIPT_SRC = `https://apis.google.com/js/api.js?onload=gapiAuthInit`;

class YouTubeConnect extends React.Component {
  state = {
    isGapiLoaded: false,
    isSignedIn: false,
    status: "Log in to your Google account:",
  };

  componentDidMount() {
    const gapiScript = document.createElement("script");
    window.gapiAuthInit = () => {
      window.gapi.load("auth2", function() {
        window.gapi.auth2
          .init({
            client_id: CLIENT_ID,
            scope: SCOPES,
          })
          .then(() => {
            window.gapi.auth2.GoogleAuth = window.gapi.auth2.getAuthInstance();
          })
          .catch((error) => console.log(error));
      });
    };
    gapiScript.src = SRCIPT_SRC;
    document.body.appendChild(gapiScript);
    Promise.all([window.gapiAuthInit]).then(() =>
      this.setState({ isGapiLoaded: true })
    );
  }

  render() {
    const { isSignedIn, status, isGapiLoaded } = this.state;
    const { user } = this.props;

    const { userName, icon: iconStyle, btn } = styles;

    return (
      <div className={"text-center"}>
        {isSignedIn ? (
          <h4 style={userName}>
            <img style={iconStyle} src={Icon} alt={"youtube icon"} />
            <span>{user.name}</span>
          </h4>
        ) : (
          <h4>{status}</h4>
        )}
        {isGapiLoaded ? (
          <button style={btn} onClick={() => onSignInRequest(this)}>
            {!isSignedIn ? "Connect YouTube" : "Sign Out"}
          </button>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default YouTubeConnect;

const styles = {
  userName: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
  },
  icon: {
    display: "inline",
    height: "16px",
    marginRight: "5px",
  },
  btn: {
    cursor: "pointer",
    padding: "10px",
    borderRadius: "10px",
    border: 0,
    backgroundColor: "#f00",
    color: "#fff",
    fontWeight: "bold",
  },
};
