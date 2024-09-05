import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "aos/dist/aos.css";
import "../Style/Style.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://i.postimg.cc/5yY2VhNg/VANDANAREVIEW.png",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 4",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 5",
  },
];

const GoogleReview = () => {
  return (
    <div className="body-font md:bg-[url(https://i.postimg.cc/zDtyZKRC/bg-Google-Review.jpg)] bg-[url(https://i.postimg.cc/VLDN1zt3/bg-Google-Review.jpg)] bg-hero g-no-repeat bg-cover bg-center bg-fixed h-4/5 py-3 ">
      {/* <div className="my-4">
        <h1 className="text-center text-xl md:text-4xl text-black">Give your valuable Review</h1>
        </div>
        <div
        data-aos="fade-up"
        className="h-96 p-2 w-11/12 m-auto md:m-5 overflow-scroll border-1 bg-red-100 border-gray-200 rounded-md"
        > */}
      <div className="elfsight-app-7f209c6b-645c-45d0-83e8-5dc4afa3d79d" data-elfsight-app-lazy></div>

      {/* </div> */}
    </div>
  );
};
export default GoogleReview;

{/* <div className="sk-ww-google-reviews bg-blue-300"
  data-embed-id="25436027"></div> */}