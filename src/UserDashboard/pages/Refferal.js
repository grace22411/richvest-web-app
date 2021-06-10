// import React from "react";
// import Header from "../components/Header";
// import { ReferAndEarn, ReferralDetails } from "../components/RefferalComponents/Tabs";
// import SideBar from "../components/SideBar";
// import { Tabs } from "antd";
// import { DashboardContainer, TabContainer , ReferralContainer} from "../styles/DashboardStyles";

// function Refferal() {
//     const { TabPane } = Tabs;
  
//     function callback(key) {
//       console.log(key);
//     }
//   return (
//     <div>
//       <Header />
//       <DashboardContainer className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <SideBar />
//           </div>
//           <div className="col-md-9">
//           <h3>Referrals</h3>
//           <TabContainer className="container">
//             <ReferralContainer>
//               <Tabs defaultActiveKey="1" onChange={callback}>
//                 <TabPane tab="Referral Details" key="1">
//                   <ReferralDetails />
//                 </TabPane>
//                 <TabPane tab="Refer and Earn" key="2">
//                   <ReferAndEarn />
//                 </TabPane>
//               </Tabs>
//               </ReferralContainer >
//             </TabContainer>

//           </div>
//         </div>
//       </DashboardContainer>
//     </div>
//   );
// }

// export default Refferal;
