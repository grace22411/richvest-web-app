export const base_url = "http://testrich-001-site1.itempurl.com/";
// export const base_url = "https://localhost:44393/";

export const endpoints = {
  //Auth module
  login: `${base_url}User/Login/emailAddress/password`,
  //VerifyUserEmail: `${base_url}api/Auth/VerifyUserEmail`,
  AccountSetup: `${base_url}User/Register`,
  //ChangePassword: `${base_url}api/Auth/ChangePassword`,
  //SendMail: `${base_url}api/Auth/ResetPassword/SendMail`,
  //SetNewPassword: `${base_url}api/Auth/ResetPassword/SetNewPassword`,
  //ResendUserEmailVerificationLink: `${base_url}api/Auth/ResendUserEmailVerificationLink`,
}