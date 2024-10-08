import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import bannerwebfinal from "../assets/bannerwebfinal.png";
import bannerweb01final from "../assets/bannerweb01final.png";
import vandanabgphoto from "../assets/vandanabgphoto.jpg";
import slide02 from "../assets/slide02.jpg";
import banner03final from "../assets/banner03final.png";
import banner05 from "../assets/banner05.png";
import slide04 from "../assets/slide04.jpg";
import slide05 from "../assets/slide05.jpg";
import "../Style/Style.css";

const Head = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={bannerweb01final} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bannerwebfinal} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={banner03final} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slide04} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={slide05} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Head;
