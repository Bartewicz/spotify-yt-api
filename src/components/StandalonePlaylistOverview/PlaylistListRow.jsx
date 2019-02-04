import React, { Component } from "react";
import { activePlaylistCard as style } from "../../ui/styles";
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
    } = style;

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
