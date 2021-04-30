import React from 'react';
import styled from "styled-components"
import wave from "../images/wave.svg"

const Contain = styled.div`
    color:#32427c;
    margin-bottom:30px;
    h3{
        font-size:17px;
        font-weight:600;
        img{
          width:18px;
          height:auto;
          margin-left:5px;
        }
    }
    p{
        font-size:13px;
    }
`

const Title = ({name}) => {
  return (
    <Contain>
        <h3>Hello {name}<img src={wave} alt="hand wave" /> </h3>
        <p>Welcome,</p>
   
    </Contain>
  );
};

export default Title;