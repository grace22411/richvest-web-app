export const base_url = "https://richvest360.ga/";
// export const base_url = "https://localhost:44393/";

export const endpoints = {
  //Auth module
  login: `${base_url}User/Login`,
  VerifyUserEmail: `${base_url}User/VerifyEmail`,
  AccountSetup: `${base_url}User/Register`,
  ResetPassword: `${base_url}User/ResetPassword`,
  SendMail: `${base_url}User/ForgotPassword`,
  //SetNewPassword: `${base_url}api/Auth/ResetPassword/SetNewPassword`,
  //ResendUserEmailVerificationLink: `${base_url}api/Auth/ResendUserEmailVerificationLink`,



  //FUND
  totalProjectFund: `${base_url}ProjectFund/GetTotalUserFundById`,
  GetAllProjectFunds:`${base_url}ProjectFund`,
  CreateProjectFund: `${base_url}ProjectFund`,


  //PROFILE
  userProfileUpdate:`${base_url}Person`
}