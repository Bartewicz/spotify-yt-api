import React from 'react'

const Footer = () => (
  <div className='App-footer text-center'>
    <div>
      {'All rights reserved &copy;'}
    </div>
    <div>
      {'Logo made by '}
      <a className='link'
        href="https://www.flaticon.com/authors/pixel-perfect"
        title="Pixel perfect">
        {'Pixel perfect'}
      </a>
      {' from '}
      <a className='link'
        href="https://www.flaticon.com/"
        title="Flaticon">
        {'www.flaticon.com'}
      </a>
      {' is licensed by '}
      <a className='link'
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        rel="noopener noreferrer">
        {'CC 3.0 BY'}
      </a>
    </div>
  </div>
)

export default Footer