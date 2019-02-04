export const auth = {
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

export const dashboard = {
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

export const youTubeAuth = {
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

export const playlistCard = {
  wrapper: {
    backgroundColor: "#102433",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "240px",
    boxSizing: "border-box",
    margin: "10px",
    padding: "15px 20px",
    borderRadius: "20px",
    transition: "opacity 0.15s ease-in-out",
  },
  titleWrapper: {
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    marginBottom: "15px",
  },
  title: {
    margin: 0,
    fontSize: "1rem",
    textAlign: "center",
  },
  imageWrapper: {
    paddingTop: "10px",
    paddingBottom: "10px",
    boxSizing: "padding-box",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
  },
  coverImage: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
  playlistDetails: {
    width: "200px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tracksCounter: {
    display: "flex",
    flexFlow: "row nowrap",
    flexGrow: 1,
  },
  moreButton: {
    width: "25px",
    cursor: "pointer",
  },
};

export const activePlaylistCard = {
  wrapper: {
    opacity: 0,
    backgroundColor: "#102433",
    boxSizing: "border-box",
    display: "flex",
    flexFlow: "column nowrap",
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    minWidth: "260px",
    maxWidth: "1000px",
    marginBottom: "36px",
    padding: "20px",
    borderRadius: "20px",
    color: "#888",
    transition: "opacity 0.3s ease-in-out",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  title: {
    width: "100%",
    color: "white",
    fontSize: "1rem",
    textAlign: "center",
  },
  closeButton: {
    width: "25px",
    cursor: "pointer",
    margin: "10px 0 0 10px",
    alignSelf: "flex-start",
  },
  contentWrapper: {
    paddingTop: "20px",
    paddingBottom: "20px",
    boxSizing: "padding-box",
    borderTop: "1px solid rgba(255, 255, 255, 0.5)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  coverImage: {
    height: "200px",
    width: "200px",
    margin: "1.33em 0",
    objectFit: "cover",
  },
  detailsSection: {
    display: "flex",
    flexFlow: "column nowrap",
    alignSelf: "flex-start",
    marginLeft: "20px",
  },
  sectionTitle: {
    marginBottom: 3,
  },
  topTracksList: {
    marginBlockStart: "1.5em",
    marginBlockEnd: "1.5em",
    paddingInlineStart: "1rem",
  },
  listElement: {
    lineHeight: "1.5",
  },
  textWhite: {
    color: "#FFF",
  },
  textError: {
    color: "red",
  },
  expandButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(255,255,255,0.15)",
    border: "2 solid white",
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: "#FFF",
    cursor: "pointer",
  },
  tracksCounter: {
    marginLeft: "10px",
    color: "white",
    fontWeight: "bold",
  },
  playlistHolder: {
    height: 0,
    overflow: "hidden",
  },
  playlistList: {
    transition: "margin-top 0.3s ease-in-out",
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
  table: {
    main: {
      borderCollapse: "collapse",
    },
    row: {
      borderBottom: "1px solid white",
    },
    cell: {
      padding: "5px 5px 0 5px",
      textAlign: "center",
      wordWrap: "all",
    },
    title: {
      color: "white",
      textAlign: "left",
      maxWidth: 480,
    },
    time: {
      width: "50px",
      color: "white",
    },
    ellipsis: {
      marginBlockStart: 0,
      marginBlockEnd: 0,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
  },
};
