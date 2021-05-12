import React from 'react'
import { Link } from 'react-router-dom'
import refer from "../../images/referandearn.svg"
import { FaFacebook,FaWhatsapp,FaTwitter } from "react-icons/fa"
import {ReferTabOne, ReferTabTwo} from "../../styles/ComponentStyles"

export const ReferralDetails = () => {
    return (
        <ReferTabOne>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  deserunt mollit anim id est laborum."</p>
                <Link to="/mini-investment"> <button>Explore</button></Link>
        </ReferTabOne>
    )
}

export const ReferAndEarn = () => {
    
    return (
        <ReferTabTwo>
            <img src={refer} alt="referral Illustration" />
            <h3>Earn as much as <span>2.5%</span> on investment per refereral</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
            <h3>Share</h3>
            <FaFacebook style={{color:"#2a5297"}} />
             <FaTwitter style={{backgroundColor:"#1ca1f3", color:"#fff",borderRadius:"100%",padding:"3px"}}/> 
             <FaWhatsapp style={{backgroundColor:"#4aa64a",color:"#fff",borderRadius:"100%",padding:"3px"}}/>

        </ReferTabTwo>
    )
}