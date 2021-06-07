import React from 'react'
import'./TopNavbar.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faTwitter}from '@fortawesome/free-brands-svg-icons';
import {faGithub}from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faUserTie} from '@fortawesome/free-solid-svg-icons'



function TopNavbar() {
    return (
     
        <nav className="navbar top-nav py-0 navbar-expand-lg navbar-light d-none d-sm-block">
        <div className="container">
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 ">
              
              <li className="nav-item">
                <Link className="nav-link" to="about">
                <FontAwesomeIcon icon={faEnvelope}/> clanofdevs@gmail.com
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="service">
                <FontAwesomeIcon icon={faPhoneAlt}/>
                  Call us: +923457005818
                </Link>
              </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" to="portfolio">
                  <FontAwesomeIcon className="social-btn" icon={faLinkedinIn}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                <FontAwesomeIcon className="social-btn" icon={faTwitter}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                <FontAwesomeIcon className="social-btn" icon={faGithub}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                <FontAwesomeIcon className="social-btn" icon={faInstagram}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                <FontAwesomeIcon className="social-btn" icon={faFacebookF}/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">
                <button type="button" class="btn hire-button"> Hire Us &nbsp;<FontAwesomeIcon style={{fontSize:'1rem'}} icon={faUserTie}/></button>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default TopNavbar
