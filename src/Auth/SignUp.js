import React, { useState } from "react";
import { Head, HeadWrap, Form, Container , WelcomeImage} from "./GlobalCss";
import {Link, Redirect} from 'react-router-dom';
import useForm from "./useForm"
import validate from "./validationInfo"

function SignUp({submitForm}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)


  return (
    <div>
      <HeadWrap>
        <Head></Head>
      </HeadWrap>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-md-7 signup">
                <WelcomeImage>

                </WelcomeImage>
          </div>
          <div className="col-md-5 signup-form">
            <Form onSubmit={handleSubmit}>
              <h3>Sign Up </h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputFullName"
                  aria-describedby="fullNameHelp"
                  placeholder="Enter full name"
                  //value={values.email}
                  onChange={handleChange}
                />
                {errors.fullname && <p style={{color:"red", fontSize:"11px", fontWeight:500}}>{errors.fullname}</p>}
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
              <p>Already a member of Richvest 360? <Link to="/">Sign In</Link></p>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
