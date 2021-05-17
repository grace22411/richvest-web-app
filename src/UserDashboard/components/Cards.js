import React from 'react';
import styled from "styled-components"
import wave from "../images/wave.png"


const Card = styled.div`
   height:100px;
   width:90%;
   text-align:center;
   border-radius:10px;
   margin-bottom:50px;
   background-image:url(${wave});
   background-size:cover;
   background-position:bottom;
   padding:25px;
   color:#fff;
   h3{
       font-size:16px;
       color:#fff !important;
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
export const DashboardCard = ({title, value, color}) => {
  return (
    <>
    <Card className="cards" style={{backgroundColor:color}}>
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