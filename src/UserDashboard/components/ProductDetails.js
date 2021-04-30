import React from "react";
import { EachProductDetails } from "../styles/ComponentStyles";
import rice from "../images/eatrich-rice.png"

function ProductDetails() {
  return (
    <EachProductDetails className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="image">
              <div className="product-image" style={{backgroundImage:`url(${rice})`}}></div>
            <h3>Eatrich Rice Trading</h3>

            <div className="info">
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>
                <div className="each-info">
                    <h3>Expected Returns</h3>
                    <p>15% in 6 months </p>
                </div>

            </div>
            <button>Invest</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text">
            <h3>About this opportunity</h3>
            <p>
              Agropartnerships is a simple and secure collaborative platform
              that enables you engage in profitable agribusiness opportunities
              from the comfort of your home. You can invest in Farms, trade in
              commodities and count your profits in no time.</p>
              <p>
                Rice, wheat, and maize are the world’s three leading food crops;
                together they directly supply more than 42% of all calories
                consumed by the entire human population. Rice is the staple food
                of more than half of the world’s population – more than 3.5
                billion people depend on rice for more than 20% of their daily
                calories. The gap between demand and supply in sub-Saharan
                Africa, where rice is grown and eaten in 38 countries, reached
                10 million tons of milled rice in 2008, costing the region an
                estimated $3.6 billion for imports.
              </p>
              <p>
                More than 90% of Nigeria’s rice is produced by resource-poor
                small-scale farmers, while the remaining 10% is produced by
                corporate/commercial farmers. About 95% of the processors are
                small-scale with low-capacity and obsolete mills. Nigeria
                possesses a huge but largely untapped potential for rice
                production. To fill the production gap and export to
                international markets.
              </p>
              <p>
                Over the years, Eatrich has built a relationship with local
                farmers across the country to off-take rice from the finest rice
                farms and farmers, process it efficiently, clean, distone,
                package and then sell to the ready-made Nigerian market.
              </p>
          </div>
        </div>
      </div>
    </EachProductDetails>
  );
}

export default ProductDetails;
