import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PrivacyPolicyPage from './Pages/privacy';
/* 
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; */



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);


/* const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
<React.StrictMode>
<App />
<BrowserRouter>
  <Routes>
      <Route path="/privacy" element ={<PrivacyPolicyPage />} />
      <Route path="/" element = {<App/>} />
  </Routes>
  </BrowserRouter> 
  </React.StrictMode>

); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
