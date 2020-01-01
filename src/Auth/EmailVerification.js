import React, { useState } from "react";
import { Head, HeadWrap, VerificationCode } from "./GlobalCss";
import { Link } from 'react-router-dom';
import OtpInput from "react-otp-input";

function EmailVerification() {
  const [otp, setOtp] = useState('');

  const handleChange = (otp) => {
    setOtp(otp);
  };
  return (
    <>
      <HeadWrap>
        <Head></Head>
      </HeadWrap>

      <VerificationCode>
        <h3>Check your email</h3>
        <p>
          We have sent a six-digit verification code to your registered email
        </p>
        <div className="form">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span></span>}
          />

          
        </div>
        <p>Click <Link to="/">here</Link> to resend code</p>
      </VerificationCode>
    </>
  );
}

export default EmailVerification;
