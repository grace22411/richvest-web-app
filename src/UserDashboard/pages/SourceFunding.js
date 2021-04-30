import { Tabs} from 'antd';
import React from 'react'
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { InvestTabOne, InvestTabThree, InvestTabTwo } from '../components/InvestTabs';
import { DashboardContainer, TabContainer } from '../styles/PageStyles';

function SourceFunding() {
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
            <h3>Source of Funding</h3>
            <TabContainer className="container">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Wallet" key="1">
                  <InvestTabOne />
                </TabPane>
                <TabPane tab="Transfer" key="2">
                  <InvestTabTwo />
                </TabPane>
                <TabPane tab="Card" key="3">
                  <InvestTabThree />
                </TabPane>
              </Tabs>
            </TabContainer>
          </div>
        </div>
      </DashboardContainer>
        </>
    )
}

export default SourceFunding;
