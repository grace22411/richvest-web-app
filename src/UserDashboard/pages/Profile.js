import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { DashboardContainer, TabContainer} from "../styles/PageStyles";
import { Tabs } from "antd";
import { MyProfile, NextOfKin, BankDetails } from "../components/ProfileComp/Tabs";


const Profile = () => {

  const { TabPane } = Tabs;
  
    function callback(key) {
      console.log(key);
    }

   const style = {
      width:"80%"
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
          <TabContainer className="container">
            <div style={style}>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="My Profile" key="1">
                  <MyProfile />
                </TabPane>
                <TabPane tab="Next of Kin" key="2">
                  <NextOfKin />
                </TabPane>
                <TabPane tab="Bank Details" key="3">
                  <BankDetails />
                </TabPane>
              </Tabs>
              </div>
            </TabContainer>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
}

export default Profile;
