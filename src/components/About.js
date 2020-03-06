import React from "react";
import styled from "styled-components";
import cartoon from "../img/grandmaCartoon.jpg";
import { Carousel } from "antd";

const Home = () => {
  return (
    <MyDiv>
      <div className="title">
        <h1>Secret Family Recipes</h1>
        <img src={cartoon} alt="secret family recipe"/>
      </div>
      <h2>
        Anyone can go out and buy a cookbook these days, but I want a place to
        store all my secret family recipes, handed down from generation to
        generation.
      </h2>
      <div className="carouselandtext">
        <h3>
          Handed down from generation to generation. The little cards my grandma
          wrote the recipes on in her beautiful cursive are getting lost or are
          hard to read. I need somewhere secure to keep my recipes with me at
          all times! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos omnis quisquam non. Iste necessitatibus ducimus doloribus
          corporis fugit excepturi dolorem. Architecto unde quas consequatur
          modi, impedit cupiditate ut aspernatur vero?lorem Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptas cumque itaque id odio
          iure, commodi suscipit illum. Rerum qui deserunt inventore, tenetur
          obcaecati, atque dolorum autem illo beatae delectus commodi?Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ea consequatur
          nesciunt, odio obcaecati aut harum voluptate qui, incidunt natus, est
          quis adipisci modi eos voluptatem enim cum ex corrupti illo. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad a fugiat
          harum illo explicabo ut distinctio tempora. Ex doloribus voluptates
          eveniet iure porro velit enim ut, facere incidunt odit. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Dignissimos omnis
          quisquam non. Iste necessitatibus ducimus doloribus corporis fugit
          excepturi dolorem. Architecto unde quas consequatur modi, impedit
          cupiditate ut aspernatur vero?lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptas cumque itaque id odio iure,
          commodi suscipit illum. Rerum qui deserunt inventore, tenetur
          obcaecati, atque dolorum autem illo beatae delectus commodi?Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ea consequatur
          nesciunt, odio obcaecati aut harum voluptate qui, incidunt natus, est
          quis adipisci modi eos voluptatem enim cum ex corrupti illo. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Nisi ad a fugiat
          harum illo explicabo ut distinctio tempora. Ex doloribus voluptates
          eveniet iure porro velit enim ut, facere incidunt odit.
        </h3>
        <Carousel className="carousel" autoplay>
                   <div>
            <img src={dummyData[0].recipe_image} alt="" />
          </div>
          <div>
            <img src={dummyData[1].recipe_image} alt="" />
          </div>
          <div>
            <img src={dummyData[2].recipe_image} alt="" />
          </div>
          <div>
            <img src={dummyData[3].recipe_image} alt="" />
          </div>
          <div>
            <img src={dummyData[4].recipe_image} alt="" />
          </div>
          <div>
            <img src={dummyData[5].recipe_image} alt="" />
          </div>
        </Carousel>
      </div>

      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        omnis quisquam non. Iste necessitatibus ducimus doloribus corporis fugit
        excepturi dolorem. Architecto unde quas consequatur modi, impedit
        cupiditate ut aspernatur vero?lorem Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptas cumque itaque id odio iure,
        commodi suscipit illum. Rerum qui deserunt inventore, tenetur obcaecati,
        atque dolorum autem illo beatae delectus commodi?Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Ea consequatur nesciunt, odio
        obcaecati aut harum voluptate qui, incidunt natus, est quis adipisci
        modi eos voluptatem enim cum ex corrupti illo. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Nisi ad a fugiat harum illo explicabo
        ut distinctio tempora. Ex doloribus voluptates eveniet iure porro velit
        enim ut, facere incidunt odit.
      </h3>

      <footer>
        <p className="footer">Copyright 2020. Secret Family Recipes</p>
      </footer>
    </MyDiv>
  );
};

export default Home;

const MyDiv = styled.div`
  font-family: 'Tangerine', cursive;
margin: 0 auto;
border: 1px, solid, #0088DD;
img{
  width:30vw;
}
.carouselandtext{
  font-size:3rem;
  margin-top:40px;
  display:flex;
  .carousel{
    margin: 0, auto;
    width:32vw;
    align:center;
    .carouselpic{
width:100%;
border-radius:8px;
    }
img{
  display:flex;
  justify-content:center;
margin-left:100px;
height:400px;
  /* width: 400px; */
  border-radius:8px;
}
  }
}
.ant-carousel .slick-slide {
  text-align: center;
  height: auto;
  line-height: 160px;
  /* background: #364d79; */
  overflow: hidden;
}
.ant-carousel .slick-slide h3 {
  color: #fff;
}
h3{
  text-align: center;
  font-size:5vh;
}
h4 { 
  font-size:6vw;
}
.text-container{
  margin:0 auto;
  border:5%;
}
.footer{
  margin: 0 auto;
}

@media(min-width: 768px) {
  .carouselandtext{
    display:flex;
    flex-direction:column-reverse;
  .carousel{
    margin: 0, auto;
    width:100vw;
    align:center;
    .carouselpic{
width:100vw;
border-radius:8px;
align-items:center;
    }
img{
  display:flex;
  justify-content:center;
  margin-left:28vw;
/* margin-left:100px; */
  width: 400px;
  border-radius:8px;
}
  }
}

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
}
`;
const dummyData = [
  {
    recipe_image: "https://i.imgur.com/HW2AIVK.jpg"
  },
  {
    recipe_image:
      "https://www.dessertfortwo.com/wp-content/uploads/2018/01/small-batch-sugar-cookies-recipe.jpg"
  },
  {
    recipe_image:
      "https://www.worldvision.org/wp-content/uploads/2017/07/s160256-4-Traditional_Food-Mongolia-JDouglass_-8-copy-1280x853.jpg"
  },
  {
    recipe_image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0a/9b/3d/cb/yummy-traditional-dish.jpg"
  },
  {
    recipe_image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps957_TH143195C09_04_4b.jpg"
  },
  {
    recipe_image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F1446491&psig=AOvVaw1QyVC44R95QivCRVyyRU7w&ust=1583311187779000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiRybz3_ecCFQAAAAAdAAAAABAD"
  },
  {
    recipe_image: "https://images.app.goo.gl/yXb2xPr5ze2GGbdS8"
  }
];
