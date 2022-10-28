import React from "react";
import "./blog.scss";
import axios from "axios";
const blog = () => {
  // const axios = require("axios");
  // const news = {
  //    "https://climate-change-news.herokuapp.com/news",
  // };

  // axios
  //   .get(https://climate-change-news.herokuapp.com/news[, config])
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__top">
          <h2 className="blog__title">Our Latest Blog</h2>
          <button className="blog__button">See All</button>
        </div>
        <div className="blog__bottom">
          <article className="blog__item">
            <img className="blog__image" src="" alt="img" />
            <p className="blog__image-subtitle">Forest, Crisis</p>
            <p className="blog__item-header">
              The EU needs to hold the financial sector in global deforestation
            </p>
            <p className="blog__item-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer
              gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam
              netus.
            </p>
          </article>
          <article className="blog__item">
            <img className="blog__image" src="" alt="img" />
            <p className="blog__image-subtitle">Forest, Crisis</p>
            <p className="blog__item-header">
              The EU needs to hold the financial sector in global deforestation
            </p>
            <p className="blog__item-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer
              gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam
              netus.
            </p>
          </article>
          <article className="blog__item">
            <img className="blog__image" src="" alt="img" />
            <p className="blog__image-subtitle">Forest, Crisis</p>
            <p className="blog__item-header">
              The EU needs to hold the financial sector in global deforestation
            </p>
            <p className="blog__item-text">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Integer
              gravida vitae ultrices urna et porttitor malesuada. Hendrerit diam
              netus.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default blog;
