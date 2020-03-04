import React from "react";
import styled from "styled-components";
import Recipes from "./Recipes";
import SearchForm from "./SearchForm"
// import { Context } from "../context/Context";
//, { useContext } 

const Home = () => {
  
  return (
    <MyDiv>
      <br/>
      <SearchForm/>
      <Recipes />
    </MyDiv>
  );
};

export default Home;

const MyDiv = styled.div`
margin: 0 auto;
border: 1px, solid, #0088DD;
img{
  width:600px;
}


h3{
  text-align: center;
  font-size:4vh;
}

h4 {
  font-weight: bolder;
  font-size:4vw;
}
.text-container{
  margin:0 auto;
  border:5%;
}
.footer{
  margin: 0 auto;
}

@media(min-width: 768px) {

    margin:0 auto;
  
  h1 {
  color:#001a33;
  margin-top: 18px;
  text-align: center;
  font-size:4rem;
}
h2{text-align: center;
  font-size:3rem;
}
h3{
  text-align: center;
  font-size:2rem;
}

h4 {
  font-weight: bolder;
  font-size:1vw;
}

`;
