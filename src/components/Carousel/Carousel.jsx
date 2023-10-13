// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideLogo1 from "../../assets/slidelogo/logo1.png";
import SlideLogo2 from "../../assets/slidelogo/logo2.png";
import SlideLogo3 from "../../assets/slidelogo/logo3.png";
import SlideLogo4 from "../../assets/slidelogo/logo4.png";
import SlideLogo5 from "../../assets/slidelogo/logo5.png";
import SlideLogo6 from "../../assets/slidelogo/logo6.png";
import "./CarouselStyle.css";
// import React from "react";
import Slider from "react-slick";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyload: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 20,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],  
  };
  return (
    <>
      <section className=" carousel__section h-[200px]">
        <div className="container">
          <div className="carousel w-full bg-[#ffffff] smallest:mt-8">
            <Slider {...settings}>
              <div className="grid grid-flow-row max-w-[231.333px]  bg-transparent align-top border-[1px] border-solid ">
                <img src={SlideLogo1} alt="" />
              </div>
              <div className="grid grid-flow-row max-w-[231.333px]  bg-transparent align-top border-[1px] border-solid ">
                <img src={SlideLogo2} alt="" />
              </div>
              <div className="grid grid-flow-row max-w-[231.333px]  bg-transparent align-top border-[1px] border-solid ">
                <img src={SlideLogo3} alt="" />
              </div>
              <div className="grid grid-flow-row max-w-[231.333px]  bg-transparent align-top border-[1px] border-solid ">
                <img src={SlideLogo4} alt="" />
              </div>
              <div className="grid grid-flow-row max-w-[231.333px]  bg-transparent align-top border-[1px] border-solid ">
                <img src={SlideLogo5} alt="" />
              </div>
              <div className="grid grid-flow-row max-w-[231.333px]  bg-transparent align-top border-[1px] border-solid ">
                <img src={SlideLogo6} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
