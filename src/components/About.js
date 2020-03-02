import React from "react";
import styled from "styled-components";
import cartoon from "../img/grandmaCartoon.jpg"


const Home = () => {
  return (
    <MyDiv>
    <div className="text-container">


    </div>
      <h2>Secret Family Recipes</h2>
      <h3>Anyone can go out and buy a cookbook these days, but I want a place to store all
         my secret family recipes, handed down from generation to generation.</h3>
      <h4>
      , handed down from generation to generation.
       The little cards my grandma wrote the recipes on in her beautiful 
       cursive are getting lost or are hard to read.
        I need somewhere secure to keep my recipes with me at all times!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
         omnis quisquam non. Iste necessitatibus ducimus doloribus corporis 
         fugit excepturi dolorem. Architecto unde quas consequatur modi, 
         impedit cupiditate ut aspernatur vero?lorem  Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas cumque itaque id odio iure, commodi suscipit illum. 
          Rerum qui deserunt inventore, tenetur obcaecati, atque dolorum autem illo beatae 
          delectus commodi?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Ea consequatur nesciunt, odio obcaecati aut harum voluptate qui, incidunt
            natus, est quis adipisci modi eos voluptatem enim cum ex corrupti illo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad a fugiat 
            harum illo explicabo ut distinctio tempora. Ex doloribus voluptates 
            eveniet iure porro velit enim ut, facere incidunt odit.
      </h4>
      <img src={cartoon} alt="secret family recipe"/>
  
     
    

      <h4>
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
         omnis quisquam non. Iste necessitatibus ducimus doloribus corporis 
         fugit excepturi dolorem. Architecto unde quas consequatur modi, 
         impedit cupiditate ut aspernatur vero?lorem  Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas cumque itaque id odio iure, commodi suscipit illum. 
          Rerum qui deserunt inventore, tenetur obcaecati, atque dolorum autem illo beatae 
          delectus commodi?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Ea consequatur nesciunt, odio obcaecati aut harum voluptate qui, incidunt
            natus, est quis adipisci modi eos voluptatem enim cum ex corrupti illo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad a fugiat 
            harum illo explicabo ut distinctio tempora. Ex doloribus voluptates 
            eveniet iure porro velit enim ut, facere incidunt odit.
      </h4>

      <footer>
    
        <p className="footer">Copyright 2020. Secret Family Recipes</p>
      </footer>
 
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

`
