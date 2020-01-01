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
  padding:40px 100px;
  display:flex;
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
    width:90px;
    height:90px;
    border:2px solid blue;
    border-radius:100%;
    margin-left:auto;
    padding:8px;
    margin-right:9%;
    margin-top:30px;
    .picture{
        width:70px;
        height:70px;
        background-color:#fff;
        border-radius:100%;
        background-image:url(${profile});
        background-position:center;
        background-size:cover;
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
    }
    }
    img{
        margin-right:15px;
        width:20px;
        height:20px;
    }
    
`