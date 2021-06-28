import React,{useState} from "react";
import FundEntry from "../components/FundEntry";
import Layout from "../components/Layout";
import PFModal from "../components/PFModal/PFModal";
import { Page } from "../styles/DashboardStyles";
import { CreateNewPlan, TotalFund, TotalFundEntry } from "../styles/ProjectFundStyles";
import wave from "../images/pfwave.svg";

const ProjectFund = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Layout>
        <Page>
          <TotalFund>
            <div className="underneath-head"></div>
            <div className="text-contained">
              <h2>Total Project Fund</h2>
              <p>0.00</p>
              <img src={wave} alt="" />
            </div>
          </TotalFund>
          <CreateNewPlan onClick={() => setIsModalVisible(true)}>
            <i className="fas fa-plus"></i>
            <p>Create New Plan</p>
          </CreateNewPlan>
          <PFModal
            isModalVisible={isModalVisible}
            handleCancel={() => setIsModalVisible(false)}
          />
          <TotalFundEntry>
            <FundEntry></FundEntry>
          </TotalFundEntry>
        </Page>
      </Layout>
    </>
  );
};

export default ProjectFund;
