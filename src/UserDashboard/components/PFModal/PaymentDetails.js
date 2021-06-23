import React from 'react'
import { Modal } from "antd";

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
            <img src={logo} alt="richvest logo" />
            <h2>Project Fund</h2>
          </div>
          
        </FirstStep>
      </Modal>
        </>
    )
}

export default PaymentDetails
