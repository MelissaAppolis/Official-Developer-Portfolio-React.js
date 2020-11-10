import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <section className='footer-contact'>
        <p className='footer-contact-heading'>Lets Chat!</p>
        <p className='footer-contact-number'>+(27) 74 905 6579</p>
        <a className="footer-email" href="mailto:melissaappolis@gmail.com">melissaappolis@gmail.com</a>
      </section>
      <div className='social-icons'>
            <a
              className='social-icon-link github'
              href='https://github.com/MelissaAppolis'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/melissa-appolis-109b6b117/'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
      <section className='footer-author'>
        <div className='footer-author-wrap'>
          <small className='author'>MELISSA APPOLIS 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
