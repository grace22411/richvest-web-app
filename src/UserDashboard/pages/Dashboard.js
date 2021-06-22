import React from "react";
import { DashboardCard } from "../components/Cards";
import { useHistory } from "react-router-dom";
import Title from "../components/Title";

import styled from "styled-components";
import { ChartDiv, Page } from "../styles/DashboardStyles";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import ReferralModal from "../components/RefferalComponents/Modal";
import DonutChart from "react-donut-chart";
import Layout from "../components/Layout";
//import { ChartDonut } from '@patternfly/react-charts';
//import { Form } from "../styles/ComponentStyles";

const DashboardBits = styled.div`
  border-radius: 10px;
  padding-left: 20px;
  margin-top: 20px;
  .row {
    .col-md-4 {
      text-align: center;
      .image {
        width: 200px;
        height: 250px;
        text-align: center;
        svg {
          margin: 0px 10px;
          size: 30px;
        }
      }
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    .row {
      .col-md-4 {
        display: none;
      }
    }
  }
  .summary{
    overflow-y: hidden;
      overflow-x: scroll !important;
      height: auto;
      white-space: nowrap;
  }
`;
const DashboardBitsReferral = styled(DashboardBits)`
  border: 1px solid #407bff66;
  padding: 30px 20px;
`;

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
      {user && (
        <Layout>
          <Page>
            <Title name={user.firstName} />
            <div className="container">
              <div className="row">
                <div className="col-md-12 ">
                  <DashboardBits>
                    <div className="row summary">
                      <div className="col-md-3">
                        <DashboardCard
                          title="Wallet"
                          colorOne="rgba(53,12,226,0.66)"
                          colorTwo="rgba(72,0,255,0.66)"
                          value="0.00"
                        />
                      </div>
                      <div className="col-md-3">
                        <DashboardCard
                          title="Project Fund"
                          colorOne="rgba(254,95,117,0.9)"
                          colorTwo="rgba(252,152,66,0.9)"
                          value="0.00"
                        />
                      </div>

                      <div className="col-md-3">
                        <DashboardCard
                          title="Savings"
                          colorOne="rgba(31,44,172,0.9)"
                          colorTwo="rgba(18,37,219,0.9)"
                          value="0.00"
                        />
                      </div>
                      <div className="col-md-3">
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
                      width={200}
                      height={200}
                      
                      colors={['#8655FF','#14D4EB','#1C2AB6','#356AFC']}
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
      )}
    </>
  );
}

export default MainDashboard;
