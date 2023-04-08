import React from 'react';
import './footer.css'

import { DiGithubAlt } from "react-icons/di";
import { BsDownload } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">

        <div className="gitHub">
            <a href="https://github.com/javierpro29" target="_blank" rel="noopener noreferrer">
            <DiGithubAlt className='gitHub-Logo' /> My GitHub Repository
            </a>
        </div>

        <div className="download">

            <button>
                <a href="https://github.com/javierpro29/PokeDex-React" target="_blank" rel="noopener noreferrer">
                    <BsDownload className='download-Logo' />  Download de code
                </a>
            </button>

        </div>


      <div className="right">
        <p> Without &copy;Copyright 2023 Anderson Javier Balbuena. Any rights reserved.</p>
      </div>


    </footer>
  );
}

export default Footer;
