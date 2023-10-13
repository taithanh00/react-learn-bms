import React from "react";
// import "./Banner_Style.css";
import "./Banner_Style.css";
import BannerImg from "../../assets/category/bannerimg.jpg";
const Banner = () => {
  return (
    <>
      <section className="flex flex-col gap-0 relative h-fit ">
        <img
          src={BannerImg}
          alt=""
          className="mx-0 relative banner__container object-contain 
          smallest:h-[550px] smallest:w-auto smallest:object-cover 
          md:h-[700px] md:w-auto md:object-cover
          xl:h-[830px] xl:w-auto xl:object-cover"
        />
        <div className="container">
          <div
            className="banner__text relative smallest:relative smallest:top-[-550px]
          md:top-[-670px]"
          >
            <p
              className="font-normal text-[12px] leading-[15px] tracking-[0.2em] 
            smallest:font-normal smallest:text-[11px] smallest:leading-[14px]
            md:font-normal md:text-[0.8rem] md:leading-[1.25em] md:tracking-[2px]"
            >
              Black Friday in July
            </p>
            <h1
              className=" pt-5 text-[58px] font-bold leading-[65px] tracking-wider
            smallest:font-bold smallest:text-[30px] smallest:leading-[30px]
            md:leading-[1em] md:text-[40px] md:font-bold"
            >
              Up to 50% off
            </h1>
            <h6 className="pt-5 font-normal text-[22px] leading-[26px] smallest:font-normal smallest:text-[20px] smallest:leading-[24px]">
              Hundreds of styles available
            </h6>
            <button className="banner__button mt-5 font-normal hover:bg-[#c19a83] w-[109px] h-[42px] bg-black text-white relative inline-block overflow-hidden">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;

// import Banner_Img from "../../assets/banner.png";
// // import React from "react";
// import "./Banner_Style.css";
// const Banner = () => {
//   return (
//     <>
//       <section className="bg-[#BBDFD1]">
//         <div className="container">
//           {/* <div className="parallax"></div> */}
//           <div className="flex flex-col lg:flex-row items-center justify-between w-full h-fit text-left">
//             <div className="left bg-[#BBDFD1] w-1/3 pl-20 pb-28 sm:pl-0 sm:pb-0 md:pl-0 md:pb-0">
//               <p className="font-normal text-[12px] leading-[15px] tracking-[0.2em]">
//                 {" "}
//                 Black Friday in July{" "}
//               </p>
//               <h1 className=" pt-5 text-[58px] font-bold leading-[65px] tracking-wider">
//                 Up to 50% off
//               </h1>
//               <h6 className="pt-5 font-normal text-[22px] leading-[26px]">
//                 {" "}
//                 Hundreds of styles available
//               </h6>
//               <button className="banner__button mt-5 font-normal hover:bg-[#c19a83] w-[109px] h-[42px] bg-black text-white relative inline-block overflow-hidden">
//                 SHOP NOW
//               </button>
//             </div>
//             <div className="right bg-[#BBDFD1] w-2/3">
//               <img src={Banner_Img} alt="" className="banner-img" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner;
