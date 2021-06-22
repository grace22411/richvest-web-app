import styled from "styled-components";
import profile from "../images/profile.png";

export const Head = styled.div`
  height: 100px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  padding: 20px 100px;
  display: flex;
  box-shadow: 12px 12px 24px rgba(39, 78, 222, 0.2);;
  @media only screen and (min-width: 321px) and (max-width: 540px) {
    padding: 10px 30px;
    height: 70px;
    clip-path: none;

  }
`;

export const Logo = styled.div`
  img {
    height: 60px;
    width: 60px;
    @media only screen and (min-width: 320px) and (max-width: 720px) {
      height:40px;
      width:40px;
    }
  }
`;
export const Profile = styled.div`
  width:30%;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  //border:1px solid red;
  p{
    font-weight:500;
    margin-top: 20px;;
    margin-right:15px;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width:60%;
    p{
      margin-top: 12px;
      margin-right:10px;
    }
  }
`
export const PictureContainer = styled.div`
  width: 70px;
  height: 70px;
  //border:2px solid blue;
  border-radius: 100%;
  background: linear-gradient(
    241.94deg,
    #5ad5de 22.54%,
    #1510f4 42.16%,
    rgba(196, 196, 196, 0) 43.63%
  );
  
  z-index: 9999;
  padding: 5px;

  .white-background {
    background-color: #fff;
    width: 60px;
    box-shadow: 9.78282px 9.78282px 19.5656px rgba(39, 78, 222, 0.1);
    height: 60px;
    //margin-left:-7px;
    border-radius: 100%;
    padding: 10px;
  }
  .picture {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 100%;
    background-image: url(${profile});
    background-position: center;
    background-size: cover;
    .drop{
      background-color: #459fe4;
      width:20px;
      height:20px;
      border-radius: 10px;;
      padding:0px 4px;
      margin-right:-5px;
      float:right;
      bottom:0;
      margin-top:35px;
      //position:absolute;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    top: 0px;
    right: 30px;
    height:40px;
    width:40px;
    background:#fff;
    .white-background{
        height:40px;
        width:40px;
        background: linear-gradient(
    241.94deg,
    #5ad5de 22.54%,
    #1510f4 42.16%,
    rgba(196, 196, 196, 0) 43.63%
  );
        padding:5px;
    }
    .picture{
        width:30px;
        height:30px;
        .drop{
          margin-top: 30px;;
        }
    }
  }
`;
export const PictureContainerProfile = styled(PictureContainer)`
  right:0 ;
  top:0;
`;
//Sidebar styles
export const HeadIcons = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  svg {
    margin-right: 25px;
    background-color: #d8e1f8;
    color: rgba(4, 4, 132, 0.79);
    padding: 5px;
    border-radius: 100%;
    transition: 0.2s ease-in;
    :hover {
      background-color: rgba(4, 4, 132, 0.79);
      color: #fff;
    }
    :nth-child(2) {
      background-color: rgba(4, 4, 132, 0.79);
      color: #fff;
    }
  }
`;
export const SideMenu = styled.aside`
  height: calc(100vh - 100px);
  background-color: #191970;
  //position:fixed;
  width: 100%;
  margin-top:100px;
  padding:50px 0 0  50px;
  @media only screen and (min-width: 320px) and (max-width: 720px) {
    display: none;
  }
`;

export const MobileSideMenu= styled(SideMenu)`
    height: 100vh;
    width:180px;
    padding:0 20px;
    margin-top: 0;
    position: fixed;
    top:0;
    z-index:9999;
    display: none;
    bottom: 0;
    .cancel{
      height:70px;
      padding:20px 0px;
      text-align: right;
      i{
        color:#fff;
        font-size:17px;
      }
    }
    @media only screen and (min-width: 320px) and (max-width: 720px) {
    display: block;
  }
