/* eslint-disable react/prop-types */
// ProductsCard.js
import { useState } from "react";
import { MdStorefront } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import "../ProductsStyle.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { ProductsList } from "../../../assets/data/ProductList";
import { Button, Modal } from "flowbite-react";
import visaIcon from "../../../assets/productdetail/visa.png";
import CardIcon from "../../../assets/productdetail/card.png";
import AmericanExpressIcon from "../../../assets/productdetail/american-express.png";
import DiscoverIcon from "../../../assets/productdetail/discover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const ProductsCard = ({ productsmap }) => {
  const {
    id,
    name,
    ProductimgBlack,
    ProductimgBrown,
    ProductimgYellow,
    ProductpriceBlack,
    ProductsaleBlack,
    ProductpriceBrown,
    ProductsaleBrown,
    ProductpriceYellow,
    // eslint-disable-next-line no-unused-vars
    ProductsaleYellow,
  } = productsmap;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [selectedColor, setSelectedColor] = useState("black");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const getProductImage = () => {
    switch (selectedColor) {
      case "black":
        // console.log("black");
        return productsmap.ProductimgBlack;
      case "brown":
        return productsmap.ProductimgBrown;
      case "yellow":
        return productsmap.ProductimgYellow;
      default:
        return productsmap.ProductimgBlack;
    }
  };

  const getProductsale = () => {
    switch (selectedColor) {
      case "black":
        return productsmap.ProductsaleBlack;
      case "brown":
        return productsmap.ProductsaleBrown;
      case "yellow":
        return productsmap.ProductsaleYellow;
      default:
        return productsmap.ProductsaleBlack;
    }
  };
  const getProductprice = () => {
    switch (selectedColor) {
      case "black":
        return productsmap.ProductpriceBlack;
      case "brown":
        return productsmap.ProductpriceBrown;
      case "yellow":
        return productsmap.ProductpriceYellow;
      default:
        return productsmap.ProductpriceBlack;
    }
  };
  const [openModal, setOpenModal] = useState(false);
  const [countTotal, setCountTotal] = useState(1);

  const checkCountTotalMinus = () => {
    if (countTotal > 0) {
      setCountTotal(countTotal - 1);
    }
  };

  const checkCountTotalPlus = () => {
    setCountTotal(countTotal + 1);
  };
  return (
    <>
      <div
        className="card-container"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="product__card min-w-[455px] min-h-[719px] bg-[#f1f3f2] grid grid-cols-1 grid-flow-row relative
        smallest:min-w-fit smallest:min-h-[470px] smallest:mt-6"
        >
          <div className="flex justify-between">
            <div className="left__button relative top-5 left-5 w-[46px] h-[32px] rounded-2xl bg-white ">
              <button className="font-normal text-[13px] leading-[15px] text-[#636363] text-center block mx-auto  mt-2">
                Sale!
              </button>
            </div>
            <div className="w-full">
              <img
                src={getProductImage()}
                alt="Product"
                className="product__img flex justify-center items-center object-contain pr-5"
              />
            </div>
            {isHovered && (
              <div className="right__button absolute top-5 right-5 flex flex-col gap-y-3">
                <div className="product__icon__up h-[32px] w-[32px] rounded-full bg-white">
                  <Tippy
                    content="Select options"
                    className="text-[12px] font-normal leading-[14px]"
                    placement="left"
                  >
                    <Link to={`/shopall/products/productsdetail/${id}`}>
                      <MdStorefront className="product__icon mx-auto mt-2" />
                    </Link>
                  </Tippy>
                </div>
                <div className="product__icon__down h-[32px] w-[32px] rounded-full bg-white">
                  <Tippy
                    className="text-[12px] font-normal leading-[14px]"
                    content="Quick View"
                    placement="left"
                  >
                    <Link>
                      <IoEyeSharp
                        className="mx-auto mt-2"
                        onClick={() => setOpenModal(true)}
                      />
                      <Modal
                        show={openModal}
                        onClose={() => setOpenModal(false)}
                      >
                        <Modal.Header></Modal.Header>
                        <Modal.Body>
                          <div className="flex justify-between w-full ">
                            <div className="w-1/2 relative z-[1]">
                              <img
                                src={getProductImage()}
                                alt="Product"
                                className="product__img flex justify-center items-center object-cover z-[-1]"
                              />
                              <div className="flex flex-row gap-3 items-center justify-center relative z-[1] bottom-8">
                                <button
                                  href=""
                                  className="min-w-[20px] min-h-[20px] bg-[#000000] rounded-full border-[3px] border-solid border-white"
                                  onClick={() => handleColorChange("black")}
                                ></button>
                                <button
                                  href=""
                                  className="min- w-[20px] min-h-[20px] bg-[#8F6453] rounded-full border-[3px] border-solid border-white"
                                  onClick={() => handleColorChange("brown")}
                                ></button>
                                <button
                                  href=""
                                  className="min-w-[20px] min-h-[20px] bg-[#DABCA2] rounded-full border-[3px] border-solid border-white"
                                  onClick={() => handleColorChange("yellow")}
                                ></button>
                              </div>
                            </div>
                            <div className="w-1/2 flex flex-col gap-y-1 justify-start items-start pl-3">
                              <p className="font-normal text-[15px] leading-[15px] text-[#636363]">
                                Bedroom
                              </p>
                              <p className="font-normal text-[25px] leading-[33px] text-[#000000]">
                                {name}
                              </p>
                              <p className="font-bold text-[23px] leading-[24px] text-[#C19A83]">
                                $85.00 – $99.00{" "}
                                <span className="font-normal text-[15px] leading-[24px] text-[#636363]">
                                  & Free Shipping
                                </span>
                              </p>
                              <p className="font-normal text-[15px] leading-[24px] text-[#636363] mr-7">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin vestibulum erat leo, id
                                pulvinar lorem maximus sit amet. Quisque mauris
                                sem, sagittis sed blandit eu, varius a tortor.
                                Quisque aliquam ligula sed quam pulvinar, vitae
                                ullamcorper metus imperdiet. Vivamus id justo
                                dui.
                              </p>
                              <p className="font-normal text-[15px] leading-[24px] text-[#636363] mr-9">
                                Donec faucibus gravida vulputate. Sed quis
                                porttitor libero. Aenean posuere imperdiet elit,
                                in aliquet lorem vulputate sed. Integer et
                                lacinia tellus.
                              </p>
                              <div className="flex flex-row justify-start items-start mt-3 gap-x-5">
                                <p className="font-normal text-[14px] leading-[24px] text-[#636363]">
                                  SKU: N/A
                                </p>
                                <p className="font-normal text-[14px] leading-[24px] text-[#666666]">
                                  Category:
                                  <span className="font-normal text-[14px] leading-[24px] text-[#C19A83]">
                                    Bedroom
                                  </span>
                                </p>
                              </div>
                              <div className="smallest:w-screen smallest:pl-0 smallest:pr-5">
                                <fieldset className="h-[100px] w-full border-[1px] border-solid border-[var(#666666)] text-center">
                                  <legend className="font-semibold text-[15px] leading-[24px] text-[#666666]">
                                    Guaranteed Safe Checkout
                                  </legend>
                                  <ul className="product__detail__ul flex flex-row justify-center items-center relative top-[50%] left-[50%] gap-x-5 px-3">
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
                                className="flex flex-col items-start justify-start mt-4 gap-y-3
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
                        </Modal.Body>
                        <Modal.Footer>
                          <div className="flex justify-between items-center w-full">
                            <div className="flex flex-row gap-x-2 w-1/2 justify-center items-center relative left-[-70px]">
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
                            <div className="flex flex-row">
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
                                className="product__detail__hovering w-[37px] h-[33px] bg-white text-black grid place-content-center place-items-center border-[1px] border-solid border-[#00000012] cursor-pointer"
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
                          </div>
                          {/* <Button onClick={() => setOpenModal(false)}>
                            I accept
                          </Button>
                          <Button
                            color="gray"
                            onClick={() => setOpenModal(false)}
                          >
                            Decline
                          </Button> */}
                        </Modal.Footer>
                      </Modal>
                    </Link>
                  </Tippy>
                </div>
              </div>
            )}
          </div>
          <div className="product__text grid place-content-center gap-4">
            <p className="font-normal text-[22px] leading-[22px] text-center">
              {name}
            </p>
            <p className="font-bold text-[14px] leading-[18px] text-[#5E5E5E] text-center">
              <span className="line-through mr-3 font-bold text-[14px] leading-[18px] text-[#A7A8A8]">
                ${getProductprice()}.00
              </span>
              ${getProductsale()}.00
            </p>
            <div className="product__color flex items-center justify-center gap-x-3">
              <Tippy
                placement="top"
                content="Black"
                className="text-[12px] font-normal leading-[15px]"
              >
                <button
                  href=""
                  className="min-w-[20px] min-h-[20px] bg-[#000000] rounded-full border-[3px] border-solid border-white"
                  onClick={() => handleColorChange("black")}
                ></button>
              </Tippy>
              <Tippy
                placement="top"
                content="Brown"
                className="text-[12px] font-normal leading-[15px]"
              >
                <button
                  href=""
                  className="min- w-[20px] min-h-[20px] bg-[#8F6453] rounded-full border-[3px] border-solid border-white"
                  onClick={() => handleColorChange("brown")}
                ></button>
              </Tippy>
              <Tippy
                className="text-[12px] leading-[15px] font-normal"
                placement="top"
                content="Yellow"
              >
                <button
                  href=""
                  className="min-w-[20px] min-h-[20px] bg-[#DABCA2] rounded-full border-[3px] border-solid border-white"
                  onClick={() => handleColorChange("yellow")}
                ></button>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ProductsCard.propTypes = {
  name: PropTypes.any.isRequired,
  ProductimgBlack: PropTypes.any.isRequired,
  ProductimgBrown: PropTypes.any.isRequired,
  ProductimgYellow: PropTypes.any.isRequired,
  ProductpriceBlack: PropTypes.number.isRequired,
  ProductsaleBlack: PropTypes.number.isRequired,
  ProductpriceBrown: PropTypes.number.isRequired,
  ProductsaleBrown: PropTypes.number.isRequired,
  ProductpriceYellow: PropTypes.number.isRequired,
  ProductsaleYellow: PropTypes.number.isRequired,
};

export default ProductsCard;
