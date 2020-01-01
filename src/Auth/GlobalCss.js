import styled from "styled-components";

export const HeadWrap = styled.div`
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
  height:150px;
 
`;
export const Head = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 77%, 81% 95%, 32% 89%, 0 84%);
  height: 150px;
  width: 100%;
  background-color: #fff;
  position:fixed !important;
  z-index:9999;
`;
export const Form = styled.form`
  padding: 0 15px;
  margin-top:40px;
  color: #32427c;
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
  .form-group {
   margin-bottom: 30px;
    input {
      background-color: #d8e1f8;
      border: none;
      outline: none !important;
      ::placeholder {
        font-size: 11px;
        color: #32427c;
      }
    }
    p{
      text-align:right;
      margin-top:15px;
      font-size:12px;
       a{
          color:#32427c;
          font-weight:400;
       }
    }
  }
  button{
     width:100%;
     background-color:#0303ad;
     color:#fff;
  }
`;
export const Container = styled.div`
  .row{
     .signup{
        padding:0;
     }
     .signup-form{
        padding-top:50px;
        padding-right:100px;
     }
  }
`;
export const WelcomeImage = styled.div`
    background-color:#0303ad;
    width:80%;
    margin-top:-50px;
    height:600px;
    z-index:-9999;
`;


//Email Verification Styles
export const VerificationCode = styled.div`
   width:50%;
   height:auto;
   padding: 80px 0 ;
   text-align:center;
   margin:auto;
   h3 {
    font-size: 18px;
    color: #32427c;
  }
  p {
    font-size: 12px;
    color: #32427c;
  }
  .form{
     display:flex;
     justify-content:center
  }
   input {
        margin: 20px 10px;
        text-align: center;
        font-size: 50px;
        border: 1px solid  #5783e6;
        background-color:#d8e1f8;
        outline: none;
        font-size:14px;
        width: 30px !important;
        height:30px;
        transition: all .2s ease-in-out;
        border-radius: 3px;
        
        &:focus {
          border-color: #000;
          
        }
        
        &::selection {
          background: transparent;
        }
      }
`