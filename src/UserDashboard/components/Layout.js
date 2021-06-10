import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">{children}</div>
      </div>
      </div>
    </>
  );
};

export default Layout;
