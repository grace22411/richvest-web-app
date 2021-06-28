import styled from "styled-components";

export const Content= styled.div`
    padding: 4% 7% 4% 5%;
    margin-top:100px;
    @media only screen and (min-width: 320px) and (max-width: 720px) {
      padding:3% 2% 90px 2%;
      margin-top:75px;
  }

`
export const MobileNavIcon = styled.div`
    //display: none;
    margin-bottom: 15px;
    display: none;
    @media only screen and (min-width: 320px) and (max-width: 720px) {
    display: block;
  }
`
export const Page= styled.div`

`

export const DashboardBits = styled.div`
  border-radius: 10px;
  padding-left: 20px;
  margin-top: 20px;
  .row {
    .col-md-4 {
      text-align: center;
      .image {
        width: 200px;
        height: 250px;
        text-align: center;
        svg {
          margin: 0px 10px;
          size: 30px;
        }
      }
    }
    
  }
  .summary{
      //width:100%;
      overflow-y: hidden;
      overflow-x: scroll;
      height: auto;
      white-space: nowrap;
      .quick-col{
        width:230px;
        height:auto;
        display: inline-block;
      }
      ::-webkit-scrollbar {
      display: none;
    }
    }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    .row {
     .col-md-4{
      .image{
        margin:auto;
      }
     }
    }
  }
 
`;
export const DashboardBitsReferral = styled(DashboardBits)`
  border: 1px solid #407bff66;
  padding: 30px 20px;
`;
export const TabContainer = styled.div`
  margin-top: 30px;
  padding-right: 45px;
  .ant-tabs-nav-wrap {
    width: 270px;
    .ant-tabs-nav-list {
      width: 100%;
      border-bottom: none;
      margin-bottom: 0 !important;
      border-radius: 6px;
      background-color: #fff;
      justify-content: space-between;
      .ant-tabs-tab {
        color: #999999;
        font-weight: 500;
        font-size: 14px;
        border-bottom: none;
        width: auto;
      }
      .ant-tabs-tab:nth-child(4) {
        margin-right: 0;
      }
      .ant-tabs-ink-bar {
        background-color: #000;
        margin-bottom: -2px;
        display: none;
      }
      .ant-tabs-tab-active {
        border-bottom: 2px solid #32427c;
        .ant-tabs-tab-btn {
          color: #32427c;
          text-align: left;
        }
      }
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 540px) {
    padding-right: 15px;
  }
`;
export const ProductsContainer = styled.div`
  width: 95%;
  height: auto;
  border: 1px solid #5783e6;
  padding: 50px 50px;
  border-radius: 10px;
  justify-content: center;
  @media only screen and (min-width: 321px) and (max-width: 540px) {
    padding:20px;
  }
`;
export const ProductImage = styled.div`
  width: 90%;
  height: 250px;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  z-index: 1;
  position: relative;
  // visibility:hidden;

  /* div {
      float:right;
      background:rgba(0,0,0,0.5);
      position: absolute;
      width:40%;
      bottom:0;
      h3{
        color:#fff !important;
        text-align:center;
        font-weight:600;
        font-size:25px;
      }
    } */
    @media only screen and (min-width: 321px) and (max-width: 540px) {
    height:150px;
  }
`;
export const ProductDetails = styled.div`
  position: relative;
  margin: 0 auto 130px auto;
  .details {
    width: 88%;
    height: 250px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    top: 65px;
    border-radius: 30px;
    position: absolute;
    border: 1px solid rgba(87, 131, 230, 0.6);
    //background:red;
    //margin-top:150px;
    left: 55px;
    padding: 0 70px !important;
    .det {
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0 60px 8px 60px;
      position: absolute;
      display: flex;
      justify-content: space-between;
      div {
        p {
          margin: 0;
          font-weight: 500;
          font-size: 12px;
        }
        h3 {
          color: #fea803;
          font-weight: 500;
          font-size: 12px;
          text-shadow: none;
        }
        button {
          border: none;
          border-radius: 10px;
          background-color: #0303ad;
          color: #fff;
          cursor: pointer;
          padding: 3px 15px;
        }
      }
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 540px) {
    margin: 0 auto 100px auto;
    .details{
      height: 150px;
      left:40px;
      top:54px;
      .det{
        padding: 0 20px 8px 20px;
        div{
          p,h3{
            font-size:10px;
            margin-left: 0;
          }
          button{
            padding:3px 10px;
            font-size:13px;
          }
        }
      }
    }
  }
`;
export const ReferralContainer = styled.div`
  width: 80%;
  @media only screen and (min-width: 320px) and (max-width: 540px) {
    width: 100%;
  }
`;
export const ChartDiv = styled.div`
    border: 1px solid #407BFF66;
  padding: 20px;
  margin-top: 20px;;
  width:100%;
  border-radius: 10px;
    display: flex;
    justify-content: center;
    
    
`;


export const VerifyPage = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:100vh;
  width:100%;
  
  h3{
    font-size:15px;
    text-align:center;
  }
  button{
    margin-top: 30px;
    border: none;
    background-color: #191970;
    color: #fff;
    border-radius: 10px;
    padding: 5px 20px;
  }
  
`