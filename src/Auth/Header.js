import React from "react";
import logo from "../Dashboard/images/logo.png"

import { Link } from 'react-router-dom';
import { Head, HeadWrap, Logo} from "./GlobalCss";

function Header() {
  return (
    <>
      <HeadWrap>
        <Head>
            <Logo>
                <Link to="/dashboard"><img src={logo} alt="Richvest Logo" /></Link>
            </Logo>
        </Head>
      </HeadWrap>
    </>
  );
}

export default Header;
