import React from "react";
import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Content = styled.div`
    text-align:center;
    h3{
        margin-top:20px;
        font-size:15px;
        color:#32427D;
        font-weight:600;
    }
    p{
        font-size:11px;
    }
    svg{
        margin:0 10px;
    }
`

function ReferContent() {
  return (
    <Content>
      <h3>
        Earn as much as <span>2.5%</span> on investment per refereral
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris{" "}
      </p>
      <h3>Share</h3>
      <FaFacebook style={{ color: "#2a5297" }} />
      <FaTwitter
        style={{
          backgroundColor: "#1ca1f3",
          color: "#fff",
          borderRadius: "100%",
          padding: "3px",
        }}
      />
      <FaWhatsapp
        style={{
          backgroundColor: "#4aa64a",
          color: "#fff",
          borderRadius: "100%",
          padding: "3px",
        }}
      />
    </Content>
  );
}

export default ReferContent;
