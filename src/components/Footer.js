import React from 'react'

const Footer = () => (
  <div className='App-footer text-center'>
    <div className='footer-wrapper'>
      <p className={'footer-title'}>
        All rights reserved &copy;
    </p>
      <div>
        {'Logo made by '}
        <a className={'link'}
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
          target="_blank"
          rel="noopener noreferrer">
          {'Pixel perfect'}
        </a>
        {' from '}
        <a className={'link'}
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer">
          {'flaticon'}
        </a>
        {' is licensed by '}
        <a className={'link'}
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer">
          {'CC 3.0 BY'}
        </a>
      </div>
      <div>
        {'Icons made by '}
        <a className={'link'}
          href="http://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer">
          {'Freepik'}
        </a>
        {' from '}
        <a className={'link'}
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer">
          {'www.flaticon.com'}
        </a>
        {'is licensed by '}
        <a className={'link'}
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
          rel="noopener noreferrer">
          {'CC 3.0 BY'}
        </a>
      </div>
    </div>
  </div>
)

export default Footer