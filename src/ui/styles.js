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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',

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
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  }
}

export const playlistCard = {
  wrapper: {
    backgroundColor: '#102433',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '220px',
    margin: '10px',
    padding: '15px 10px',
    borderRadius: '20px'
  },
  titleWrapper: {
    display: 'flex',
    flexGrow: 1,
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
    borderRadius: '10%',
    width: '200px',
    height: '200px',
    objectFit: 'cover'
  }
}
