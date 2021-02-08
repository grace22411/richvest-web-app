import React from 'react'
import styled from "styled-components";

 const Footer_Div = styled.div`
    width:100%;
    height:50px;
    background-color:#0c418a;
    padding-top:15px;
    margin-top:50px;
    p{
        color:#fff;
        font-size:13px;
        text-align:center;
    }
 `

function Footer() {
    return (
        <Footer_Div>
            <p>All rights reserved. 2020.</p>
            
        </Footer_Div>
    )
}

export default Footer
