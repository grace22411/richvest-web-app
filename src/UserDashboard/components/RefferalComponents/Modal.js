import React, { useState } from "react";
import { Modal } from "antd";
import styled from "styled-components";
import refer from "../../images/refer.svg";
import connection from "../../images/connection.svg";
import { ReferralPopUp } from "../../styles/ComponentStyles";
import ReferContent from "./ReferContent";

const ReferImage = styled.img`
  object-fit: cover;
  width: 100%;
  margin:auto !important;
  height: 70%;
  display:inline-block;
  cursor: pointer;
`;

function ReferralModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <ReferralPopUp>
      <ReferImage onClick={showModal} src={refer} alt="refer us" />
      <br />
      <Modal
        title=""
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ReferImage src={connection} alt="refer us" />
        <ReferContent />
      </Modal>
    </ReferralPopUp>
  );
}

export default ReferralModal;
