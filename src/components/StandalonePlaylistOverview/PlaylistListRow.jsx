import React, { Component } from "react";
import moment from "moment";

export default class PlaylistListRow extends Component {
  state = {
    active: 0,
    contentDetails: null,
  };

  handlePrev = () => {
    const { active } = this.state;
    const { response } = this.props;
    if (active === 0) {
      const nextActive = response.length - 1;
      this.setState({ active: nextActive });
    } else {
      this.setState((prevState) => {
        const nextActive = prevState.active - 1;
        return {
          active: nextActive,
        };
      });
    }
  };

  handleNext = () => {
    const { active } = this.state;
    const { response } = this.props;
    if (active === response.length - 1) {
      const nextActive = 0;
      this.setState({ active: nextActive });
    } else {
      this.setState((prevState) => {
        const nextActive = prevState.active + 1;
        return {
          active: nextActive,
        };
      });
    }
  };

  render() {
    const { index, track, response } = this.props;
    const { active } = this.state;
    const {
      tableRow,
      tableCell,
      position,
      trackTitle,
      paginationButton,
      responseTitleSection,
      responseTitle,
      artist,
      time,
      cover,
      attach,
      checkbox,
    } = styles;

    return (
      <div style={tableRow}>
        <div style={{ ...tableCell, ...position }}>
          <p>{index + 1}</p>
        </div>
        <div style={{ ...tableCell, ...trackTitle }}>
          {track.name}
          {Array.isArray(response) && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "95%",
                marginTop: 7,
              }}
            >
              <button style={paginationButton} onClick={this.handlePrev}>
                {"<"}
              </button>
              <div style={responseTitleSection}>
                <b>found: </b>
                <em style={responseTitle}>{response[active].snippet.title}</em>
              </div>
              <button style={paginationButton} onClick={this.handleNext}>
                {">"}
              </button>
            </div>
          )}
        </div>
        <div style={{ ...tableCell, ...artist }}>
          <p>{track.artists[0].name}</p>
        </div>
        <div style={{ ...tableCell, ...time }}>
          {moment(track.duration_ms).format("m:ss")}
        </div>
        {Array.isArray(response) && (
          <div style={{ ...tableCell, ...cover }}>
            <img
              src={response[active].snippet.thumbnails.default.url}
              alt={response[active].title}
            />
          </div>
        )}
        {Array.isArray(response) && (
          <div style={{ ...tableCell, ...attach }}>
            <input
              style={checkbox}
              id={response[active].id.videoId}
              type="checkbox"
              defaultChecked={true}
            />
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  tableRow: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    padding: "5px",
    boxSizing: "border-box",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
  },
  tableCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    wordWrap: "all",
  },
  position: {
    width: 20,
  },
  trackTitle: {
    flex: 3,
  },
  paginationButton: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    width: "20px",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "1px solid #CCC",
    borderRadius: 3,
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#CCC",
    cursor: "pointer",
  },
  responseTitleSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "0.8rem",
    color: "#888",
    paddingTop: 2,
    paddingRight: 5,
    paddingLeft: 5,
  },
  responseTitle: {
    fontSize: "0.9rem",
    color: "#CCC",
    fontWeight: "normal",
  },
  artist: {
    flex: 1,
  },
  time: {
    width: 70,
  },
  cover: {
    width: 130,
  },
  attach: {
    width: 60,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
};
