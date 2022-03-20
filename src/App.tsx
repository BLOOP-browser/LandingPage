import React from 'react';
import { DownloadButton } from './download-button'
function App() {
  return (
    <div className="App">
        <main>
        <div className="main-content">
            <img src="./img/BLOOP.png" alt=""/>
      
            <div className="main-text">
              <h1>A BROWSER FOR THE CURIOUS</h1>
              <p>Create your map of the internet</p>
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
          <h2>Connect your interest and see your internet</h2>
          <img src="./img/CONNECT.svg" alt=""/>
        </div>
      </section>
      
    </div>
  );
}

export default App;