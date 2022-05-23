import React from 'react';

import { SignUpForm } from './signup-form'; 
import './css/styles.css'
import bloopLogo from "./img/BLOOPLOGO.svg"
import simpleMap from './img/SIMPLEMAP1.svg'
import detailedMap from './img/DETAILEDMAP.svg'
import Fade from 'react-reveal/Fade'
import twitterIcon from './img/twitter.svg'


function App() {
  return (
    
    <div className="App">
      {/* <Fade duration ={5000}> */}
        <header>
              <img className='logo' src={bloopLogo}  alt="Bloop Browser" />
        </header>
        <main>
          <div className="main-content">
        
              <div className="main-text">
                <h1>A browser for the curious</h1>
                <p>Create your map of the internet.</p>
              </div>
              <SignUpForm/>
              <a className='twitter' target="blank" href="https://twitter.com/getbloop">
                <div className="twitterhandle">
                  <img className='twitter-icon' src={twitterIcon} alt="Bloop's Twitter" />
                  <h3>Follow us on Twitter</h3>
                </div>
              </a>
          </div>
        </main>
        {/* </Fade> */}

    <div className='body-content'>
    
    </div>

      <div className='footer-cta'>
      <Fade duration ={2000}>
        <SignUpForm/>
      </Fade>
      </div>
      <div className='copyright-cta'>
        <div className= 'copyright-text'>
          <p > Copyright ©2022 Bloop Browser. </p>
          <p >All rights reserved.</p>
          <p></p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
