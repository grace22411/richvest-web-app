import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import {
  CreateNewPlan,
  FirstStep,
  TermAndCondition,
} from "../../styles/ProjectFundStyles";
import logo from "../../images/logo.png";
import { createFund } from "../../../Redux/Actions/project-fund-mgt";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { connect } from "react-redux";

const PFModal = ({ loading }) => {
  //Get the form values
  const [form, setForm] = useState({
    duration: 1,
    amount: 0,
    projectTitle: "",
    roi: 3,
    startDate: new Date(),
    returns: "",
    maturityDate: () =>
      new Date(new Date().setMonth(new Date().getMonth() + duration)),
  });

  const {
    projectTitle,
    duration,
    roi,
    amount,
    startDate,
    maturityDate,
    returns,
  } = form || {};

  const dispatch = useDispatch();
  //Create a new project fund
  
  useEffect(() => {
    console.log(new Date().getMonth())
    setForm({...form, maturityDate: () =>
    new Date(new Date().setMonth(new Date().getMonth() + duration))})
    
  }, [duration])

  const OnSubmitForm = (e) => {
    const user = JSON.parse(localStorage.getItem('user'))
    e.preventDefault();
    const payload = {
      userId:user?.userId,
      projectTitle,
      duration,
      amount,
      roi,
      returns: newReturns,
      startDate: new Date(),
      maturityDate: maturityDate(),
    };
    <Spin />
    console.log(payload);
    dispatch(createFund(payload));
  };

  //Review Modal
  const Review = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      closeModal()
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
              <h3>Project Fund</h3>
            </div>
            <div className="container-fluid">
              <h3>{projectTitle}</h3>
              <div className="row">
                <div className="col-md-6 col-6">
                  <p>Amount</p>
                  <h4>{amount}</h4>
                </div>
                <div className="col-md-6 col-6">
                  <p>Duration</p>
                  <h4>{duration} Month(s)</h4>
                </div>
                <div className="col-md-6 col-6">
                  <p>Roi</p>
                  <h4>{roi}</h4>
                </div>
                <div className="col-md-6 col-6">
                  <p>Returns</p>
                  <h4>{newReturns}</h4>
                </div>
                <div className="col-md-6 col-6">
                  <p>Start Date</p>
                  <h4>{startDate.toDateString()}</h4>
                </div>
                <div className="col-md-6 col-6">
                  <p>End Date</p>
                  <h4>{maturityDate().toDateString()}</h4>
                </div>
              </div>
            </div>
            
          
          <p className="terms">Read terms and conditions</p>
          <TermAndCondition>
            <div className="form-group">
              <input type="checkbox" id="switch"/>
              <label for="switch" class="slider round"></label>
              <span>
                I have read, understood and I agree to the terms and conditions.{" "}
              </span>
            </div>
            {/* <select disabled>
              <option value="" default>Transfer</option>
              <option value="">Wallet</option>
              <option value="">Card</option>
            </select> */}
          </TermAndCondition>
          <button onClick={OnSubmitForm, <Spin />}>
              Create Plan 
            </button>
            </FirstStep>
        </Modal>
      </>
    );
  };


  //Create fund visible
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //Calculate interest rate
  const totalReturns =
    ((parseInt(duration) * parseInt(roi)) / 100) * parseInt(amount);
  const newReturns = totalReturns + parseInt(amount);

  //Show modal
  const showModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = async () => {
    await setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <CreateNewPlan onClick={showModal}>
        <i className="fas fa-plus"></i>
        <p>Create New Plan</p>
      </CreateNewPlan>
      <Modal title="" visible={isModalVisible} onCancel={handleCancel}>
        <FirstStep>
          <div className="title">
            <img src={logo} alt="richvest logo" />
            <h3>Project Fund</h3>
          </div>
          <form>
            <div className="form-group">
              <label>Project Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputProjectTitle"
                aria-describedby="ProjectTitleHelp"
                name="projectTitle"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Amount(in naira)</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputAmount"
                aria-describedby="AmountHelp"
                name="amount"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <div className="durationHead">
                <label>Duration</label>
                <p>{duration} Month(s)</p>
              </div>

              <input
                type="range"
                className="form-control duration-range"
                id="duration"
                aria-describedby="emailHelp"
                name="duration"
                onChange={handleChange}
                min="1"
                max="12"
                value={duration}
                step="1"
              />
            </div>
            <div className="form-group">
              <label>Roi</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputCode1"
                aria-describedby="CodeHelp"
                value={roi}
                name="roi"
                onChange={handleChange}
                disabled
              />
            </div>
          </form>
          <div className="summary">
            <div className="total">
              <h2>{newReturns}</h2>
            </div>
            <div className="text">
              <p>
                At the end of {duration} months you would have earned{" "}
                <span>{roi}%</span> returns on <span>{amount}</span>{" "}
              </p>
              <p style={{ fontWeight: "600" }}>Sounds Awesome!</p>
            </div>
          </div>
          <Review />
        </FirstStep>
      </Modal>
    </>
  );
};
// const mapStateToProps = (state) => ({
//   loading: state.projuctFundReducer.loading,
// });
export default PFModal;