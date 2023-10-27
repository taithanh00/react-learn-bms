// import React from "react";
import { useParams } from "react-router-dom";
import { ProductsList } from "../../../assets/data/ProductList";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const { productId } = useParams();
  const thisProduct = ProductsList.find((prod) => prod.id === productId);
  return (
    <>
      {/* <div>
        <h1>{thisProduct.name}</h1>
        <p>Price: ${thisProduct.price}</p>
        <p>{thisProduct.description}</p>
      </div> */}
      <section>
        <div className="container">
          <div className="product__detail__container flex flex-row flex-nowrap justify-between  w-full
          smallest:flex smallest:flex-col smallest:w-full smallest:flex-nowrap">
            <div className="product__detail__container__left w-1/2 flex flex-col gap-y-4
            smallest:w-full smallest:gap-y-1">
              <div className="product__detail__container__left__top w-full h-auto relative">
                <div className="left__button relative top-14 left-3 w-[46px] h-[32px] rounded-2xl bg-white ">
                  <button className="font-normal text-[13px] leading-[15px] text-[#636363] text-center mx-auto grid place-content-center place-items-center">
                    <p className="pt-2">Sale!</p>
                  </button>
                </div>
                <img src={thisProduct.ProductimgBlack} alt="" className="object-cover w-full" />
              </div>
              <div className="product__detail__container__left__bottom flex flex-row gap-1 justify-between items-center w-full h-auto">
                <div className="flex items-center">
                  <img src={thisProduct.ProductimgBrown} alt="" className="object-cover lg:w-[340px] lg:h-[383px] lg:min-w-fit" />
                </div>
                <div className="flex items-center">
                  <img src={thisProduct.ProductimgYellow} alt="" className="object-cover lg:w-[340px] lg:h-[383px] lg:min-w-fit" />
                </div>
              </div>
            </div>
            <div className="product__detail__container__right w-1/2 flex flex-col mt-7">
              <div className="product__detail__container__righ__first pl-10 flex flex-col gap-y-5">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-normal text-[14px] leading-[24px] text-[#A5A5A5]">Home / Bedroom / {thisProduct.name}</p>
                  <div className="flex flex-row gap-x-1 w-[70px] h-[29px]">
                    <div className="h-full w-[27px] border-[1px] flex justify-center items-center border-black">
                      <Link className="flex justify-center items-center">
                        <FontAwesomeIcon icon={faAngleLeft} className="w-1/2 h-full border-1 border-solid" />
                      </Link>
                    </div>
                    <div className="h-full w-[27px] border-[1px] grid place-content-center place-items-center border-black hover:bg-[#219a83]">
                      <Link className="flex justify-center items-center">
                        <FontAwesomeIcon icon={faAngleRight} className="w-1/2 h-full border-1 border-solid " />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-[15px] leading-[15px] text-[#A5A5A5]">Bedroom</p>
                <p className="font-normal text-[25px] leading-[30px] ">{thisProduct.name}</p>
                <div className="flex flex-col gap-y-3">
                  <p className="font-bold text-[23px] leading-[24px] text-[#C19A83]">$85.00 – $99.00 <span className="font-normal text-[15px] leading-[24px] text-[#636363]">& Free Shipping</span></p>
                  <p className="font-normal text-[15px] leading-[24px] text-[#636363] mr-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vestibulum erat leo, id pulvinar lorem maximus sit amet.
                    Quisque mauris sem, sagittis sed blandit eu, varius a tortor.
                    Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper metus imperdiet.
                    Vivamus id justo dui.</p>
                  <p className="font-normal text-[15px] leading-[24px] text-[#636363] mr-9">Donec faucibus gravida vulputate. Sed quis porttitor libero.
                    Aenean posuere imperdiet elit, in aliquet lorem vulputate sed.
                    Integer et lacinia tellus.</p>
                </div>
                <div className="flex flex-row items-start justify-start gap-x-3">
                  <Tippy
                    placement="top"
                    content="Black"
                    className="text-[12px] font-normal leading-[15px]"
                  >
                    <button
                      href=""
                      className="min-w-[23px] min-h-[23px] w-[20px] h-[20px] bg-[#000000] rounded-full border-[3px] border-solid border-white"

                    ></button>
                  </Tippy>
                  <Tippy
                    placement="top"
                    content="Brown"
                    className="text-[12px] font-normal leading-[15px]"
                  >
                    <button
                      href=""
                      className="min- w-[23px] min-h-[23px] bg-[#8F6453] rounded-full border-[3px] border-solid border-white"

                    ></button>
                  </Tippy>
                  <Tippy
                    className="text-[12px] leading-[15px] font-normal"
                    placement="top"
                    content="Yellow"
                  >
                    <button
                      href=""
                      className="min-w-[23px] min-h-[23px] bg-[#DABCA2] rounded-full border-[3px] border-solid border-white"

                    ></button>
                  </Tippy>
                </div>
                <hr className="w-full mt-[2.25rem]" />
              </div>
              <div className="product__detail__container__righ__second"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
