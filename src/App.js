import React, { Component } from 'react'
// Components
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
// UI
import './App.css'
// utils
import queryString from 'query-string'

class App extends Component {
  state = {
    user: '',
    access_token: ''
  }

  componentDidMount() {
    const params = queryString.parse(window.location.search)
    this.setState({ access_token: params.access_token },
      () => fetch(`https://api.spotify.com/v1/me`, {
        headers: {
          'Authorization': `Bearer ${this.state.access_token}`
        }
      }).then(
        response => response.json()
      ).then(
        user => {
          this.setState({ user })
        }
      ).catch(
        error => console.log(error)
      )
    )
  }

  loginHandler = () => window.location = 'http://localhost:8888/login'

  render() {
    return (
      <div className="App">
        <Header />
        <main className='App-main'>
          {
            this.state.access_token ?
              this.state.user ?
                <Dashboard
                  user={this.state.user}
                  accessToken={this.state.access_token}
                /> :
                'Loading...' :
              <Auth loginHandler={this.loginHandler} />
          }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
