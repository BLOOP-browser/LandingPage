import React from 'react';
import {Link} from 'react-router-dom';
import { SignUpForm } from './signup-form'; 
import './css/styles.css'
import bloopLogo from "./img/BLOOPLOGO.svg"
import { Slider } from './slider';
import Fade from 'react-reveal/Fade'
import twitterIcon from './img/twitter.svg'
import bloopExample from './img/BloopExample.svg'
import editImg from './img/EDIT.svg'
import exportImg from './img/EXPORT.svg'
import filecoin from './img/filecoin.svg'
import techstars from './img/techstars.svg'
import protocolLabs from './img/protocolLabs.svg'
import discordIcon from './img/discord.svg'
import PrivacyPolicyPage from './Pages/privacy';

function App() {
  return (
    
    <div className="App">
      {/* <Fade duration ={5000}> */}
        <header>
              <img className='logo' src={bloopLogo}  alt="BLOOP - Community curated search" />
        </header>
        <main>
          <div className="main-content">
        
              <div className="main-text">
                <h1>Discover the web with new eyes</h1>
                <p> Cross paths with friends and likeminded people online. </p>
              </div>
              <div className='socials'>
              <a className='twitter' target="blank" href="https://discord.gg/BH5EP55J6m">
                <div className="twitterhandle">
                  <img className='twitter-icon' src={discordIcon} alt="Discord invite link" />
                  <h3>Join the Discord</h3>
                </div>
              </a>

              
              <a className='twitter' target="blank" href="https://twitter.com/getbloop">
                <div className="twitterhandle">
                  <img className='twitter-icon' src={twitterIcon} alt="BLOOP's Twitter" />
                  <h3>Follow us on Twitter</h3>
                </div>
              </a>

              </div>
              
              {/* <SignUpForm/> */}
              
          </div>
        </main>
        {/* </Fade> */}

      {/* <Slider/> */}

      {/* <div className="connect-copy">
        <div className="connect-copy-content">
          <div>
            <p>Connect your interests.</p>
            <p>See your internet</p>
          </div>
        </div>
      </div>

      <div className="actions">
        <div className="actions-container">
          <div className="action-card" id='createCard'>
            <img id='createImg' src={bloopExample} alt="BLOOP MAP" />
            <div className="action-copy">
              <h3>Capture</h3>
              <p>Browse without worrying about losing resources</p>
            </div>
          </div>
          <div className="action-card">
            <img id='editImg' src={editImg} alt="BLOOP MAP" />
            <div className="action-copy">
              <h3>Edit</h3>
              <p>Curate and save your digital journey</p>
            </div>
          </div>
          <div className="action-card">
            <img src={exportImg} alt="BLOOP MAP" />
            <div className="action-copy">
              <h3>Invite</h3>
              <p>Share your story and invite others to create new ones</p>
            </div>
          </div>
        </div>
      </div> */}

      <div className='footer-cta'>
        <Fade duration ={2000}>
          <div className="footer-cta-content">
            <a href = "http://eepurl.com/iilQ79" id='sign-up-button' > Try the BLOOP beta</a>
            {/* <h3 >Get access to the BLOOP Search beta</h3> */}
            {/* <SignUpForm/> */}
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
          <p id='copyright'>Copyright BLOOP (Misplace Corp) 2022</p>
          <p id = 'copyright' > <a href="https://www.freeprivacypolicy.com/live/e969e420-1bf2-4f35-b872-15080ad2f556">Privacy Policy</a> </p>
          
        </div>
      </div>
    

      
    
    </div>

    
    
  );
}

export default App;
