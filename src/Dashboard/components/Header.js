import React from "react";
import logo from "../images/logo.png"
import purpleHue from "../images/purplehue.png"
import { Link } from 'react-router-dom';
import { Head, HeadWrap, Logo, PictureContainer, UnderneathImage } from "./ComponentStyles";

function Header() {
  return (
    <>
      <HeadWrap>
        <Head>
            <Logo>
                <Link to="/dashboard"><img src={logo} alt="Richvest Logo" /></Link>
            </Logo>
            <PictureContainer>
                <div className="picture"></div>
            </PictureContainer>
        </Head>
        <UnderneathImage>
            <img src={purpleHue} alt="" />
        </UnderneathImage>
      </HeadWrap>
    </>
  );
}

export default Header;
