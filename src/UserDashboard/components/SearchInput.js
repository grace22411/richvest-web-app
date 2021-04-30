import React from 'react'
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Input = styled.div`
    width:100%;
    height:35px;
    border-radius:20px;
    background-color:#F0F6FF;
    margin-bottom:40px; 
    padding:0 0 0 15px;
    svg{
        margin-top:5px;
        color:#666;
        height:0.8em;
        width:0.8em
    }

    input{
        width:95%;
        border:none;
        outline:none;
        padding:4px 10px;
        background-color:transparent;
        ::placeholder{
            font-size:12px;
        }
    }
`


function SearchInput() {
    return (
        <Input>
           <FaSearch /><input type="text"  placeholder="search investments"/>
        </Input>
    )
}

export default SearchInput;
