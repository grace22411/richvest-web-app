import styled from "styled-components";

export const HeadWrap = styled.div`
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
  height:120px;
  @media only screen and (min-width:321px) and (max-width:600px){
      display: none;
  }
`;
export const Head = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 77%, 81% 95%, 32% 89%, 0 84%);
  height: 120px;
  width: 100%;
  background-color: #fff;
  z-index:9999;
  filter:grayscale(0.1);
  padding:20px 100px;
  @media only screen and (min-width:321px) and (max-width:600px){
      padding:20px 30px;
      height:120px;
      display: none;
  }

`;

export const Logo = styled.div`
    img{
        height:60px;
        width:60px;
    }
`
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
   margin-bottom: 20px;
    input {
      background-color: #d8e1f8;
      border: none;
      border-radius:10px;
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
     border-radius:10px;
  }
`;
export const Container = styled.div`
  .row{
    .col-md-7{
      img{
        width:85%;
        margin-top:40px;
      }
    }
    .col-md-5{
      padding-top:50px;
    }
     .signup{
        padding:0;
     }
     .signup-form{
       padding-top:20px;
        padding-right:100px;
        h3{
          font-size:15px;
          margin-bottom:10px;
        }@media only screen and (min-width:320px) and (max-width:420px){
      padding-right:20px;
      padding-top:0;
  }

     }
  }
`;
export const WelcomeImage = styled.div`
    //background-color:#0303ad;
    clip-path: polygon(0 2%, 100% 5.5%, 100% 100%, 0% 100%);
    height:auto;
    z-index:-9999;
    padding: 80px 100px;
    h2{
      color:#32427c;
      font-size:25px;
      span{
        color:#F3AB04;
      }
    }
    img{
      object-fit:contain;
      width:100%;
      height:100%;
    }
    @media only screen and (min-width:320px) and (max-width:600px){
      padding:50px 30px;
      margin-bottom:20px;
      h2{
        font-size:20px;
      }
      img{
        margin-top:0 !important;
      }
  }
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


export const ForgotPasswordContainer = styled.div`
  

`