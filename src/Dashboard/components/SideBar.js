import React from 'react'
import {IconContext} from "react-icons"
//import { IoPersonOutline } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { Link } from 'react-router-dom';
import investment from "../images/investment-icon.svg"
import savings from "../images/savings-icon.svg"
import wallet from "../images/wallet-Icon.svg"
import loan from "../images/investment-icon.svg"
import dashboard from "../images/dashboard-icon.svg"
import { HeadIcons, SideMenu, Nav, NavItem } from "./ComponentStyles";

function SideBar() {
    return (
        <IconContext.Provider value={{size:"20px"}} >
            <SideMenu>
            <HeadIcons>
                {/* <IoPersonOutline /> */}
                <ImSwitch />
                <ImSwitch />
                <ImSwitch />
            </HeadIcons>
            <Nav>
                <NavItem><Link to="/dashboard"><img src={dashboard} alt="" />My Dashboard</Link></NavItem>
                <NavItem><Link to="/my-wallet"><img src={wallet} alt="" />My Wallets</Link></NavItem>
                <NavItem><Link to="/investment"><img src={investment} alt="" />My Investments</Link></NavItem>
                <NavItem><Link to="/my-savings"><img src={savings} alt="" />My Savings</Link></NavItem>
                <NavItem><Link to="/my-loan"><img src={loan} alt="" />My Loan</Link></NavItem>
            </Nav>
            </SideMenu>
            
            
        </IconContext.Provider>
    )
}

export default SideBar
