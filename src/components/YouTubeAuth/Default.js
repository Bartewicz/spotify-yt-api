import React from 'react'
import { onSignInRequest } from './logic'
import { CLIENT_ID } from './credentials'
import icon from '../../img/youtube.png'
import { youTubeAuth as style } from '../../ui/styles'
import Spinner from '../Spinner';

const SCOPES = `https://www.googleapis.com/auth/youtube.force-ssl`

class YouTubeConnect extends React.Component {
  state = {
    isGapiLoaded: false,
    isSignedIn: false,
    status: 'Log in to your Google account:',
    uesr: null
  }

  componentDidMount() {
    const gapiScript = document.createElement('script')
    window.gapiAuthInit = () => {
      window.gapi.load('auth2', function () {
        window.gapi.auth2.init({
          client_id: CLIENT_ID,
          scope: SCOPES
        }).then(() => {
          window.gapi.auth2.GoogleAuth = window.gapi.auth2.getAuthInstance()
        }).catch(error => console.log(error))
      })
    }
    gapiScript.src = `https://apis.google.com/js/api.js?onload=gapiAuthInit`
    document.body.appendChild(gapiScript)
    Promise.all([window.gapiAuthInit]).then(() =>
      this.setState({ isGapiLoaded: true })
    )
  }

  render() {
    return (
      <div className={'text-center'}>
        {
          this.state.isSignedIn ?
            <h4 style={style.userName}>
              <img style={style.icon}
                src={icon}
                alt={'youtube icon'}
              />
              <span>
                {this.state.user.name}
              </span>
            </h4>
            :
            <h4>
              {this.state.status}
            </h4>
        }
        {
          this.state.isGapiLoaded
            ? <button style={style.btn}
              onClick={() => onSignInRequest(this)}
            >
              {
                !this.state.isSignedIn
                  ? 'Connect YouTube'
                  : 'Sign Out'
              }
            </button>
            : <Spinner />
        }
      </div>
    )
  }

}

export default YouTubeConnect