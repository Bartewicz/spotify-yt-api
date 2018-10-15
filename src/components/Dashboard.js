import React from 'react'

class Dashboard extends React.Component {
  render() {
    return (
      <h1 className='text-center'>
        {
          this.props.user ?
            `welcome, ${this.props.user.display_name}`
            :
            'loading...'
        }
      </h1>
    )
  }
}

export default Dashboard