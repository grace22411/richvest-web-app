import React from 'react';
import styled from "styled-components"
import wave from "../images/wave.svg"

const Contain = styled.div`
    color:#32427c;
    margin-bottom:30px;
    h3{
        font-size:17px;
        font-weight:600;
        span{
          text-transform: capitalize !important;
        }
        img{
          width:18px;
          height:auto;
          margin-left:5px;
        }
    }
    p{
        font-size:13px;
    }
    @media only screen and (min-width:320px) and (max-width:600px){
      padding-left:2px;
    }
`

const Title = ({name}) => {
  return (
    <Contain>
        <h3>Hello <span>{name}</span>  <img src={wave} alt="hand wave" /> </h3>
        <p>Welcome</p>
   
    </Contain>
  );
};

export default Title;