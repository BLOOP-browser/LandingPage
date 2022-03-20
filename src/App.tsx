import React from 'react';
import { SignUpForm } from './signup-form'; 
import './css/styles.css'
import bloop from "./img/BLOOPCENTER.svg"
import simpleMap from './img/SIMPLEMAP1.svg'
import detailedMap from './img/DETAILEDMAP.svg'

function App() {
  return (
    <div className="App">
        <main>
        <div className="main-content">
            <img src={bloop} alt=""/>
      
            <div className="main-text">
              <h1 className='text-one'><b>A browser for the curious. <br /> <span className='pale-white'>Create your map of the internet</span></b></h1>
            </div>
      
            <div className="cta">
              <form>
                <input type="text" placeholder="What's your email?"/>
                <button>DOWNLOAD</button>
              </form>
            </div>
        </div>
      </main>

      <section className="connect">
        <div className="connect-content">
          <h2 className='text-one'>Connect <span className='pale-white'>your <br /> interests</span></h2>
          <img className='simpleMap' src={simpleMap} alt=""/>
        </div>
      </section>

      <section className="learn">
        <div className="learn-content">
          <h2 className='text-one'> <span className='pale-white'>Learn from your <br /></span>journey  <span className='pale-white'> and see <br /> your internet</span></h2>
          <img className='detailedMap' src={detailedMap} alt=""/>
        </div>
      </section>
      
      <div className='footer-cta'>
        <div className="cta">
            <form>
              <input type="text" placeholder="What's your email?"/>
              <button>DOWNLOAD</button>
            </form>
            <p>Available for all desktop platforms</p>
        </div>
      </div>
    </div>
  );
}

export default App;
