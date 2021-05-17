import React from 'react'
import { Link } from 'react-router-dom'
import refer from "../../images/referandearn.svg"
import {ReferTabOne, ReferTabTwo} from "../../styles/ComponentStyles"
import ReferContent from './ReferContent'

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
            <ReferContent />

        </ReferTabTwo>
    )
}