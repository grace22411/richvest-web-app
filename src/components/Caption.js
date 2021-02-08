import React from "react";
import styled from "styled-components";
import image from "../images/news-1.jpeg";
import SearchNews from "./SearchNews";

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${image});
  background-size: cover;
  @media only screen and (max-width: 320px) {
    height: 400px;
  }
  @media only screen and (min-width: 321px) and (max-width: 540px) {
  }
`;
const Header = styled.div`
  width: 100%;
  height: 80px;
  //border:1px solid red;
  padding: 18px 100px;
  h1 {
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    span {
      background-color: #fff;
      color: #000;
      font-weight: 900;
      border-radius: 5px;
      font-size: 25px;
      padding: 4px;
    }
  }
  @media only screen and (max-width: 320px) {
    padding: 18px 20px;
    h1 {
      text-align: center;
    }
  }
  @media only screen and (min-width: 321px) and (max-width: 540px) {
    padding: 18px 20px;
    h1 {
      text-align: center;
    }
  }
`;
const Text = styled.div`
  margin: auto;
  text-align: center;
  color: #fff;
  padding-top: 60px;
  h1 {
    font-weight: 800;
    font-size: 55px;
    margin: 0;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
  }
`;

function Caption() {
  return (
    <Container>
      <Header>
        <h1>
          {" "}
          <span>GGG</span> News
        </h1>
      </Header>
      <Text>
        <h1>Welcome!</h1>
        <p>We Offer You With The Recent News</p>
        <SearchNews />
      </Text>
    </Container>
  );
}

export default Caption;
