import React from "react";
import logo from "../images/logo.png";
import purpleHue from "../images/purplehue.png";
import { Link } from "react-router-dom";
import {DropdownMenu} from "../components/Dropdown"
import {
  Head,
  HeadWrap,
  Logo,
  PictureContainer,
  UnderneathImage,
} from "../styles/ComponentStyles";


function Header() {
  return (
    <>
      <PictureContainer>
        <div className="white-background">
        <div className="picture">
          <div className="drop">
            <DropdownMenu />
          </div>
        </div>
        </div>
      </PictureContainer>
      <HeadWrap>
        <Head>
          <Logo>
            <Link to="/dashboard">
              <img src={logo} alt="Richvest Logo" />
            </Link>
          </Logo>
        </Head>
        <UnderneathImage>
          <img src={purpleHue} alt="" />
        </UnderneathImage>
      </HeadWrap>
    </>
  );
}

export default Header;
