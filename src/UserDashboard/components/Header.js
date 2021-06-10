import React from "react";
import logo from "../images/logo.png";
import purpleHue from "../images/purplehue.png";
import { Link } from "react-router-dom";
import { DropdownMenu } from "../components/Dropdown";
import {
  Head,
  HeadWrap,
  Logo,
  PictureContainer,
  Profile,
} from "../styles/ComponentStyles";


function Header() {

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Head>
        <Logo>
          <Link to="/dashboard">
            <img src={logo} alt="Richvest Logo" />
          </Link>
        </Logo>


      <Profile>
      <p>{user.fullname}</p>
      <PictureContainer>
        
         <div className="white-background">
           <div className="picture">
             <div className="drop">
               <DropdownMenu />
             </div>
           </div>
         </div>
       </PictureContainer>
      </Profile>
        
      </Head>
    </>
  );
}

export default Header;
