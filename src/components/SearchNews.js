import React from 'react'
import styled from "styled-components"

const InputField = styled.input`
    width:30%;
    border:none;
    height:40px;
    border-radius:20px;
    padding-left:20px;
    margin-top:15px;
    outline:none;
    background-color:#f0f0f0;
    @media only screen and (max-width:320px){
        width:80%;
        height:35px;
    }
    @media only screen and (min-width:321px) and (max-width:540px){
        width:70%;
        height:35px;
    }
`

function SearchNews() {
    return (
        <div>
            <InputField type="text" placeholder="Search for news" />
        </div>
    )
}

export default SearchNews
