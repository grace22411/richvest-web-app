import React from "react";
import logo from "../../UserDashboard/images/logo.png";
import { Link } from "react-router-dom";
import {
  Head,
  HeadWrap,
  Logo,
} from "../../UserDashboard/styles/ComponentStyles";


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


        
      </Head>
    </>
  );
}

export default Header;
