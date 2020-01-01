import React from 'react';
import styled from "styled-components"

const Contain = styled.div`
    color:#32427c;
    h3{
        font-size:17px;
        font-weight:600;
    }
    p{
        font-size:13px;
    }
`

const Title = ({name}) => {
  return (
    <Contain>
        <h3>Hello {name} </h3>
        <p>Welcome,</p>
   
    </Contain>
  );
};

export default Title;