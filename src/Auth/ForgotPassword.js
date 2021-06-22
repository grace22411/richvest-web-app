import React from 'react'
import Header from './Header'
import password from "../UserDashboard/images/password.svg"
import { Form } from '../UserDashboard/styles/ComponentStyles'

const ForgotPassword = () => {
    return (
        <div>
            <Header/>

            <ForgotPasswordContainer>
                <div className="">
                    <img src={password} alt="forgot password image" />
                </div>
                <Form>
                    <h2>Forgot Password</h2>
                    <p>Kindly enter the email associated with your account to reset your password</p>
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
                </Form>

            </ForgotPasswordContainer>


            
        </div>
    )
}

export default ForgotPassword;
