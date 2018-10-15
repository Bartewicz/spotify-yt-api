import React from 'react'
import {auth as style} from '../ui/styles'

const Auth = ({ loginHandler }) => (
  <div
    style={style.wrapper}
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
      onClick={loginHandler}
      style={style.loginButton}
      value={'login-true'}
    >
      {'Login with Spotify'}
    </button>
  </div>
)

export default Auth