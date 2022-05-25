import React from 'react'
import './css/slider.css'
import UI1 from './img/NEWUIVISION.png'
import UI2 from './img/NEWUIVISION2.png'
import UI3 from './img/NEWUIVISION3.png'

export class Slider extends React.Component {
  render(){
      return(
        <div className="marquee">
          <div className="marquee--inner">
            <span>
              <div className="">
                <img src={UI1} alt="" />
              </div>
              <div className="">
                <img src={UI2} alt="" />        
              </div>
              <div className="">
                <img src={UI3} alt="" />
              </div>
            </span>
            <span>
            <div className="">
                <img src={UI1} alt="" />
              </div>
              <div className="">
                <img src={UI2} alt="" />        
              </div>
              <div className="">
                <img src={UI3} alt="" />
              </div>
            </span>
          </div>
        </div>
      )
  }
}