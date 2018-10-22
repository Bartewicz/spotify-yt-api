export const auth = {
  wrapper: {
    padding: '50px',
    height: '100%',
    textAlign: 'center'
  },
  header: {
    marginTop: 0
  },
  loginButton: {
    cursor: 'pointer',
    height: '50px',
    padding: '0 15px',
    borderRadius: '50px',
    border: 0,
    backgroundColor: '#1db954',
    color: '#fff',
    fontWeight: 'bold'
  }
}

export const dashboard = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto'
  },
  avatarWrapper: {
    borderRadius: '100%',
    height: '100px',
    width: '100px',
    overflow: 'hidden',
    border: '10px solid #102433'
  },
  avatar: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  },
  playlistsWrapper: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap',
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    transition: 'height 0.3s ease-in-out 0.15s'
  }
}

export const youTubeAuth = {
  userName: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center'
  },
  icon: {
    display: 'inline',
    height: '16px',
    marginRight: '5px'
  },
  btn: {
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '10px',
    border: 0,
    backgroundColor: '#f00',
    color: '#fff',
    fontWeight: 'bold'
  }
}

export const playlistCard = {
  wrapper: {
    backgroundColor: '#102433',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '240px',
    boxSizing: 'border-box',
    margin: '10px',
    padding: '15px 20px',
    borderRadius: '20px',
    transition: '0.15s all ease-in-out 0'
  },
  titleWrapper: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    marginBottom: '15px'
  },
  title: {
    margin: 0,
    fontSize: '1rem',
    textAlign: 'center'
  },
  imageWrapper: {
    paddingTop: '10px',
    paddingBottom: '10px',
    boxSizing: 'padding-box',
    borderTop: '1px solid rgba(255, 255, 255, 0.5)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)'
  },
  coverImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover'
  },
  playlistDetails: {
    width: '200px',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tracksCounter: {
    display: 'flex',
    flexFlow: 'row nowrap',
    flexGrow: 1
  },
  moreButton: {
    width: '25px',
    cursor: 'pointer'
  }
}

export const activePlaylistCard = {
  wrapper: {
    position: 'absolute',
    opacity: 0,
    backgroundColor: '#102433',
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'column nowrap',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minWidth: '260px',
    maxWidth: '1000px',
    marginTop: '10px',
    padding: '20px',
    borderRadius: '20px',
    color: '#888888',
    transition: 'opacity 0.3s ease-in-out 0.15s'
  },
  titleWrapper: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginBottom: '15px'
  },
  title: {
    width: '100%',
    fontSize: '1rem',
    color: 'white',
    textAlign: 'center'
  },
  closeButton: {
    width: '25px',
    cursor: 'pointer',
    margin: '10px 0 0 10px',
    alignSelf: 'flex-start'
  },
  contentWrapper: {
    paddingTop: '20px',
    paddingBottom: '20px',
    boxSizing: 'padding-box',
    borderTop: '1px solid rgba(255, 255, 255, 0.5)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  coverImage: {
    height: '200px',
    width: '200px',
    margin: '1.33em 0',
    objectFit: 'cover'
  },
  detailsSection: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignSelf: 'flex-start'
  },
  sectionTitle: {
    marginBottom: 0
  },
  topTracksList: {
    marginBlockStart: '1.5em',
    marginBlockEnd: '1.5em',
    paddingInlineStart: '1rem'
  },
  listElement: {
    lineHeight: '1.5'
  },
  colorWhite: {
    color: '#FFF'
  },
  expandButton: {
    alignSelf: 'flex-start',
    backgroundColor: 'transparent',
    border: 0,
    fontSize: '0.9rem',
    fontWeight: 'bold',
    color: '#FFF',
    padding: 0,
    cursor: 'pointer'
  },
  tracksCounter: {
    marginLeft: '10px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.20rem'
  },
  playlistHolder: {
    visibility: 'hidden',
    overflow: 'hidden'
  },
  playlistListHidden: {
    transition: 'margin-top 0.3s ease-in-out 0.15s'
  },
  playlistListVisible: {
    marginTop: 0
  }
}