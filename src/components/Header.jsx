import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './header.css'

function Header(props) {
  const { logoSrc, title } = props;

  return (
    <header>

      <div className="logo-container">
        <img src={logoSrc} alt="Logo" />
        <h1>{title}</h1>
      </div>

      <div className="social-icons-container">

        <a href="https://www.facebook.com/anderson.javier.585/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>

        <a href="https://www.instagram.com/anderson_jav_29/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://www.linkedin.com/in/anderson-javier-balbuena-035b3a207/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="https://twitter.com/Anderso70410952" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>

      </div>

    </header>
  );
}

export default Header




