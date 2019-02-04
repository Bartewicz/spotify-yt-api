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
    const { index, track, response, showTooltip, hideTooltip } = this.props;
    const { active } = this.state;

    return (
      <tr style={style.table.row}>
        <td style={style.table.cell}>
          <p>{index + 1}</p>
        </td>
        <td style={{ ...style.table.cell, ...style.table.title }}>
          <p style={style.table.ellipsis}>{track.name}</p>
          {Array.isArray(response) && (
            <div
              style={{
                display: "flex",
                maxWidth: "90%",
                justifyContent: "space-between",
                marginTop: 7,
              }}
            >
              <button style={style.paginationButton} onClick={this.handlePrev}>
                {"<"}
              </button>
              <div
                style={{
                  display: "flex",
                  flexGrow: 0,
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  color: "#888",
                }}
              >
                <b>found: </b>
                <em
                  style={{
                    ...style.table.ellipsis,
                    fontSize: "0.9rem",
                    color: "#CCC",
                    fontWeight: "normal",
                    maxWidth: "440px",
                    boxSizing: "border-box",
                    marginTop: 2,
                    paddingRight: 5,
                    paddingLeft: 5,
                  }}
                >
                  {response[active].snippet.title}
                </em>
              </div>
              <button style={style.paginationButton} onClick={this.handleNext}>
                {">"}
              </button>
            </div>
          )}
        </td>
        <td style={style.table.cell}>
          <p style={style.table.ellipsis}>{track.artists[0].name}</p>
        </td>
        <td style={{ ...style.table.cell, ...style.table.time }}>
          {moment(track.duration_ms).format("m:ss")}
        </td>
        {Array.isArray(response) && (
          <td style={{ ...style.table.cell, width: 120 }}>
            <img
              src={response[active].snippet.thumbnails.default.url}
              alt={response[active].title}
              data-id={response[active].id.videoId}
              ref={(element) => {
                this.element = element;
              }}
              onMouseEnter={() =>
                showTooltip(this.element, response[active].title)
              }
              onMouseLeave={() => hideTooltip()}
            />
          </td>
        )}
      </tr>
    );
  }
}
