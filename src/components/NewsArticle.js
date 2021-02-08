import React from "react";
import styled from "styled-components";

const EachArticle = styled.div`
a{
    color:#000000;
}
a:hover{
    text-decoration:none;
    color:#ff0044
}
  h1 {
    font-size: 18px;
    margin-top:15px;
    font-weight:700;
  }
  p {
    font-size: 13px;
    color: #b0b0b0;
  }
`;
const Text = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  padding: 20px;
  border-radius:10px;
  height:450px;
  position:relative;
  margin-top: 30px;
  .image {
    width: 100%;
    height: 150px;
    background-size: cover;
  }
`;
const Bottom = styled.div`
    bottom:0;
    position:absolute;
    width:90%;
    border-top:1px solid #eee;
    padding-top:10px;
    display:flex;
    p{
        font-size:12px;
        span{
            color:#000000;
        }
    }
    .date{
        margin-left:auto;
    }
`

export default function NewsArticle({ data }) {
  return (
   
        <EachArticle className="col-md-4">
              <a href={data.url}>
                <Text>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${data.urlToImage})` }}
                  ></div>

                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <Bottom>
                      <p>Author: <span>{data.author}</span></p>
                      <p className="date">{data.publishedAt}</p>
                  </Bottom>
                </Text>
                </a>
              </EachArticle>
  
  );
}
