import React from 'react'
import './css/slider.css'
import UI1 from './img/NEWUIVISION-web3.png'
import UI2 from './img/NEWUIVISION-games.png'
import UI3 from './img/NEWUIVISION-movie direction.png'

export class Slider extends React.Component {
  render(){
      return(
        <section className="bg-cream wrap-browser-iframes">
          <div className="section-browser-iframes">
            <img
              className="image-border"
              src={UI1}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI3}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI2}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
            className="image-border"
            src={UI1}
            width="500.265"
            height="338.345"
            alt=""
            />
            <img
              className="image-border"
              src={UI3}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI2}
              width="500.265"
              height="338.345"
              alt=""
            />
            {/* <img
              className="image-border"
              src={UI1}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI3}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI2}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI3}
              width="500.265"
              height="338.345"
              alt=""
            />
            <img
              className="image-border"
              src={UI1}
              width="500.265"
              height="338.345"
              alt=""
            /> */}
        </div>
        </section>
      )
  }
}