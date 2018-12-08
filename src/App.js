import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
// Components
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
// UI
import "./App.css";
// utils
import queryString from "query-string";

class App extends Component {
  state = {
    access_token: "",
  };

  componentDidMount() {
    const params = queryString.parse(window.location.search);
    if (params.access_token) {
      this.setState({ access_token: params.access_token });
    }
  }

  loginHandler = () => (window.location = "http://localhost:8888/login");

  render() {
    if (!window.location.href.includes("dashboard")) {
      if (this.state.access_token) {
        return <Redirect to={"/dashboard"} />;
      }
    }
    return (
      <div>
        <div className="App">
          <Header />
          <main className="App-main">
            <Route
              exact
              path={"/"}
              component={() => <Auth loginHandler={this.loginHandler} />}
            />
            <Route
              exact
              path={"/dashboard"}
              component={() => (
                <Dashboard accessToken={this.state.access_token} />
              )}
            />
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
