import React from 'react';
import styled from "styled-components"


const Card = styled.div`
   height:150px;
   width:90%;
   border-radius:5px;
   margin-bottom:30px;
   padding:25px;
   color:#fff;
   h3{
       font-size:16px;
       color:#fff !important;
       
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
`
export const DashboardCard = ({title, value, color}) => {
  return (
    <>
    <Card className="cards" style={{backgroundColor:color}}>
      <h3>{title}</h3>
      <p>{value}</p>
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