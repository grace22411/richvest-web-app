import React from 'react'
import styled from "styled-components"
import empty from "../images/empty.png"

const InvestContain = styled.div`
    width:100%;
    height:auto;
    text-align:center;
    padding:40px 50px;
    border-radius:10px;
    border:1px solid #5783e651;
    box-shadow:0 5px 10px rgba(0, 0, 0, 0.1);
    img{
        width:30%;
        margin-bottom:20px;
    }
    button{
        background-color:#1F2CAC;
        color:#fff;
        border:none;
        padding:5px 10px;
        border-radius:5px;
        margin-top:40px;
    }
`

export const InvestTabOne = () => {
    return (
        <InvestContain>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  deserunt mollit anim id est laborum."</p>
                <button>Explore</button>
        </InvestContain>
    )
}

export const InvestTabTwo = () => {
    return (
        <InvestContain>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  deserunt mollit anim id est laborum."</p>
                <button>Explore</button>
        </InvestContain>
    )
}

export const InvestTabThree = () => {
    return (
        <InvestContain>
            <img src={empty} alt="" />
            <p>You have no active investment</p>
                
        </InvestContain>
    )
}

