// import React from 'react'
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { MdStorefront } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const ProductDetailCard = ({ img }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div className="w-[320px] h-[460px] bg-[#F1F3F2] grid grid-cols-1 grid-flow-row relative"
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}>
                <div className="flex justify-between">
                    <div className="left__button relative top-5 left-5 w-[46px] h-[32px] rounded-2xl bg-white ">
                        <button className="font-normal text-[13px] leading-[15px] text-[#636363] text-center block mx-auto  mt-2">
                            Sale!
                        </button>
                    </div>
                    <div className="w-full">
                        <img
                            src={img}
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
                                    <Link>
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
                                        <IoEyeSharp className="mx-auto mt-2" />
                                    </Link>
                                </Tippy>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductDetailCard