import React from "react";
import Layout from "../components/Layout";
import { ChartDiv, DashboardBits, Page } from "../../UserDashboard/styles/DashboardStyles";
import {Link} from "react-router-dom"
import { AdminDashboardCard } from "../components/Cards";
import DonutChart from "react-donut-chart";
import { PageTitle } from "../styles/PageStyles";

const AdminDashboard = () => {
  return (
    <div>
      <Layout>
        <Page>
        <PageTitle>
            <h1>Dashboard</h1>
          <p>Welcome</p>
          </PageTitle>
          <div className="container">
            <div className="row">
              <div className="col-md-12" style={{ padding: "0" }}>
                <DashboardBits>
                  <div className="summary">
                    <div className="quick-col">
                      <AdminDashboardCard
                        title="Wallet"
                        colorOne="rgba(53,12,226,0.66)"
                        colorTwo="rgba(72,0,255,0.66)"
                        value="0.00"
                      />
                    </div>
                    <div className="quick-col">
                      <Link to="/project-fund">
                        <AdminDashboardCard
                          title="Project Fund"
                          colorOne="rgba(254,95,117,0.9)"
                          colorTwo="rgba(252,152,66,0.9)"
                          value="0.00"
                        />
                      </Link>
                    </div>

                    <div className="quick-col">
                      <AdminDashboardCard
                        title="Savings"
                        colorOne="rgba(31,44,172,0.9)"
                        colorTwo="rgba(18,37,219,0.9)"
                        value="0.00"
                      />
                    </div>
                    <div className="quick-col">
                      <AdminDashboardCard
                        title="Loan"
                        colorOne="rgba(82,126,250,0.9)"
                        colorTwo="rgba(17,80,255,0.9)"
                        value="0.00"
                      />
                    </div>
                  </div>
                </DashboardBits>
              </div>
              <div className="col-md-5">
                <ChartDiv>
                  <DonutChart
                    // width={220}
                    // height={180}
                    strokeColor="false"
                    colors={["#356AFC", "#1C2AB6", "#FC9842", "#8655FF"]}
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
              </div>
            </div>
          </div>
        </Page>
      </Layout>
    </div>
  );
};

export default AdminDashboard;
