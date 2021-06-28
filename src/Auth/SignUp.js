import React, { useState } from "react";
import { Illustration, Form, Container , WelcomeImage} from "./GlobalCss";
import {Link, Redirect} from 'react-router-dom';
import business2 from "../UserDashboard/images/business2.svg"
import {accountSetup} from '../Redux/Actions/auth';
import PropTypes from 'prop-types';
import {useHistory} from "react-router-dom"
import {connect} from 'react-redux';
import {setAlert} from '../Redux/Actions/alert';
import {Spin} from 'antd';
import Header from "./Header";

function SignUp({setAlert, accountSetup, isAuthenticated, loading}) {
  const history = useHistory()
  const [userDetail, setuserDetail] = useState({
    emailAddress: '',
    firstname: '',
   lastname: '',
    password: '',
    referralCode:''
  });
  const {emailAddress, firstname, lastname, password, referralCode} = userDetail;

  const onFormChange = (e) => {
    setuserDetail({...userDetail, [e.target.name]: e.target.value});
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    // if (NewPassword != NewPassword2) {
    //   setAlert('Password do not match', 'error');
    //   return;
    // }
    console.log(userDetail);
    Object.entries(userDetail).forEach((each,index) => {
      if (each[1] === '' && index !== 4) {
        setAlert(`${each[0]} is required`, 'error');
        return
      }
    });

    const payload = JSON.stringify({
      emailAddress: emailAddress,
      firstname: firstname,
      lastname:lastname,
      password: password,
      referralCode:referralCode
    });
    // if (emailAddress < ) {
    //   setAlert(`Email Address is required`, "error");
    //   return;
    // }

    accountSetup(payload, {redirect: (url) => history.replace(url)});
    
  };
  if (isAuthenticated) {
    return <Redirect to="/verifyEmail" />;
  }
  
  // Redirect if logged in
  // if (isAuthenticated) {
  //   const userDetails = JSON.parse(localStorage.getItem('user'));
  //   if (userDetails.userType === 1) {
  //     // redirect to super admin dashboard
  //     return <Redirect to="/dashboard" />;
  //   }
  // }


  return (
    <div>
      <Header />
      <Container className="container-fluid">
        <div className="row">
          <div className="col-md-7 signup">
              
                <WelcomeImage>
                <h2>Get started on <span>growing</span> your<br />money the smart way!</h2>
                <img src={business2} alt="A lady typing" />
                </WelcomeImage>
          </div>
          <div className="col-md-5 col-12 signup-form">
            <Form>
              <h3>Sign Up! </h3>
              <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                  aria-describedby="firstNameHelp"
                  placeholder="Enter first name"
                  name="firstname"
                  value={firstname}
                onChange={onFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                  aria-describedby="lastNameHelp"
                  placeholder="Enter last name"
                  name="lastname"
                  value={lastname}
                onChange={onFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="emailAddress"
                  value={emailAddress}
                  onChange={onFormChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="PasswordHelp"
                  placeholder="Enter Password"
                  name="password"
                  value={password}

                onChange={onFormChange}
                />
                
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputCode1"
                  aria-describedby="CodeHelp"
                  placeholder="Referal Code(Optional)"
                  //value={values.password}
                  onChange={onFormChange}
                />
                
              </div>
              <button className="btn" onClick={onSubmitForm}>Get Started {loading && <Spin />}</button>
              <p style={{marginTop:"20px"}}>Already a member of Richvest 360? <Link to="/" style={{color:"#0303ad"}}>Sign In</Link></p>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}
SignUp.propTypes = {
  accountSetup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {accountSetup, setAlert})(SignUp);
