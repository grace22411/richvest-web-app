import React from "react";
import { Page } from "../../UserDashboard/styles/DashboardStyles";
import Layout from "../components/Layout";
import { DateFilter, FundContainer, PageTitle } from "../styles/PageStyles";
import { Tabs } from "antd";
import TotalFund from "../components/Tables/ProjectFund/TotalFund";

const ProjectFundAdmin = () => {
    const { TabPane } = Tabs;
  
        function callback(key) {
          console.log(key);
        }
  return (
    <>
      <Layout>
        <Page>
          <PageTitle>
            <h1>Project Fund</h1>
          </PageTitle>
          <DateFilter>
            <div className="filter-one from">
              {/* <label>From</label><br /> */}
              <input type="date"></input>
            </div>
            <div className="filter-one to">
              {/* <label>To</label><br /> */}
              <input type="date"></input>
            </div>
            <div className="search">
                {/* <label>to</label><br /> */}
              <input type="text" placeholder="Search"></input>
              <select>
                  <option default>Filter</option>
                  <option>Name</option>
                  <option>Email</option>
                  <option>Phone</option>
                  <option>Project</option>

              </select>
              <button><i class="fas fa-search"></i></button>
            </div>
            <div className="download">
                <button>Download CSV  <i class="fas fa-download"></i></button>
            </div>
          </DateFilter>
          <FundContainer className="container">
               <Tabs defaultActiveKey="1" onChange={callback}>
                 <TabPane tab="Total Funds" key="1">
                    <TotalFund />
                 </TabPane>

                 <TabPane tab="Running Funds" key="2">

                 </TabPane>

                 <TabPane tab="Mature Funds" key="3">

                 </TabPane>

                 <TabPane tab="Pending Funds" key="4">

                 </TabPane>
               </Tabs>
            </FundContainer>
        </Page>
      </Layout>
    </>
  );
};

export default ProjectFundAdmin;
