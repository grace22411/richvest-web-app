import React from 'react';
import styled from "styled-components"
import wave from "../images/wavybackground.svg"


const Card = styled.div`
   height:100px;
   width:87%;
   text-align:center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border-radius:10px;
   cursor: pointer;
   margin-bottom:50px;
   background-size:cover;
   background-position:bottom;
   color:#fff;
   h3{
       font-size:14px;
       color:#fff !important;
       font-weight: 400;
       margin-top:10px;
   }
   @media only screen and (min-width:320px) and (max-width:420px){
     width:100%;
     h3{
      font-size:13px !important;
     }
     
   }
`

const InvestCard = styled.div`
    height:100px;
    width:85%;
    text-align:center;
    color:#fff;
    padding:25px;
    border:none;
    border-radius:5px;
    h3{
       font-size:16px;
       color:#fff !important;
   }
   @media only screen and (min-width:320px) and (max-width:420px){
     margin-bottom:20px;
     width:100%;
   }
`
export const DashboardCard = ({title, value, colorOne, colorTwo}) => {
  return (
    <>
    <Card className="cards" style={{background:`linear-gradient(${colorOne},${colorTwo}),url(${wave})`}}>
      <h3>{title}</h3>
      {/* <p>{value}</p> */}
    </Card>
    </>
  );
};

export const InvestmentCard = ({title, value, color}) => {
    return (
      <>
      <InvestCard className="card" style={{backgroundColor:color}}>
        <h3>{title}</h3>
        <p>{value}</p>
      </InvestCard>
      </>
    );
  };