
import React from 'react'
import { Link } from 'react-router-dom'
import refer from "../../images/referandearn.svg"
import {ProfileTabOne, ProfileTabTwo, ProfileTabThree, Form} from "../../styles/ComponentStyles"


export const MyProfile = () => {
    return (
        <ProfileTabOne>
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-10">
                    <Form>
              <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                  aria-describedby="firstNameHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                  aria-describedby="lastNameHelp"
                  placeholder="Last Name"
                 />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="EmailHelp"
                  placeholder="Email Address"
                  />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhoneNumber1"
                  aria-describedby="PhoneNumberHelp"
                  placeholder="Phone Number"
                  />
              </div>
              <div className="form-group">
                <input
                  type="Password"
                  className="form-control"
                  id="exampleInputPassword"
                  aria-describedby="PasswordHelp"
                  placeholder="Password"
                 />
              </div>
              <button className="btn">Update</button>
            </Form>
                    </div>
                </div>
        </ProfileTabOne>
    )
}

export const NextOfKin = () => {
    return (
        <ProfileTabTwo>
            <Form>
              <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  id="exampleInputFirstName"
                  aria-describedby="firstNameHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLastName"
                  aria-describedby="lastNameHelp"
                  placeholder="Last Name"
                 />
              </div>
              
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhoneNumber1"
                  aria-describedby="PhoneNumberHelp"
                  placeholder="Phone Number"
                  />
    
                
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputRelationship"
                  aria-describedby="RelationshipHelp"
                  placeholder="Relationship"
                 />
              </div>
              <button className="btn">Update</button>
            </Form>
           
        </ProfileTabTwo>
    )
}

export const BankDetails = () => {
    return (
        <ProfileTabThree>
            <Form>
              <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  id="exampleInputBankName"
                  aria-describedby="BankNameHelp"
                  placeholder="Bank Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAccountName"
                  aria-describedby="AccountNameHelp"
                  placeholder="Account Name"
                 />
              </div>
              
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputAccountNumber1"
                  aria-describedby="AccountNumberHelp"
                  placeholder="Account Number"
                  />
              </div>
              <button className="btn">Update</button>
            </Form>

        </ProfileTabThree>
    )
}