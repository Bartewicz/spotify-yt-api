import React from "react";

const Auth = ({ loginHandler }) => {
  const { wrapper, header, loginButton } = styles;

  return (
    <div style={wrapper}>
      <h1 style={header}>{"Welcome!"}</h1>
      <h2>{"Just log in with your Spotify account to start using the app"}</h2>
      <button onClick={loginHandler} style={loginButton} value={"login-true"}>
        {"Login with Spotify"}
      </button>
    </div>
  );
};

export default Auth;

const styles = {
  wrapper: {
    padding: "50px",
    height: "100%",
    textAlign: "center",
  },
  header: {
    marginTop: 0,
  },
  loginButton: {
    cursor: "pointer",
    height: "50px",
    padding: "0 15px",
    borderRadius: "50px",
    border: 0,
    backgroundColor: "#1db954",
    color: "#fff",
    fontWeight: "bold",
  },
};
