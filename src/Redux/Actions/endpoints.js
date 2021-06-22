export const base_url = "https://www.richvest.gq/";
// export const base_url = "https://localhost:44393/";

export const endpoints = {
  //Auth module
  login: `${base_url}User/Login`,
  //VerifyUserEmail: `${base_url}api/Auth/VerifyUserEmail`,
  AccountSetup: `${base_url}User/Register`,
  GetAllProjectFunds:`${base_url}ProjectFund`,
  CreateProjectFund: `${base_url}ProjectFund`
  //ChangePassword: `${base_url}api/Auth/ChangePassword`,
  //SendMail: `${base_url}api/Auth/ResetPassword/SendMail`,
  //SetNewPassword: `${base_url}api/Auth/ResetPassword/SetNewPassword`,
  //ResendUserEmailVerificationLink: `${base_url}api/Auth/ResendUserEmailVerificationLink`,
}