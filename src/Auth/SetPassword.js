import React, { useState } from "react";
import { Head, HeadWrap, VerificationCode } from "./GlobalCss";
import OtpInput from "react-otp-input";
import Header from "../UserDashboard/components/Header";

function SetPassword() {
  const [otp, setOtp] = useState('');

  const handleChange = (otp) => {
    setOtp(otp);
    console.log(otp);
  };
  return (
    <div>
     <Header />

      <VerificationCode>
        <h3>Set up your 4-digit Security pin</h3>
        <p>Do not disclose this pin to anyone!</p>
        <div className="form">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            separator={<span></span>}
          />
        </div>
      </VerificationCode>
    </div>
  );
}

export default SetPassword;
