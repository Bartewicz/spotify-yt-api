import React, { Component } from 'react'
// Components
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
// UI
import './App.css'

class App extends Component {
  state = {
    user: ''
  }

  loginHandler = () => {
    if (window.confirm('Do you want to login?'))
      this.setState({ user: 'Darling' })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className='App-main'>
          {
            this.state.user ?
              <Dashboard user={this.state.user} /> :
              <Auth loginHandler={this.loginHandler} />
          }
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
