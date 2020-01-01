import React, { useState } from "react";
import { Head, HeadWrap, Form, Container } from "./GlobalCss";
import {Link, Redirect} from 'react-router-dom';
import useForm from "./useForm"
import validate from "./validationInfo"

function Login({submitForm}) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  
  const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)


  return (
    <div>
      <HeadWrap>
        <Head></Head>
      </HeadWrap>
      <Container className="container">
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-5">
            <Form onSubmit={handleSubmit}>
              <h3>Glad you are back! </h3>
              <p>Continue your journey to 360 financial growth.</p>
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
                <p><Link to="/verifyEmail">Forgot Password?</Link></p>
              </div>
              <Link to="/dashboard"><button className="btn">Sign In</button></Link>
              <p>New to Richvest 360? <Link to="/signup">Sign up</Link></p>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
