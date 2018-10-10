import React, { Component } from 'react'
// Components
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Header from './components/Header'
// UI
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    )
  }
}

export default App
