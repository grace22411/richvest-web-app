import React from "react";
import {DashboardCard} from "../components/Cards";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import { DashboardContainer } from "./PageStyles";

function MainDashboard() {
  return (
    <>
      <Header />
      <DashboardContainer className="container">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <Title name="Precious" />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <DashboardCard title="My Wallet" color="#4800ff" value="0.00"/>
                </div>
                <div className="col-md-6">
                  <DashboardCard title="My Investments" color="#19d0e6" value="0.00" />
                </div>
                <div className="col-md-6">
                  <DashboardCard title="My Savings" color="#1f2cac"  value="0.00"/>
                </div>
                <div className="col-md-6">
                  <DashboardCard title="My Loan" color="#1051FF"  value="0.00"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}

export default MainDashboard;
