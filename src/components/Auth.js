import React from 'react'
// ui
import {auth as style} from '../ui/styles'

const Auth = () => (
  <div
    style={style.authWrapper}
  >
    <h1
      style={style.header}
    >
      {'Welcome!'}
    </h1>
    <h2>
      {'Just log in with your Spotify account to start using the app'}
    </h2>
    <button
      onClick={() => {
        if (window.confirm('Do you want to login?'))
          this.setState({ user: 'Darling' })
      }}
      style={style.loginButton}
      value={'login-true'}
    >
      {'Login with Spotify'}
    </button>
  </div>
)

export default Auth