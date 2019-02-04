import React from "react";
import { StatefulToolTip } from "react-portal-tooltip";

import { activePlaylistCard as style } from "../../ui/styles";
import PlaylistListRow from "./PlaylistListRow";

class PlaylistList extends React.Component {
  state = {
    toolTipRef: null,
    context: "",
  };

  showTooltip = (element, context) => {
    this.setState({ toolTipRef: element, context });
  };

  render() {
    const { tracks, youTubeDataResponses } = this.props;

    return (
      <div>
        <table style={style.table.main}>
          <thead>
            <tr>
              <th style={style.table.cell}>#</th>
              <th style={style.table.cell}>Title</th>
              <th style={style.table.cell}>Artist</th>
              <th style={style.table.cell}>Duration</th>
              {youTubeDataResponses.length ? (
                <th style={style.table.cell}>YouTube Cover</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {tracks
              .map((trackData) => trackData.track)
              .map((track, i) => (
                <PlaylistListRow
                  key={i}
                  index={i}
                  track={track}
                  response={youTubeDataResponses[i]}
                />
              ))}
          </tbody>
        </table>
        <StatefulToolTip parent={this.state.toolTipRef}>
          {this.state.context}
        </StatefulToolTip>
      </div>
    );
  }
}

export default PlaylistList;
