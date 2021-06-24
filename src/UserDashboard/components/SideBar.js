import React, { useState } from "react";
import { IconContext } from "react-icons";
//import { IoPersonOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import investment from "../images/investment-icon.svg";
import savings from "../images/savings-icon.svg";
import wallet from "../images/wallet-icon.svg";
import loan from "../images/loan-icon.svg";
import dashboard from "../images/dashboard-icon.svg";
import refer from "../images/referral.svg";
import {
  HeadIcons,
  SideMenu,
  MobileBottomMenu,
  Nav,
  NavItem,
} from "../styles/ComponentStyles";
import { SidebarData } from "../data/SideBarData";

export const SideBar = () => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      <SideMenu>
      <Nav>
        {SidebarData.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLink activeClassName="active"  to={item.path}>
                  <img src={item.icon} alt="" />
                    {item.title}
                  </NavLink>
                </NavItem>
              );
            })}
        </Nav>
        
      </SideMenu>

      <MobileBottomMenu>
            <li><NavLink to="/dashboard"><img src={dashboard} alt="" /><br/>Dashboard</NavLink></li>
                <li><NavLink to="/my-wallet"><img src={wallet} alt="" /><br/>Wallets</NavLink></li>
                <li><NavLink to="/project-fund"><img src={investment} alt="" /><br/>Project Fund</NavLink></li>
                <li><NavLink to="/my-savings"><img src={savings} alt="" /><br/>Savings</NavLink></li>
                <li><NavLink to="/my-loan"><img src={loan} alt="" /><br/>Loan</NavLink></li>
            </MobileBottomMenu>
    </IconContext.Provider>
  );
};

