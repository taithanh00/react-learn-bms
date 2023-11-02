// import React from 'react'
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const ProductDetailFaqCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    console.log(setIsOpen);
  };

  return (
    <>
      <div className=" w-full h-[52px] cursor-pointer border-[var(#c19a83)] border-[1px] border-solid">
        <div
          className="flex items-center justify-between gap-5"
          onClick={toggleAccordion}
        >
          <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
            <p>hi</p>
          </h4>
          <div
            className={` ${
              isOpen && "bg-primaryColor text-white border-none"
            } w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141f21] rounded flex items-center justify-center`}
          >
            {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {isOpen && (
          <div className="mt-4">
            <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
              <p>bar</p>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailFaqCard;
