import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "aos/dist/aos.css";
import "../Style/Style.css";

const GoogleReview = () => {
  return (
    <div className="w-full md:px-32 py-3 bg-red-50 mx-auto">
      <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-ad2e5e08-1de5-4fde-8a64-b8282d48abb7" data-elfsight-app-lazy></div>
      </div>
      <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-600351c2-8ab0-4b23-8acf-fd491a40022f" data-elfsight-app-lazy></div>
      </div>

      <div className="my-8">
        <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div class="elfsight-app-28ba9dd6-7b92-4ca4-a0f0-1ab3553f6130" data-elfsight-app-lazy></div>
      </div>
    </div>
  );
};
export default GoogleReview;

{/* <div className="sk-ww-google-reviews bg-blue-300"
  data-embed-id="25436027"></div> */}