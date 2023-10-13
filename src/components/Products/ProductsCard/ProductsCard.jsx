// ProductsCard.js
import { useState } from "react";
import { MdStorefront } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import "../ProductsStyle.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import PropTypes from "prop-types";
const ProductsCard = ({ img, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="card-container"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="product__card min-w-[455px] min-h-[719px] bg-[#f1f3f2] grid grid-cols-1 grid-flow-row relative
        smallest:min-w-fit smallest:min-h-[470px] smallest:mt-6">
          <div className="flex justify-between">
            <div className="left__button relative top-5 left-5 w-[46px] h-[32px] rounded-2xl bg-white ">
              <button className="font-normal text-[13px] leading-[15px] text-[#636363] text-center block mx-auto  mt-2">
                Sale!
              </button>
            </div>
            <div className="w-full">
              <img
                src={img}
                alt=""
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
                    <a href="">
                      <MdStorefront className="product__icon mx-auto mt-2" />
                    </a>
                  </Tippy>
                </div>
                <div className="product__icon__down h-[32px] w-[32px] rounded-full bg-white">
                  <Tippy
                    className="text-[12px] font-normal leading-[14px]"
                    content="Quick View"
                    placement="left"
                  >
                    <a href="">
                      <IoEyeSharp className="mx-auto mt-2" />
                    </a>
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
              {price}
            </p>
            <div className="product__color flex items-center justify-center gap-x-3">
              <Tippy
                placement="top"
                content="Black"
                className="text-[12px] font-normal leading-[15px]"
              >
                <a
                  href=""
                  className="min-w-[20px] min-h-[20px] bg-[#000000] rounded-full border-[3px] border-solid border-white"
                ></a>
              </Tippy>
              <Tippy
                placement="top"
                content="Brown"
                className="text-[12px] font-normal leading-[15px]"
              >
                <a
                  href=""
                  className="min-w-[20px] min-h-[20px] bg-[#8F6453] rounded-full border-[3px] border-solid border-white"
                ></a>
              </Tippy>
              <Tippy
                className="text-[12px] leading-[15px] font-normal"
                placement="top"
                content="Yellow"
              >
                <a
                  href=""
                  className="min-w-[20px] min-h-[20px] bg-[#DABCA2] rounded-full border-[3px] border-solid border-white"
                ></a>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
ProductsCard.propTypes = {
  img: PropTypes.any,
  name: PropTypes.any,
  price: PropTypes.any,
};
export default ProductsCard;
