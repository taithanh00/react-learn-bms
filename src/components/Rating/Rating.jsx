// import React from 'react'
import RatingCard from "./RatingCard/RatingCard";
import "./RatingStyle.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Rating = () => {
  useEffect(() => {
    AOS.init(); // Khởi tạo AOS
  }, []);
  return (
    <>
      <div className="container">
        <div
          className="rating__container flex justify-between items-center gap-3 mb-5 smallest:flex smallest:flex-col smallest:w-full"
          data-aos="zoom-out"
          data-aos-duration="800"
          data-aos-once="false"
          data-aos-mirror="true"
        >
          <RatingCard
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            author="MARIA OLIVER"
          />
          <RatingCard
            content="Cras vel pellentesque odio, in vestibulum dolor. In commodo ligula massa, tristique fermentum enim hendrerit faucibus. Etiam facilisis justo sed tortor vehicula mollis. Duis vel vehicula diam."
            author="MARK JUSTIN"
          />
          <RatingCard
            content="Morbi in leo viverra, elementum risus vitae, commodo lorem. Quisque a mollis."
            author="JAMIE STOCK"
          />
        </div>
      </div>
    </>
  );
};

export default Rating;
