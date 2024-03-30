import React from "react";
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_iamge from '../Assets/mai.png'

const Hero = () =>{
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVAL ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>NEW</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>COLLECTIONS</p>
                    <p>FOR EVERYONE</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>

            <div className="hero-right">
                <img src= {hero_iamge} alt="" />
            </div>
        </div>
    )
}

export default Hero;