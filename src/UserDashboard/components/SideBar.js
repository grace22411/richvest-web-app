import React from 'react'
import {IconContext} from "react-icons"
//import { IoPersonOutline } from "react-icons/io";
import { ImSwitch } from "react-icons/im";
import { Link } from 'react-router-dom';
import investment from "../images/investment-icon.svg"
import savings from "../images/savings-icon.svg"
import wallet from "../images/wallet-Icon.svg"
import loan from "../images/loan-icon.svg"
import dashboard from "../images/dashboard-icon.svg"
import { HeadIcons, SideMenu, MobileBottomMenu,Nav, NavItem } from "../styles/ComponentStyles";

function SideBar() {
    return (
        <IconContext.Provider value={{size:"20px"}} >
            <SideMenu>
            {/* <HeadIcons>
                <ImSwitch />
                <Link to="/refferal"><ImSwitch /></Link>
               <Link to="/"><ImSwitch /></Link> 
            </HeadIcons> */}
            <Nav>
                <NavItem><Link to="/dashboard"><img src={dashboard} alt="" />Dashboard</Link></NavItem>
                <NavItem><Link to="/my-wallet"><img src={wallet} alt="" />Wallets</Link></NavItem>
                <NavItem><Link to="/investment"><img src={investment} alt="" />Investments</Link></NavItem>
                <NavItem><Link to="/my-savings"><img src={savings} alt="" />Savings</Link></NavItem>
                <NavItem><Link to="/my-loan"><img src={loan} alt="" />Loan</Link></NavItem>
                <NavItem><Link to="/refferal"><img src="../images/refferal.svg" alt="" />Refferals</Link></NavItem>
            </Nav>
            </SideMenu>


            <MobileBottomMenu>
            <li><Link to="/dashboard"><img src={dashboard} alt="" /><br/>Dashboard</Link></li>
                <li><Link to="/my-wallet"><img src={wallet} alt="" /><br/>Wallets</Link></li>
                <li><Link to="/investment"><img src={investment} alt="" /><br/>Investments</Link></li>
                <li><Link to="/my-savings"><img src={savings} alt="" /><br/>Savings</Link></li>
                <li><Link to="/my-loan"><img src={loan} alt="" /><br/>Loan</Link></li>
            </MobileBottomMenu>
            
            
        </IconContext.Provider>
    )
}

export default SideBar;
