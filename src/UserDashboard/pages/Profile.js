import React from "react";
import {
  TabContainer,
  ReferralContainer,
  Page,
} from "../styles/DashboardStyles";
import { Tabs } from "antd";
import {
  NextOfKin,
  BankDetails,
  MyProfile
} from "../components/ProfileComp/Tabs";
import Layout from "../components/Layout";

const Profile = () => {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Layout>
        <Page>
          <TabContainer className="container">
            <ReferralContainer>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="My Profile" key="1">
                  <MyProfile  />
                </TabPane>
                <TabPane tab="Next of Kin" key="2">
                  <NextOfKin />
                </TabPane>
                <TabPane tab="Bank Details" key="3">
                  <BankDetails />
                </TabPane>
              </Tabs>
            </ReferralContainer>
          </TabContainer>
        </Page>
      </Layout>
    </>
  );
};

export default Profile;
