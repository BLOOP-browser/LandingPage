import React from 'react';
import './css/styles.css'
import bloop from "./img/BLOOPCENTER.svg"
import simpleMap from './img/SIMPLEMAP1.svg'
import detailedMap from './img/DETAILEDMAP.svg'
import Fade from 'react-reveal/Fade'

function App() {
  return (
    
    <div className="App">
      <section className = "main">
      <Fade duration ={5000}>
        <main>
        <div className="main-content">
            <img src={bloop}  alt="" />
      
            <div className="main-text">
              <h1 className='text-one'><b>A browser for the curious. <br /> <span className='pale-white'>Create your map of the internet</span></b></h1>
            </div>
      
            <div className="cta">
              <form>
                <input type="text" placeholder="What's your email?"/>
                <button type='button'>DOWNLOAD</button>
              </form>
            </div>
        </div>
        </main>
        </Fade>
      </section>

    <div className='body-content'>
    
      <section className="connect">
      <Fade duration ={5000}>
        <div className="connect-content">
          <h2 className='text-one'>Connect <span className='pale-white' >your <br /> interests</span></h2>
          <img className='simpleMap' src={simpleMap} alt=""/>
        </div>
        </Fade>
      </section>
      

      
      <section className="learn">
      <Fade duration ={5000}>
        <div className="learn-content">
          <h2 className='text-one'> <span className='pale-white'>Learn from your <br /></span>journey  <span className='pale-white'> and see <br /> your internet</span></h2>
          <img className='detailedMap' src={detailedMap} alt=""/>
        </div>
        </Fade>
      </section>
      
    </div>

      <div className='footer-cta'>
      <Fade duration ={2000}>
        <div className="cta">
            <form>
              <input type="text" placeholder="What's your email?"/>
              <button>DOWNLOAD</button>
            </form>
            <p className= 'main-text'>Available for all desktop platforms</p>
            <p></p>
        </div>
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
