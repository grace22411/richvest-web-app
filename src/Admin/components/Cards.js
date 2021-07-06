import React from 'react';
import styled from "styled-components"
import wave from "../../UserDashboard/images/wavybackground.svg"


const Card = styled.div`
   height:100px;
   width:85%;
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
   position: relative;
   h3{
       font-size:14px;
       color:#fff !important;
       font-weight: 400;
       position: absolute;
       
   }
   img{
     object-fit: cover;
     width:100%;
     bottom:0;
     position:absolute
   }
   @media only screen and (min-width:320px) and (max-width:420px){
    
     h3{
      font-size:13px !important;
     }
     
   }
`

export const AdminDashboardCard = ({title, value, colorOne, colorTwo}) => {
  return (
    <>
    <Card className="cards" style={{background:`linear-gradient(${colorOne},${colorTwo})`}}>
      <h3>{title}</h3>
      <p>{value}</p>
      <img src={wave} alt="" />
    </Card>
    </>
  );
};
// export const InvestmentCard = ({title, value, color}) => {
//     return (
//       <>
//       <InvestCard className="card" style={{backgroundColor:color}}>
//         <h3>{title}</h3>
//         <p>{value}</p>
//       </InvestCard>
//       </>
//     );
//   };