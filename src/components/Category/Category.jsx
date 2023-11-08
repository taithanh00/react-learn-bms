// import React from 'react'
import { Link } from "react-router-dom";
import Category1 from "../../assets/category/category1.jpg";
import Category2 from "../../assets/category/category2.jpg";
import Category3 from "../../assets/category/category3.jpg";
import Category4 from "../../assets/category/category4.jpg";
import "./CategoryStyle.css";
const Category = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="carousel__title grid place-items-center w-full mb-12">
            <p className="font-normal text-[12px] leading-[15px] tracking-[0.2rem] text-[#636363] mb-5">
              Shop by Category
            </p>
            <h4 className="font-bold text-[45px] leading-[45px]">
              {" "}
              Shop by category{" "}
            </h4>
            {/* <span className="w-[50px] bg-red-400">hi</span> */}
          </div>
          <div className="category w-full bg-[#ffffff] h-auto sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4 2xl:grid 2xl:grid-cols-4 gap-[21px] sm:pb-7">
            <div className=" bg-[#f1f3f2] lg:min-w-[321px] lg:min-h-[351px] justify-center items-center text-center sm:pb-7 ">
              <Link to="/bedroom">
                <img src={Category1} alt="" />
                <span className="span__text block bg-white mx-3 lg:min-w-[294px] lg:min-h-[54px] smallest:mb-3  ">
                  <h6 className="font-bold text-[16px] leading-[24px] text-[#000000] pt-2">
                    BEDROOM
                  </h6>
                  <p className="font-normal text-[10px] leading-[15px] text-[#000000]">
                    6 PRODUCTS
                  </p>
                </span>
              </Link>
            </div>
            <div className=" bg-[#f1f3f2] lg:min-w-[321px] lg:min-h-[351px] justify-center items-center text-center sm:pb-7">
              <Link to="/decor">
                <img src={Category2} alt="" />
                <span className="block h-auto bg-white mx-3 lg:min-w-[294px] lg:min-h-[54px] smallest:mb-3 ">
                  <h6 className="font-bold text-[16px] leading-[24px] text-[#000000] pt-2">
                    DECOR
                  </h6>
                  <p className="font-normal text-[10px] leading-[15px] text-[#000000]">
                    9 PRODUCTS
                  </p>
                </span>
              </Link>
            </div>
            <div className=" bg-[#f1f3f2] lg:min-w-[321px] lg:min-h-[351px] justify-center items-center text-center sm:pb-7">
              <Link to="/livingroom">
                <img src={Category3} alt="" />
                <span className="block h-auto bg-white mx-3 lg:min-w-[294px] lg:min-h-[54px] smallest:mb-3 ">
                  <h6 className="font-bold text-[16px] leading-[24px] text-[#000000] pt-2">
                    LIVING ROOM
                  </h6>
                  <p className="font-normal text-[10px] leading-[15px] text-[#000000]">
                    6 PRODUCTS
                  </p>
                </span>
              </Link>
            </div>
            <div className=" bg-[#f1f3f2] lg:min-w-[321px] lg:min-h-[351px] justify-center items-center text-center sm:pb-7">
              <Link to="/office">
                <img src={Category4} alt="" />
                <span className="block h-auto bg-white mx-3 lg:min-w-[294px] lg:min-h-[54px] smallest:mb-3 ">
                  <h6 className="font-bold text-[16px] leading-[24px] text-[#000000] pt-2">
                    OFFICE
                  </h6>
                  <p className="font-normal text-[10px] leading-[15px] text-[#000000]">
                    11 PRODUCTS
                  </p>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
