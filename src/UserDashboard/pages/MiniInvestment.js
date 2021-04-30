import React from "react";
import { data } from "../components/Data";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SideBar from "../components/SideBar";
import { Link } from 'react-router-dom';
import {
  DashboardContainer,
  ProductImage,
  ProductsContainer,
  ProductDetails,
} from "../styles/PageStyles";

const MiniInvestment = () => {
  return (
    <>
      <Header />
      <DashboardContainer className="container">
        <div className="row">
          <div className="col-md-3">
            <SideBar />
          </div>
          <div className="col-md-9">
            <h3>Mini Plan</h3>
            <p>
              Choose a sponsorship plan from our marketplace and enjoy excellent
              returns.
            </p>
            <ProductsContainer>
              <SearchInput />
              {data.map((data, i) => {
                return (
                  <ProductDetails>
                    <ProductImage
                      key={i}
                      className="g-slide backgroundFix"
                      style={{
                        backgroundImage: `url(${data.imageUrl})`,
                      }}
                      loading="lazy"
                    >
                      {/* <div>
                        <h3>{data.title}</h3>
                      </div> */}
                    </ProductImage>
                      <div className="details">
                          <div className="det">
                              <div>
                                  <p>Unit Price</p>
                                  <h3>{data.unitPrice}</h3>
                              </div>
                              <div>
                                  <p>Duration</p>
                                  <h3>{data.duration}</h3>
                              </div>
                              <div>
                                  <p>ROI</p>
                                  <h3>{data.ROI}%</h3>
                              </div>
                              <div>
                                 <Link to="/mini-investment/about-product"><button>Invest</button></Link>
                              </div>
                          </div>
                      </div>
                  </ProductDetails>
                );
              })}
            </ProductsContainer>
          </div>
        </div>
      </DashboardContainer>
    </>
  );
};

export default MiniInvestment;
