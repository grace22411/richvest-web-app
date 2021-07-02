import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Container } from "./GlobalCss";
import { Link, Redirect } from "react-router-dom";
import { Spin } from "antd";
import loginImage from "../UserDashboard/images/Login.png";
import Header from "./Header";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {useHistory} from "react-router-dom"
import { loginService } from "../Redux/Actions/auth";
import { setAlert } from "../Redux/Actions/alert";

const Login = ({ loginService, isAuthenticated, loading, setAlert }) => {
  // const [revealPasword, setRP] = useState(false);
  const [isPasswordShown, setIsPasswordShow] = useState(false);
  const history = useHistory()
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });
  const { emailAddress, password } = formData;

  const togglePasswordVisibilty = () => {
    setIsPasswordShow(isPasswordShown => !isPasswordShown);
  };
  
  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    Object.entries(formData).forEach((each) => {
      if (each[1] === "") {
        setAlert(`${each[0]} is required`, "error");
        return;
      }
    });
   // loginService(formData);
    const payload = {
      emailAddress: emailAddress,
      password: password,
    };
    loginService(payload, {redirect: (url) => history.replace(url)});
  };

  // Redirect if logged in
  if (isAuthenticated) {
      // redirect to dashboard
      const userDetails = JSON.parse(localStorage.getItem('user'));
      return <Redirect to="/dashboard" />;
    }
  

  return (
    <div>
      <Header />
      <Container className="container">
        <div className="row">
          <div className="col-md-7">
            <img src={loginImage} alt="A lady typing" />
          </div>
          <div className="col-md-5 col-12">
            <Form>
              <h3>Glad you are back! </h3>
              <p>Continue your journey to 360 financial growth.</p>
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
                  required
                />
                
              </div>
              <div className="form-group">
                <input
                  type={isPasswordShown ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="PasswordHelp"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={onFormChange}
                  required
                />
        <i className={`far ${isPasswordShown ? 'fa-eye' : 'fa-eye-slash'}`} onClick={togglePasswordVisibilty}></i>
                <p>
                  <Link to="/forgotPassword">Forgot Password?</Link>
                </p>
              </div>
              <button
                className="btn"
                onClick={onSubmitForm}
                // disabled={loading}
              >
                Sign In {loading && <Spin />}
              </button>
              <p style={{ marginTop: "15px" }}>
                New to Richvest 360? <Link to="/signup">Sign up</Link>
              </p>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

Login.propTypes = {
  loginService: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { loginService, setAlert })(Login);
