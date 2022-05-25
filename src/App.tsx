import React from 'react';

import { SignUpForm } from './signup-form'; 
import './css/styles.css'
import bloopLogo from "./img/BLOOPLOGO.svg"
import { Slider } from './slider';
import Fade from 'react-reveal/Fade'
import twitterIcon from './img/twitter.svg'
import bloopExample from './img/CURRENT LOC.svg'
import editImg from './img/EDIT.svg'
import exportImg from './img/EXPORT.svg'
import filecoin from './img/filecoin.svg'
import techstars from './img/techstars.svg'
import protocolLabs from './img/protocolLabs.svg'

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

      <Slider/>

      <div className="connect-copy">
        <div className="connect-copy-content">
          <div>
            <p>Connect your interests.</p>
            <p>See your internet</p>
          </div>
        </div>
      </div>

      <div className="actions">
        <div className="actions-container">
          <div className="action-card">
            <img id='createImg' src={bloopExample} alt="BLOOP MAP" />
            <div className="action-copy">
              <h3>Create</h3>
              <p>Browse without worrying about saving resources. </p>
            </div>
          </div>
          <div className="action-card">
            <img id='editImg' src={editImg} alt="BLOOP MAP" />
            <div className="action-copy">
              <h3>Edit</h3>
              <p>Save and reload your browsing sessions locally. </p>
            </div>
          </div>
          <div className="action-card">
            <img src={exportImg} alt="BLOOP MAP" />
            <div className="action-copy">
              <h3>Share</h3>
              <p>Share your sites and notes in BLOOP, or export elsewhere</p>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-cta'>
        <Fade duration ={2000}>
          <div className="footer-cta-content">
            <h3>Get access to the BLOOP private beta</h3>
            <SignUpForm/>
          </div>
        </Fade>
      </div>
      <div className="powered">
        <div className="powered-container">
          <p>Powered by</p>
          <div className="brands">
            <img src={techstars} alt="Techstars bloop" />
            <img src={filecoin} alt="Filecoin bloop" />
            <img src={protocolLabs} alt="ProtocolLabs bloop" />
          </div>
        </div>
      </div>
      <div className='copyright-cta'>
        <div className= 'copyright-text'>
          <p id='links'>Email <a href="mailto:hi@getbloop.co">hi@getbloop.co</a> or DM <a href="https://twitter.com/getbloop" target="_blank" rel='noreferrer'>@getBLOOP</a> on Twitter to try the private beta</p>
          <p id='copyright'>Copyright BLOOP 2022</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
