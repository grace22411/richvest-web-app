import styled from "styled-components"
import profile from "../images/profile.png"

export const HeadWrap = styled.div`
  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.1));
 
 
`;
export const Head = styled.div`
  clip-path: polygon(0 0, 100% 0, 100% 76%, 82% 100%, 33% 91%, 0 84%);
  height: 150px;
  width: 100%;
  background-color: #fff;
  position:fixed !important;
  z-index:9999;
  top:0;
  left:0;
  padding:40px 100px;
  display:flex;
  @media only screen and (min-width:320px) and (max-width:420px){
      padding:20px 30px;
      height:120px;
  }
`;

export const UnderneathImage = styled.div`
 width:100%;
 height:180px;
 //border:1px solid blue;
    img{
        width:40%;
        float:right;
    }
`

export const Logo = styled.div`
    img{
        height:60px;
        width:60px;
    }
`
export const PictureContainer = styled.div`
    width:100px;
    height:100px;
    //border:2px solid blue;
    border-radius:100%;
    background: linear-gradient(241.94deg, #5AD5DE 22.54%, #1510F4 42.16%, rgba(196, 196, 196, 0) 43.63%);
    margin-left:auto;
    position:absolute;
    top:90px;
    right:200px;
    z-index:9999;
    padding:5px;
    
   .white-background{
    background-color:#fff;
    width:90px;
    box-shadow: 9.78282px 9.78282px 19.5656px rgba(39, 78, 222, 0.1);
    height:90px;
    //margin-left:-7px;
    border-radius:100%;
    padding:10px;
   }
    .picture{
        width:70px;
        height:70px;
        background-color:#fff;
        border-radius:100%;
        background-image:url(${profile});
        background-position:center;
        background-size:cover;
    }
    @media only screen and (min-width:320px) and (max-width:420px){
        top:30px;
        right:30px;
    }

`


//Sidebar styles
export const HeadIcons = styled.div`
    width:85%;
    display:flex;
    justify-content:space-between;
    svg{
        margin-right:25px;
        background-color:#d8e1f8;
        color:rgba(4, 4, 132, 0.79);
        padding:5px;
        border-radius:100%;
        transition:0.2s ease-in;
        :hover{
            background-color:rgba(4, 4, 132, 0.79);
            color:#fff;
        }
        :nth-child(2){
            background-color:rgba(4, 4, 132, 0.79);
            color:#fff;
        }
    }
`
export const SideMenu = styled.aside`
    border-right:2px solid #d4d7e4;
    height:calc(100vh - 120px);
    //position:fixed;
    width:75%;
    padding-right:30px;
    @media only screen and (min-width:320px) and (max-width:720px){
        display:none;
    }

`
export const Nav= styled.ul`
    margin-top:50px;
    padding-left:0;
    

`
export const NavItem = styled.li`
    margin-bottom:30px;
    list-style:none;
    a{
        color:#32427c;
        font-size:13px;
        :hover{
        font-weight:600;
        text-decoration:none;
        :active{
            font-weight:600;
        }
    }
    }
    img{
        margin-right:15px;
        width:20px;
        height:20px;
    }
    
`

export const EachProductDetails = styled.div`
    .row{
        .col-md-6{
            .image{
                border:1px solid #5783E6;
                height:auto;
                padding:40px 20px; 
                width:88%;
                border-radius:8px;
                .product-image{
                    background-position:center;
                    width:85%;
                    height:200px;
                    margin:auto;
                    border-radius:30px;
                    background-size:cover;
                }
                h3{
                    text-align:center;
                    margin-top:20px;
                }
                .info{
                    border-top:3px solid #0303AD;
                    display:flex;
                    margin-top:20px;
                    width:100%;
                    flex-wrap:wrap;
                    padding:20px 0;
                    justify-content:space-between;
                    .each-info{
                        border:1px solid #5783E6;
                        width:47%;
                        padding:10px;
                        margin-bottom:20px;
                        border-radius:8px;
                        h3{
                            font-size:12px;
                            margin-top:0;
                            text-align:left;
                        }

                    }
                }

            }
            .text{
                text-align:justify;
                padding-top:50px;
            }
            
        }
    }

`


//Referral Styles
export const ReferTabOne = styled.div`
    padding:40px 50px;
    border-radius:10px;
    border:1px solid #5783e651;
    box-shadow:0 5px 10px rgba(0, 0, 0, 0.1);

`
export const ReferTabTwo = styled(ReferTabOne)`
    width:100%;
    height:auto;
    text-align:center;
    h3{
        margin-top:20px;
    }
    p{
        font-size:11px;
    }
    svg{
        margin:0 10px;
    }
    @media only screen and (min-width:320px) and (max-width:420px){
        padding:40px 30px;
        img{
            width:90%;
        }
        h3{
            font-size:14px;
        }
    }

`

//Profile Styles
export const ProfileTabOne = styled.div`

`
export const ProfileTabTwo = styled.div`

`
export const ProfileTabThree = styled.div`

`
export const Form = styled.form`
  padding: 0 15px;
  margin-top:20px;
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
      border-radius:10px;
      outline: none !important;
      ::placeholder {
        font-size: 11px;
        color: #888;
        font-weight:400;
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
     width:25%;
     background-color:#0303ad;
     color:#fff;
     font-size:14px;
     border-radius:10px;
  }
`;