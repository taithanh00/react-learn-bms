// import React from "react";
import { useParams } from "react-router-dom";
import { ProductsList } from "../../../assets/data/ProductList";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import "./ProductDetail.css";
import visaIcon from "../../../assets/productdetail/visa.png";
import CardIcon from "../../../assets/productdetail/card.png";
import AmericanExpressIcon from "../../../assets/productdetail/american-express.png";
import DiscoverIcon from "../../../assets/productdetail/discover.png";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import ProductDetailCard from "./ProductDetailCard";
import { useState } from "react";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DescPng from "../../../assets/productdetail/descpng.jpg";
import DescPng2 from "../../../assets/productdetail/desc2png.jpg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import ProductDetailCard from "./ProductDetailCard";
import ProductName8 from "../../../assets/shopall/product-08-black.png";
import ProductName12 from "../../../assets/shopall/product-12-black.png";
import ProductName15 from "../../../assets/shopall/product-15-black.png";
import ProductName10 from "../../../assets/shopall/product-10-black.png";
const ProductDetail = () => {
  const { productId } = useParams();
  const thisProduct = ProductsList.find((prod) => prod.id === productId);
  const [countTotal, setCountTotal] = useState(1);

  const checkCountTotalMinus = () => {
    if (countTotal > 0) {
      setCountTotal(countTotal - 1);
    }
  };

  const checkCountTotalPlus = () => {
    setCountTotal(countTotal + 1);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <section>
        <div className="container">
          <div
            className="product__detail__container flex flex-row flex-nowrap justify-between  w-full
          smallest:flex smallest:flex-col smallest:w-full smallest:flex-nowrap"
          >
            <div
              className="product__detail__container__left w-1/2 flex flex-col gap-y-4
            smallest:w-full smallest:gap-y-1"
            >
              <div className="product__detail__container__left__top w-full h-auto relative">
                <div className="left__button relative top-14 left-3 w-[46px] h-[32px] rounded-2xl bg-white ">
                  <button className="font-normal text-[13px] leading-[15px] text-[#636363] text-center mx-auto grid place-content-center place-items-center">
                    <p className="pt-2">Sale!</p>
                  </button>
                </div>
                <img
                  src={thisProduct.ProductimgBlack}
                  alt=""
                  className="object-cover w-full h-[790px] smallest:h-auto"
                />
              </div>
              <div className="product__detail__container__left__bottom flex flex-row gap-1 justify-between items-center w-full h-auto">
                <div className="flex items-center">
                  <img
                    src={thisProduct.ProductimgBrown}
                    alt=""
                    className="object-cover lg:w-[340px] lg:h-[383px] lg:min-w-fit"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    src={thisProduct.ProductimgYellow}
                    alt=""
                    className="object-cover lg:w-[340px] lg:h-[383px] lg:min-w-fit"
                  />
                </div>
              </div>
            </div>
            <div className="product__detail__container__right w-1/2 flex flex-col mt-7">
              <div
                className="product__detail__container__right__first pl-10 flex flex-col gap-y-5 
              smallest:w-screen smallest:pl-0"
              >
                <div className="flex flex-row items-center justify-between">
                  <p className="font-normal text-[14px] leading-[24px] text-[#A5A5A5]">
                    Home / Bedroom / {thisProduct.name}
                  </p>
                  <div className="flex flex-row gap-x-1 w-[70px] h-[29px] smallest:mr-7">
                    <div className="h-full w-[27px] border-[1px] flex justify-center items-center border-black">
                      <Link className="flex justify-center items-center">
                        <FontAwesomeIcon
                          icon={faAngleLeft}
                          className="w-1/2 h-full border-1 border-solid"
                        />
                      </Link>
                    </div>
                    <div className="product__detail__hovering h-full w-[27px] border-[1px] grid place-content-center place-items-center border-black">
                      <Link className="flex justify-center items-center">
                        <FontAwesomeIcon
                          icon={faAngleRight}
                          className="w-1/2 h-full border-1 border-solid "
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="font-normal text-[15px] leading-[15px] text-[#A5A5A5]">
                  Bedroom
                </p>
                <p className="font-normal text-[25px] leading-[30px] ">
                  {thisProduct.name}
                </p>
                <div className="flex flex-col gap-y-3">
                  <p className="font-bold text-[23px] leading-[24px] text-[#C19A83]">
                    $85.00 – $99.00{" "}
                    <span className="font-normal text-[15px] leading-[24px] text-[#636363]">
                      & Free Shipping
                    </span>
                  </p>
                  <p className="font-normal text-[15px] leading-[24px] text-[#636363] mr-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin vestibulum erat leo, id pulvinar lorem maximus sit
                    amet. Quisque mauris sem, sagittis sed blandit eu, varius a
                    tortor. Quisque aliquam ligula sed quam pulvinar, vitae
                    ullamcorper metus imperdiet. Vivamus id justo dui.
                  </p>
                  <p className="font-normal text-[15px] leading-[24px] text-[#636363] mr-9">
                    Donec faucibus gravida vulputate. Sed quis porttitor libero.
                    Aenean posuere imperdiet elit, in aliquet lorem vulputate
                    sed. Integer et lacinia tellus.
                  </p>
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
                <hr className="w-full mt-[1.75rem]" />
              </div>
              <div
                className="product__detail__container__right__second pl-10 flex flex-row justify-start items-start mt-3
              smallest:w-screen smallest:pl-0"
              >
                <div
                  className="product__detail__hovering w-[37px] h-[33px] bg-white text-black 
                grid place-content-center place-items-center border-[1px] border-solid border-[#00000012] cursor-pointer"
                  onClick={checkCountTotalMinus}
                >
                  <button>
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="2xs"
                      style={{ color: "#666666" }}
                    />
                  </button>
                </div>
                <div className="w-[37px] h-[33px] bg-white text-black grid place-content-center place-items-center border-[1px] border-solid border-[#00000012]">
                  <p className="font-normal text-[15px] leading-[24px] text-[#666666]">
                    {countTotal}
                  </p>
                </div>
                <div
                  className="product__detail__hovering w-[37px] h-[33px] bg-white text-black 
                grid place-content-center place-items-center border-[1px] border-solid border-[#00000012] cursor-pointer"
                  onClick={checkCountTotalPlus}
                >
                  <button>
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="2xs"
                      style={{ color: "#666666" }}
                    />
                  </button>
                </div>
                <button className="product__detail__hovering w-[115px] h-[35px] bg-[#636363] ml-5 text-white font-normal text-[15px] leading-[15px]">
                  ADD TO CART
                </button>
              </div>
              <div className="product__detail__container__right__third pl-10 flex flex-row justify-start items-start mt-3 gap-x-5">
                <p className="font-normal text-[14px] leading-[24px] text-[#636363]">
                  SKU: N/A
                </p>
                <p className="font-normal text-[14px] leading-[24px] text-[#666666]">
                  Category:{" "}
                  <span className="font-normal text-[14px] leading-[24px] text-[#C19A83]">
                    Bedroom
                  </span>
                </p>
              </div>
              <div className="product__detail__container__right__fourth pl-10 smallest:w-screen smallest:pl-0 smallest:pr-5">
                <fieldset className="h-[100px] w-full border-[1px] border-solid border-[var(#666666)] text-center">
                  <legend className="font-semibold text-[15px] leading-[24px] text-[#666666]">
                    Guaranteed Safe Checkout
                  </legend>
                  <ul className="product__detail__ul flex flex-row justify-center items-center relative top-[50%] left-[50%] gap-x-5">
                    <li>
                      <Link>
                        <img
                          src={visaIcon}
                          alt=""
                          className="w-[47px] h-[30px] object-cover"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          src={CardIcon}
                          alt=""
                          className="w-[47px] h-[30px] object-cover"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          src={AmericanExpressIcon}
                          alt=""
                          className="w-[47px] h-[30px] object-cover"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          src={DiscoverIcon}
                          alt=""
                          className="w-[47px] h-[30px] object-cover"
                        />
                      </Link>
                    </li>
                  </ul>
                </fieldset>
              </div>
              <div
                className="product__detail__container__right__fifth pl-10 flex flex-col items-start justify-start mt-4 gap-y-3
              smallest:w-screen"
              >
                <p className="font-semibold text-[15px] leading-[24px] text-[#636363]">
                  Free shipping on orders over $50!
                </p>
                <ul className="product__detail__ul__2">
                  <li className="font-normal text-[15px] leading-[24px] text-[#636363]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size="2xs"
                      style={{ color: "#666666" }}
                      className="mr-2"
                    />
                    No-Risk Money Back Guarantee!
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#636363]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size="2xs"
                      style={{ color: "#666666" }}
                      className="mr-2"
                    />
                    No Hassle Refunds
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#636363]">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      size="2xs"
                      style={{ color: "#666666" }}
                      className="mr-2"
                    />
                    Secure Payments
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="product__detail__tab w-full flex flex-col mt-20 h-fit clear-both 
          pt-[1em] border-[1px] border-solid"
            onClick={toggleAccordion}
          >
            <div className="product__detail__tab__first flex justify-between px-5">
              <p className="font-bold text-[17px] leading-[18px] text-black hover:text-[#c19a83] focus:text-[#c19a83]">
                Description
              </p>
              <div
                className={` ${
                  isOpen && " text-white border-none"
                } w-7 h-7 lg:w-8 lg:h-8  rounded flex items-center justify-center mr-5 smallest:mr-3  `}
              >
                {isOpen ? (
                  <FontAwesomeIcon
                    icon={faMinus}
                    size="1xl"
                    style={{ color: "#c19a83" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="1xl"
                    style={{ color: "#c19a83" }}
                  />
                )}
              </div>
            </div>
            {isOpen && (
              <div
                className="description__content w-full mt-5 border-[var(#c19a83)] 
              border-[1px] border-solid border-t-0 border-l-0 border-r-0 px-5 
              "
              >
                <div className="flex justify-between items-center">
                  <div className="w-1/2 flex gap-y-5 flex-col">
                    <p className="font-bold text-[25px] leading-[28px] text-black ml-6">
                      A few words about the <br /> product
                    </p>
                    <hr className="bg-[#C19A83] w-[51px] h-[2px]" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-y-3 justify-center">
                    <p className="text-left font-normal text-[16px] leading-[19px] text-[#000000]">
                      Aenean pretium, sem vitae gravida tincidunt, justo diam
                      tempus mauris.
                    </p>
                    <p className="text-[15px] leading-[24px] font-normal text-[#636363] text-left lg:mr-[7.5em] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum erat leo, id pulvinar lorem maximus sit
                      amet. Quisque mauris sem, sagittis sed blandit eu, varius
                      a tortor. Quisque aliquam ligula sed quam pulvinar, vitae
                      ullamcorper metus imperdiet.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/2">
                    <div
                      className="w-[655px] h-[390px] bg-blue-300 description__content__color__var relative left-1 z-20
                    grid place-content-center place-items-center"
                    >
                      <div className="flex flex-col justify-center items-start w-[449px] h-[300px] relative top-0 right-[100px] gap-y-3">
                        <p className="font-bold text-[25px] leading-[28px] text-[#000000] mx-auto block">
                          Features
                        </p>
                        <p className="text-center font-normal text-[15px] leading-[24px] text-[#636363]">
                          Ut at ante diam. Vestibulum tincidunt lacus quis odio
                          iaculis, nec iaculis ipsum hendrerit. Curabitur nec
                          fringilla sem. Nullam at diam et ligula tincidunt
                          luctus. Ut fringilla vitae orci eget suscipit. Etiam
                          ultricies justo ac feugiat dignissim. Suspendisse in
                          ultrices massa.
                        </p>
                        <ul className="flex items-start flex-col justify-start">
                          <li className="font-normal text-[15px] leading-[28px] text-[#c19a83] hover:text-black">
                            <FontAwesomeIcon
                              icon={faCheck}
                              style={{ color: "#c19a83" }}
                              className="mr-3"
                            />
                            Etiam eu tortor tempor, malesuada
                          </li>
                          <li className="font-normal text-[15px] leading-[28px] text-[#c19a83] hover:text-black">
                            <FontAwesomeIcon
                              icon={faCheck}
                              style={{ color: "#c19a83" }}
                              className="mr-3"
                            />
                            Nunc vitae erat sit amet neque varius consequat
                          </li>
                          <li className="font-normal text-[15px] leading-[28px] text-[#c19a83] hover:text-black">
                            <FontAwesomeIcon
                              icon={faCheck}
                              style={{ color: "#c19a83" }}
                              className="mr-3"
                            />
                            Lorem ipsum dolor sit amet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start items-start mt-10">
                    <img
                      src={DescPng}
                      alt=""
                      className="w-fit object-cover mx-0 relative right-10 z-10 "
                    />
                  </div>
                </div>
                <div className="flex justify-between h-[600px] mb-10">
                  <div className="w-1/2 h-full">
                    <img
                      src={DescPng2}
                      alt=""
                      className="w-[640px] h-[600px] m-0 object-cover"
                    />
                  </div>
                  <div className="product__detail__care__instrutions w-1/2 grid place-content-center place-items-center bg-[#F1F2F2] relative left-[-94px] z-[-1] ">
                    <div className="flex justify-start items-start gap-y-5 w-[424px] h-[400px] flex-col">
                      <div className="w-full text-left mt-10">
                        <p className="font-bold text-[25px] leading-[28px] text-[#000000]">
                          Care <br /> Instructions
                        </p>
                      </div>
                      <hr className="bg-[#C19A83] w-[51px] h-[2px]" />
                      <ul>
                        <li className="font-normal text-[15px] leading-[28px] text-[#000000] hover:text-[#c19a83]">
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "#000000" }}
                            className="mr-3"
                          />
                          Etiam eu tortor tempor, malesuada
                        </li>
                        <li className="font-normal text-[15px] leading-[28px] text-[#000000] hover:text-[#c19a83]">
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "#000000" }}
                            className="mr-3"
                          />
                          Nunc vitae erat sit amet neque varius consequat
                        </li>
                        <li className="font-normal text-[15px] leading-[28px] text-[#000000] hover:text-[#c19a83]">
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "#000000" }}
                            className="mr-3"
                          />
                          Vivamus lobortis posuere ante
                        </li>
                        <li className="font-normal text-[15px] leading-[28px] text-[#000000] hover:text-[#c19a83]">
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "#000000" }}
                            className="mr-3"
                          />
                          Morbi nisi diam, cursus non ultricies non
                        </li>
                        <li className="font-normal text-[15px] leading-[28px] text-[#000000] hover:text-[#c19a83]">
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ color: "#000000" }}
                            className="mr-3"
                          />
                          Lorem ipsum dolor sit amet
                        </li>
                      </ul>
                      <p className="font-bold text-[15px] leading-[28px] text-[#000000]">
                        NOTE:
                        <span className="font-normal text-[15px] leading-[28px] text-[#c19a83] ml-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Ut elit tellus, luctus nec ullamcorper mattis,
                          pulvinar dapibus leo.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-full mb-10">
                  <div className="w-[640px] flex justify-between items-start">
                    <div className="w-1/3 flex justify-start items-start">
                      <p className="font-bold text-[25px] leading-[28px] text-[#000000]">
                        Warranty:
                      </p>
                    </div>
                    <div className="text-center w-2/3 flex flex-col gap-y-3">
                      <p className="font-normal text-[16px] leading-[19px] text-[#000000]">
                        In ex nisi, viverra in condimentum in, volutpat vel quam
                        maximus
                      </p>
                      <p className="font-normal text-[15px] leading-[24px] text-[#636363] mx=3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vestibulum erat leo, id pulvinar lorem maximus sit
                        amet. Quisque mauris sem, sagittis sed blandit eu.
                      </p>
                    </div>
                  </div>
                  <div className="w-1/2 grid place-content-start place-items-center">
                    <ul className="w-[545px] min-h-[200px] flex gap-y-5 flex-col ml-10">
                      <li
                        className="font-medium text-[15px] leading-[24px] text-[#c19a83] hover:text-[#000000] 
                      border-b-[1px] border-solid border-b-[#636363] pb-2"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#C19A83" }}
                          className="mr-3 transition ease-in-out delay-75 hover:text-[#000000]"
                        />
                        Etiam eu tortor tempor, malesuada
                      </li>
                      <li
                        className="font-medium text-[15px] leading-[24px] text-[#c19a83] hover:text-[#000000] 
                      border-b-[1px] border-solid border-b-[#636363] pb-2"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#C19A83" }}
                          className="mr-3 transition ease-in-out delay-75 hover:text-[#000000]"
                        />
                        Nunc vitae erat sit amet neque varius sit
                      </li>
                      <li
                        className="font-medium text-[15px] leading-[24px] text-[#c19a83] hover:text-[#000000] 
                      border-b-[1px] border-solid border-b-[#636363] pb-2"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#C19A83" }}
                          className="mr-3 transition ease-in-out delay-75 hover:text-[#000000]"
                        />
                        Phasellus ut orci sit amet nibh gravida sem
                      </li>
                      <li
                        className=" font-medium text-[15px] leading-[24px] text-[#c19a83] hover:text-[#000000] 
                      border-b-[1px] border-solid border-b-[#636363] pb-2"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#C19A83" }}
                          className="mr-3 transition ease-in-out delay-75 hover:text-[#000000]"
                        />
                        Fusce convallis eget enim nec placera
                      </li>
                      <li
                        className="font-medium text-[15px] leading-[24px] text-[#c19a83] hover:text-[#000000] 
                      border-b-[1px] border-solid border-b-[#636363] pb-2"
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#C19A83" }}
                          className="mr-3 transition ease-in-out delay-75 hover:text-[#000000]"
                        />
                        Vivamus est urna, pellentesque eu luctus
                      </li>
                      <li
                        className="font-medium text-[15px] leading-[24px] text-[#c19a83] hover:text-[#000000] 
                      "
                      >
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{ color: "#C19A83" }}
                          className="mr-3 transition ease-in-out delay-75 hover:text-[#000000]"
                        />
                        Lorem ipsum dolor sit amet
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="product__detail__tab__2 w-full flex h-auto clear-both 
          py-2 border-[1px] border-solid justify-between items-center border-b-0"
            onClick={toggleAccordion2}
          >
            <p className="ml-5 font-bold text-[17px] leading-[18px] text-[#000000] transition delay-75 hover:text-[#c19a83]">
              Additional information
            </p>
            <div
              className={` ${
                isOpen2 && " text-white border-none "
              }  h-7 lg:w-8 lg:h-8  rounded flex items-center justify-center mr-10`}
            >
              {isOpen2 ? (
                <FontAwesomeIcon
                  icon={faMinus}
                  size="1xl"
                  style={{ color: "#c19a83" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                  size="1xl"
                  style={{ color: "#c19a83" }}
                />
              )}
            </div>
          </div>
          {isOpen2 && (
            <div className="w-full border-b-[1px] border-l-[1px] border-r-[1px]">
              <div className="mx-5  mb-5 min-h-[47px] flex flex-row">
                <div className=" w-1/5 border-solid border-[1px]">
                  <p className="mt-3 ml-3 font-medium text-[15px] leading-[23px] text-[#636363]">
                    Color
                  </p>
                </div>
                <div className=" w-4/5 border-solid border-[1px] mr-[28px] border-l-0">
                  <p className="font-normal text-[15px] leading-[23px] text-[#636363] mt-3 ml-3">
                    Black, Bronze, Gold
                  </p>
                </div>
              </div>
            </div>
          )}
          <div
            className="product__detail__tab__2 w-full flex h-auto clear-both 
          py-2 border-[1px] border-solid justify-between items-center"
            onClick={toggleAccordion3}
          >
            <p className="ml-5 font-bold text-[17px] leading-[18px] text-[#000000] transition delay-75 hover:text-[#c19a83]">
              Reviews (0)
            </p>
            <div
              className={` ${
                isOpen3 && " text-white border-none "
              }  h-7 lg:w-8 lg:h-8  rounded flex items-center justify-center mr-10`}
            >
              {isOpen3 ? (
                <FontAwesomeIcon
                  icon={faMinus}
                  size="1xl"
                  style={{ color: "#c19a83" }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                  size="1xl"
                  style={{ color: "#c19a83" }}
                />
              )}
            </div>
          </div>
          {isOpen3 && (
            <div className="w-full border-b-[1px] border-l-[1px] border-r-[1px] border-solid relative bottom-[12px]">
              <p className="font-normal text-[15px] leading-[24px] text-[#636363] ml-5 mt-3">
                There are no reviews yet.
              </p>
              <div className="w-auto mx-5 border-[1px] pt-5 pl-5 mt-2 flex flex-col gap-y-5 mb-8">
                <div className="w-full flex flex-col gap-y-3 justify-start items-start">
                  <p className="font-normal text-[20px] leading-[26px] text-[#636363]">
                    Be the first to review “Product Name 1”
                  </p>
                  <p className="font-normal text-[15px] leading-[24px] text-[#636363]">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <div className="w-full flex flex-col gap-y-5 justify-start items-start">
                  <div className="flex flex-row items-center">
                    <p className="font-normal text-[18px] leading-[24px] text-[#636363]">
                      Your rating *
                    </p>
                    <span className="ml-2">
                      <Stack spacing={1}>
                        <Rating
                          name="size-small"
                          defaultValue={0}
                          size="small"
                          className="mx-auto block transition duration-300 hover:text-[#636363] text-[#636363]"
                        />
                      </Stack>
                    </span>
                  </div>
                  <div>
                    <p className="font-normal text-[18px] leading-[24px] text-[#636363]">
                      Your review *
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols="220"
                      rows="5"
                      className="border-[1px] mt-2 text-[15px] leading-[24px] font-normal text-[#111111] pl-3 pt-2 smallest:w-[258px] smallest:h-auto"
                    ></textarea>
                  </div>
                </div>
                <div
                  className="flex flex-row justify-between items-center w-full gap-x-0 smallest:flex smallest:flex-col smallest:w-full
                smallest:justify-start smallest:items-start"
                >
                  <div className="w-1/2 flex flex-col smallest:w-full smallest:ml-[-12px]">
                    <p className="font-normal text-[15px] leading-[24px] text-[#636363]">
                      Name *
                    </p>
                    <input
                      type="text"
                      className="w-[645px] h-[48px] border-[1px] active:border-none font-normal text-[15px] leading-[24px] text-[#111111] pl-2
                      smallest:pl-0 smallest:w-full"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col smallest:w-full  smallest:ml-[-12px]">
                    <p className="font-normal text-[15px] leading-[24px] text-[#636363]">
                      Email *
                    </p>
                    <input
                      type="text"
                      className="w-[645px] h-[48px] border-[1px] active:border-none font-normal text-[15px] leading-[24px] text-[#111111] pl-2
                      smallest:pl-0 smallest:w-full smallest:pr-3"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start items-center">
                  <label className="flex items-center cursor-pointer smallest:mr-[2.5rem]">
                    <Checkbox {...label} className="mr-5 " />
                    <p className="font-normal text-[15px] leading-[24px] ml-2">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </p>
                  </label>
                </div>
                <div className="mb-10 smallest:grid smallest:place-content-center smallest:place-items-center smallest:mx-auto  ">
                  <button className="w-[94px] h-[46px] bg-black text-white font-normal text-[15px] leading-[15px] hover:bg-[#c19a83]">
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-start items-start mt-10 w-full smallest:w-full smallest:mx-0 smallest:grid smallest:place-items-center smallest:gap-y-10">
            <p className="font-bold text-[45px] leading-[45px] text-[#000000]">
              Related products
            </p>
            <div
              className="grid grid-cols-4 w-full place-content-center place-items-center
            smallest:grid smallest:grid-cols-1 smallest:w-full smallest:gap-y-3 smallest:place-content-center smallest:place-items-center"
            >
              <ProductDetailCard
                img={ProductName8}
                name="Product Name 8"
                price="$85.00 – $99.00"
              />
              <ProductDetailCard
                img={ProductName12}
                name="Product Name 12"
                price="$85.00 – $99.00"
              />
              <ProductDetailCard
                img={ProductName15}
                name="Product Name 15"
                price="$85.00 – $99.00"
              />
              <ProductDetailCard
                img={ProductName10}
                name="Product Name 10"
                price="$85.00 – $99.00"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
