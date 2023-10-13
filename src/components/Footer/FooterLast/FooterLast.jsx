// import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { SiOnlyfans } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
const FooterLast = () => {
  return (
    <>
      <section className="section bg-[#f1f2f2] max-h-[80px] w-full border-t-[2px]">
        <div className="container">
          <div className="footerlast flex items-center justify-between">
            <div className="left">
              <p className="font-normal text-[15px] leading-[24px] text-[#5E5E5E]">
                Copyright © 2023 Furniture Shop | Powered by Tai Thanh Vo
              </p>
            </div>
            <div className=" right nav__icon flex items-center gap-5">
              <a href="">
                {" "}
                <FaFacebookF />
              </a>

              <a href="">
                <SiOnlyfans />
              </a>
              <a href="">
                <BsYoutube />
              </a>
              <a href="">
                <AiFillInstagram />
              </a>

              <a href="">
                <BsTwitter />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterLast;
