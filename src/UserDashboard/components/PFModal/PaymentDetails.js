import React, {useState} from 'react'
import { Modal } from "antd";
import { FirstStep } from '../../styles/ProjectFundStyles';

const PaymentDetails = () => {
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
        <>
        <button onClick={showModal}>Review</button>
      <Modal
        title=""
        
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <FirstStep>
          <div className="title">
            <h2>Project Fund</h2>
          </div>
          
        </FirstStep>
      </Modal>
        </>
    )
}

export default PaymentDetails
