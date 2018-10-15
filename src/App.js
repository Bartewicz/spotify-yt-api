import React, { Component } from 'react'
// Components
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
// UI
import './App.css'

const style = {
  authWrapper: {
    padding: '50px',
    height: '100%',
    textAlign: 'center'
  },
  loginButton: {
    cursor: 'pointer',
    height: '50px',
    padding: '0 15px',
    borderRadius: '50px',
    border: '0',
    backgroundColor: '#1db954',
    color: '#fff',
    fontWeight: 'bold'
  }
}

class App extends Component {
  state = {
    user: ''
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className='App-main'>
          {
            this.state.user ?
              <Dashboard user={this.state.user}/> :
              <div
                style={style.authWrapper}
              >
                <h1>
                  {'Welcome!'}
                </h1>
                <h2>
                  {'Just log in with your Spotify account to start using the app.'}
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
          }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
