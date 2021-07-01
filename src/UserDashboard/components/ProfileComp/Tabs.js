import React, {useState} from "react";
import { Link } from "react-router-dom";
import refer from "../../images/referandearn.svg";
import {DropdownMenuProfile} from "../Dropdown"
import { ProfileSetup } from "../../../Redux/Actions/profile";
import {
  ProfileTabOne,
  ProfileTabTwo,
  ProfileTabThree,
  Form,
  PictureContainerProfile
} from "../../styles/ComponentStyles";

export const MyProfile = () => {

  const [userProfile, setuserProfile] = useState({
    emailAddress: '',
    firstname: '',
   lastname: '',
    password: '',
    phoneNumber:''
  });

  const {emailAddress, firstname, lastname, password, phoneNumber} = userProfile;

  const onFormChange = (e) => {
    setuserProfile({...userProfile, [e.target.name]: e.target.value});
  };
  const onSubmitForm = async(e) => {
    e.preventDefault();
    
    console.log(userProfile);
   

    const payload = JSON.stringify({
      emailAddress: emailAddress,
      firstname: firstname,
      lastname:lastname,
      password: password,
      referralCode:phoneNumber
    });
   
    // const response = await sendRegisterRequest(emailAddress, password);
    // const responseJson = await response.json();
    // if (emailAddress < ) {
    //   setAlert(`Email Address is required`, "error");
    //   return;
    // }

    ProfileSetup(payload);
    
  };


  return (
    <ProfileTabOne>
      <div className="row">
        <div className="col-md-2">
          <PictureContainerProfile>
            <div className="white-background">
              <div className="picture">
                <div className="drop">
                  <DropdownMenuProfile />
                </div>
              </div>
            </div>
          </PictureContainerProfile>
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
  );
};

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
  );
};

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
  );
};