`;

export const MobileBottomMenu = styled.div`
    z-index:9999;
    position:fixed;
    bottom:0;
    width:100%;
    height:80px;
    background-color:#fff;
    border:1px solid #5783e651;
    justify-content:space-between;
    display:none;
    padding:15px 5px;;
    li{
        list-style:none;
        text-align:center;
        a {
    color: #32427c;
    font-size: 11px;
    :hover {
      font-weight: 600;
      text-decoration: none;
      :active {
        font-weight: 600;
      }
    }
  }
        img {
    width: 15px;
    height: 15px;
  }
    }
    @media only screen and (min-width: 320px) and (max-width: 540px) {
        display: flex;
  }
`;

export const Nav = styled.ul`
  //margin-top: 50px;
  padding-left: 0;
`;
export const NavItem = styled.li`
  margin-bottom: 40px;
  list-style: none;
  a {
    color: #fff;
    font-size: 13px;
    :hover {
      font-weight: 600;
      text-decoration: none;
      :active {
        font-weight: 600;
      }
    }
  }
  img {
    margin-right: 15px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius:100%;;
  }
`;

export const EachProductDetails = styled.div`
margin-bottom: 80px;
  .row {
    .col-md-6 {
      .image {
        border: 1px solid #5783e6;
        height: auto;
        padding: 40px 20px;
        width: 88%;
        border-radius: 8px;
        text-align: center;
        button{
          border:none;
          outline: none;
          background-color: #0303AD;
          color:#fff;
          padding:3px 14px;
          border-radius:10px;

        }
        .product-image {
          background-position: center;
          width: 85%;
          height: 200px;
          margin: auto;
          border-radius: 30px;
          background-size: cover;
        }
        h3 {
          text-align: center;
          margin-top: 20px;
        }
        .info {
          border-top: 3px solid #0303ad;
          display: flex;
          margin-top: 20px;
          text-align:left;
          width: 100%;
          flex-wrap: wrap;
          padding: 20px 0;
          justify-content: space-between;
          .each-info {
            //border: 1px solid #5783e6;
            width: 47%;
            padding: 10px;
            //margin-bottom: 20px;
            border-radius: 8px;
            h3 {
              font-size: 12px;
              margin-top: 0;
              text-align: left;
            }
          }
        }
      }
      .text {
        text-align: justify;
        padding-top: 50px;
      }
    }
  }
`;

//Referral Styles
export const ReferTabOne = styled.div`
  padding: 40px 50px;
  border-radius: 10px;
  border: 1px solid #5783e651;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;
export const ReferTabTwo = styled(ReferTabOne)`
  width: 100%;
  height: auto;
  text-align: center;

  @media only screen and (min-width: 320px) and (max-width: 420px) {
    padding: 40px 30px;
    img {
      width: 90%;
    }
    h3 {
      font-size: 14px;
    }
  }
`;

export const ReferralPopUp = styled.div`
  .ant-modal {
    .ant-modal-header {
      background-color: #0303ad !important;
    }
  }
`;

//Profile Styles
export const ProfileTabOne = styled.div`
  width: 100%;
  padding: 40px 50px;
  border-radius: 10px;
  border: 1px solid #5783e651;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  @media only screen and (min-width: 320px) and (max-width: 420px) {
    padding: 30px 10px !important;
  }
`;
export const ProfileTabTwo = styled(ProfileTabOne)``;
export const ProfileTabThree = styled(ProfileTabOne)``;
export const Form = styled.form`
  padding: 0 15px;
  margin-top: 20px;
  color: #32427c;
  h3 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
  .form-group {
    margin-bottom: 40px;
    input {
      background-color: #d8e1f8;
      border: none;
      border-radius: 10px;
      outline: none !important;
      ::placeholder {
        font-size: 11px;
        color: #888;
        font-weight: 400;
      }
    }
    p {
      text-align: right;
      margin-top: 15px;
      font-size: 12px;
      a {
        color: #32427c;
        font-weight: 400;
      }
    }
  }
  button {
    width: 25%;
    background-color: #0303ad;
    color: #fff;
    font-size: 14px;
    border-radius: 10px;
  }
  @media only screen and (min-width: 320px) and (max-width: 420px) {
    button {
      width: 35%;
    }
  }
`;
