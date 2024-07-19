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
  const [a, setA] = useState(false);
  // useEffect(() => {
  //   setA(!a);
  // }, [a])
  console.log(a);
  return (
    <>
      <div className="my-4">
        <h1 className="text-center text-xl md:text-4xl text-black">Give your valuable Review</h1>
      </div>
      <div
        data-aos="fade-up"
        className="h-96 p-2 w-11/12 m-auto md:m-5 overflow-scroll border-1 bg-red-100 border-gray-200 rounded-md"
      >
        {
          a ===false ? (
            <div class="sk-ww-google-reviews bg-blue-300"
              data-embed-id="25436027"></div>
          ) : null
        }
        {/* <div className="slide-container w-4/5 m-auto text-center"> */}
        {/* <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
                }}
                >
                </div>
                </div>
          ))}
        </Slide> */}
        {/* </div> */}
      </div>
    </>
  );
};
export default GoogleReview;
