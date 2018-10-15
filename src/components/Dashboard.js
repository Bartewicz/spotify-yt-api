import React from 'react'

class Dashboard extends React.Component {
  render() {
    return (
        <h1 className='text-center'>
          {`Welcome, ${this.props.user}!`}
        </h1>
    )
  }
}

export default Dashboard