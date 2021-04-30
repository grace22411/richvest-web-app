import React, { useState } from "react";
import { Illustration, Form, Container , WelcomeImage} from "./GlobalCss";
import {Link, Redirect} from 'react-router-dom';
import useForm from "./useForm"
import validate from "./validationInfo"
import business2 from "../UserDashboard/images/business2.svg"
import Header from "./Header";

function SignUp({submitForm}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)


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
          <div className="col-md-5 signup-form">
            <Form onSubmit={handleSubmit}>
              <h3>Sign Up! </h3>
              <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                  aria-describedby="firstNameHelp"
                  placeholder="Enter first name"
                  //value={values.email}
                  onChange={handleChange}
                />
                {errors.firstname && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.firstname}</p>}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                  aria-describedby="lastNameHelp"
                  placeholder="Enter last name"
                  //value={values.email}
                  onChange={handleChange}
                />
                {errors.lastname && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.lastname}</p>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  //value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.email}</p>}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  aria-describedby="PasswordHelp"
                  placeholder="Enter Password"
                  //value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.password}</p>}
                
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputCode1"
                  aria-describedby="CodeHelp"
                  placeholder="Referal Code(Optional)"
                  //value={values.password}
                  onChange={handleChange}
                />
                {errors.code && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.code}</p>}
                
              </div>
              <button className="btn">Get Started</button>
              <p style={{marginTop:"20px"}}>Already a member of Richvest 360? <Link to="/" style={{color:"#0303ad"}}>Sign In</Link></p>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
