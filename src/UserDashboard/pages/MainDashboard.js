import React from "react";
import { DashboardCard } from "../components/Cards";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Title from "../components/Title";

import styled from "styled-components";
// import { Doughnut } from 'react-chartjs-2';
import { DashboardContainer } from "../styles/PageStyles";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import ReferralModal from "../components/RefferalComponents/Modal";
//import { Form } from "../styles/ComponentStyles";


const DashboardBits = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #5783e651;
  .row {
    .col-md-4 {
      text-align:center;
      .image {
        width: 200px;
        height: 250px;
        text-align:center;
        svg{
          margin:20px 10px;
          size:30px;
        }
      }
    }
  }
`;

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
                <div className="col-md-8 ">
                  <DashboardBits>
                    <div className="row">
                      <div className="col-md-6 col-6">
                        <DashboardCard
                          title="My Wallet"
                          color="#4800ff"
                          value="0.00"
                        />
                      </div>
                      <div className="col-md-6 col-6">
                        <DashboardCard
                          title="My Investments"
                          color="#19d0e6"
                          value="0.00"
                        />
                      </div>

                      <div className="col-md-6 col-6">
                        <DashboardCard
                          title="My Savings"
                          color="#1f2cac"
                          value="0.00"
                        />
                      </div>
                      <div className="col-md-6 col-6">
                        <DashboardCard
                          title="My Loan"
                          color="#1051FF"
                          value="0.00"
                        />
                      </div>
                    </div>
                  </DashboardBits>
                </div>
                <div className="col-md-4">
                  <DashboardBits>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="image">
                          <ReferralModal />

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
                  </DashboardBits>
                </div>
                <div className="col-md-10">
                  {/* <Doughnut
                    data={[{'red' : 2, 'blue':3}]}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                  /> */}
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
