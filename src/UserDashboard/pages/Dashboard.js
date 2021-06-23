import React from "react";
import { DashboardCard } from "../components/Cards";
import { useHistory } from "react-router-dom";
import Title from "../components/Title";

import styled from "styled-components";
import { ChartDiv, Page, DashboardBits, DashboardBitsReferral } from "../styles/DashboardStyles";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import ReferralModal from "../components/RefferalComponents/Modal";
import DonutChart from "react-donut-chart";
import Layout from "../components/Layout";
import {Link }from "react-router-dom"
//import { ChartDonut } from '@patternfly/react-charts';
//import { Form } from "../styles/ComponentStyles";



function MainDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const history = useHistory();
  if (!user) {
    console.log("logout");
    history.push("/");
  }

  return (
    <>
      {/* {user && ( */}
        <Layout>
          <Page>
            <Title name= /*{user.firstName}*/ "precious" />
            <div className="container">
              <div className="row">
                <div className="col-md-12" style={{padding:'0'}}>
                  <DashboardBits>
                    <div className="summary">
                      <div className="quick-col">
                        <DashboardCard
                          title="Wallet"
                          colorOne="rgba(53,12,226,0.66)"
                          colorTwo="rgba(72,0,255,0.66)"
                          value="0.00"
                        />
                      </div>
                      <div className="quick-col">
                        <Link to="/project-fund">
                        <DashboardCard
                          title="Project Fund"
                          colorOne="rgba(254,95,117,0.9)"
                          colorTwo="rgba(252,152,66,0.9)"
                          value="0.00"
                        />
                        </Link>
                      </div>

                      <div className="quick-col">
                        <DashboardCard
                          title="Savings"
                          colorOne="rgba(31,44,172,0.9)"
                          colorTwo="rgba(18,37,219,0.9)"
                          value="0.00"
                        />
                      </div>
                      <div className="quick-col">
                        <DashboardCard
                          title="Loan"
                          colorOne="rgba(82,126,250,0.9)"
                          colorTwo="rgba(17,80,255,0.9)"
                          value="0.00"
                        />
                      </div>
                    </div>
                  </DashboardBits>
                </div>
                <div className="col-md-8">
                  <ChartDiv>
                    <DonutChart
                      // width={220}
                      // height={180}
                      strokeColor= 'false'
                      colors={['#356AFC','#1C2AB6','#FC9842','#8655FF']}
                      data={[
                        {
                          label: "Wallet",
                          value: 25,
                          
                        },
                        {
                          label: "Investment",
                          value: 25,
                        },
                        {
                          label: "Saving",
                          value: 25,
                        },
                        {
                          label: "Loan",
                          value: 25,
                        },
                      ]}
                    />
                  </ChartDiv>
                </div>
                <div className="col-md-4 ">
                  <DashboardBitsReferral>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image">
                          <ReferralModal />
                          <p>Refer and Earn</p>
                          <FaFacebook style={{ color: "#2a5297" }} />
                          <FaTwitter
                            style={{
                              backgroundColor: "#1ca1f3",
                              color: "#fff",
                              borderRadius: "100%",
                              padding: "3px",
                            }}
                          />
                          <FaWhatsapp
                            style={{
                              backgroundColor: "#4aa64a",
                              color: "#fff",
                              borderRadius: "100%",
                              padding: "3px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </DashboardBitsReferral>
                </div>
              </div>
            </div>
            </Page>
        </Layout>
      {/*)}*/}
    </>
  );
}

export default MainDashboard;
