import React from "react";
import { InvestmentCard } from "../components/Cards";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Title from "../components/Title";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import { DashboardContainer,TabContainer } from "./PageStyles";
import { InvestTabOne, InvestTabThree, InvestTabTwo } from "../components/InvestTabs";

function Investment() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <>
      <Header />
      <DashboardContainer className="container">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <h3>My Investments</h3>
            <p>
              Choose a sponsorship plan from our marketplace and enjoy excellent
              returns.
            </p>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <InvestmentCard
                    title="Total Plans"
                    color="#ae3a8b"
                    value="0.00"
                  />
                </div>
                <div className="col-md-4">
                  <InvestmentCard
                    title="Total Profits"
                    color="#fea803"
                    value="0.00"
                  />
                </div>
                <div className="col-md-4">
                  <InvestmentCard
                    title="Total Earnings"
                    color="#1f2cac"
                    value="0.00"
                  />
                </div>
              </div>
            </div>

            <TabContainer className="container">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Mini Investments" key="1">
                  <InvestTabOne />
                </TabPane>
                <TabPane tab="Maxi Investments" key="2">
                  <InvestTabTwo />
                </TabPane>
                <TabPane tab="Active Investments" key="3">
                  <InvestTabThree />
                </TabPane>
              </Tabs>
            </TabContainer>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}

export default Investment;
