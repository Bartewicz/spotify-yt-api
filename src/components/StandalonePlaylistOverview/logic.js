export const manageTracksData = (self, tracksData) => {
  const tracksDataItems =
    self.state.tracksData === null
      ? tracksData.items
      : self.state.tracksData.concat(tracksData.items);
  self.setState({ tracksData: tracksDataItems }, () => {
    const { next } = tracksData;
    if (next) {
      fetch(next, { headers: self.headers })
        .then((response) => response.json())
        .then((nextTracksData) => {
          self.manageTracksData(nextTracksData);
        });
    }
  });
};

export const toggleTrackListVisible = (self, bool) => {
  const isFullListVisible = bool || !self.state.isFullListVisible;
  self.setState({ isFullListVisible }, () => {
    const playlistList = document.querySelector(".playlist-list");
    const playlistHolder = document.querySelector(".playlist-holder");
    if (isFullListVisible) {
      playlistHolder.style.height = "auto";
      playlistList.style.marginTop = 0;
    } else {
      playlistList.style.marginTop = `${-playlistList.offsetHeight - 32}px`;
      setTimeout(() => (playlistHolder.style.height = 0), 300);
    }
  });
};

export const onTransferInit = (self) => {
  const { tracksData } = self.state;
  if (Array.isArray(tracksData)) {
    const promises = tracksData.map(
      (item) =>
        new Promise((resolve) => {
          let trackName = `${item.track.name} - ` + item.track.artists[0].name;
          let request = window.gapi.client.youtube.search.list({
            q: trackName,
            maxResults: 10,
            order: "relevance",
            part: "snippet",
            type: "video",
            videoCaption: "any",
          });
          request.execute(function(response) {
            const trackResponseItems = response.items;
            resolve(trackResponseItems);
          });
        })
    );
    Promise.all(promises).then((responses) => {
      self.setState({ youTubeDataResponses: responses });
    });
  }
};

export const handleTransferRequest = (self) => {
  const fetchPlaylistId = new Promise((resolve) => {
    let playlistId;

    window.gapi.client.load("youtube", "v3", () => {
      const request = window.gapi.client.youtube.playlists.insert({
        part: "snippet,status",
        resource: {
          snippet: {
            title: self.props.playlist.name,
          },
          status: {
            privacyStatus: "private",
          },
        },
      });

      request.execute(function(response) {
        const { result } = response;
        if (result) {
          console.log("playlistId", result.id);
          playlistId = result.id;
          resolve(playlistId);
        } else {
          console.log(response);
        }
      });
    });
  });
  const ids = Array.from(document.querySelectorAll("input:checked")).map(
    (el) => el.id
  );
  self.setState({ transferPending: true, tracksToInsert: ids.length }, () =>
    Promise.all([fetchPlaylistId])
      .then(async (playlistId) => {
        for (let i = 0; i < ids.length; i++) {
          await new Promise((resolve) => {
            const id = ids[i];
            const details = {
              videoId: id,
              kind: "youtube#video",
            };
            const request = window.gapi.client.youtube.playlistItems.insert({
              part: "snippet",
              resource: {
                snippet: {
                  playlistId: playlistId[0],
                  resourceId: details,
                },
              },
            });
            request.execute(function(response) {
              self.setState((prevState) => ({
                counter: prevState.counter + 1,
              }));
              resolve();
            });
          });
        }
      })
      .then(() => {
        onTransferEnd(self);
      })
      .catch((error) => {
        console.error(error);
      })
  );
};

const onTransferEnd = (self) => {
  self.setState({ transferPending: false, transferSuccesfull: true });
};
