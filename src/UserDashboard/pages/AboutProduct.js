import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import ProductDetails from "../components/ProductDetails";
import { DashboardContainer} from "../styles/PageStyles";

function AboutProduct() {
  return (
    <div>
      <Header />
      <DashboardContainer className="container">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <ProductDetails />
          </div>
        </div>
      </DashboardContainer>
    </div>
  );
}

export default AboutProduct;
