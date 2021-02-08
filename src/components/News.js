import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";

import styled from "styled-components";
import NewsArticle from "./NewsArticle";

const Contain = styled.div`
  
`;


export default function News() {
  const {data} = useContext(NewsContext);
  //console.log(data)
  return (
    <Contain className="container">
         <h3 style={{marginTop:"20px"}}>Recent News</h3>
      <div className="row">
      {data ? data.articles.map((news) => (
                <NewsArticle data={news} key={news.url} />
            )) : "Loading..."}
      </div>
      
    </Contain>
  );
}
