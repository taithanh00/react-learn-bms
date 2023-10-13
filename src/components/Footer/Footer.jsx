// import React from 'react'
import logo from "../../assets/e-commerce-logo.png";
import FooterButton from "../Footer/FooterButton/FooterButton";
import "./FooterStyle.css";
import FooterLast from "./FooterLast/FooterLast";
const Footer = () => {
  return (
    <>
      <div className="section bg-[#f1f2f2] min-h-[368px] w-full">
        <div className="container pt-[70px]  min-h-[368px]">
          <div className="footer w-full flex justify-between">
            <div className="img">
              <img src={logo} alt="" />
            </div>
            <div className="footer__navigation grid grid-cols-3 gap-5">
              <div className=" one grid grid-cols-1">
                <h6 className="font-normal text-[12px] leading-[15px] text-black">
                  Links
                </h6>
                <ul className="pt-[54px]">
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Story
                    </a>
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Contact
                    </a>
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Track Order
                    </a>
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
              <div className="two grid grid-cols-1">
                <h6 className="font-normal text-[12px] leading-[15px] text-black">
                  CATEGORIES
                </h6>
                <ul className="pt-[54px]">
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Bedroom <span className="text-[#5E5E5E]">(6)</span>
                    </a>
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Decor <span className="text-[#5E5E5E]">(9)</span>
                    </a>
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Living Room <span className="text-[#5E5E5E]">(6)</span>
                    </a>
                  </li>
                  <li className="font-normal text-[15px] leading-[24px] text-[#c19a83]">
                    <a href="" className="hover:text-black">
                      Office <span className="text-[#5E5E5E]">(11)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="three grid grid-cols-1">
                <h6 className="font-normal text-[12px] leading-[15px] text-black">
                  Subscribe
                </h6>
                <ul className="pt-[54px]">
                  <li>
                    <FooterButton />
                  </li>
                  <li>
                    <button className="mt-5 font-normal hover:bg-[#c19a83] w-[113px] h-[43px] bg-black text-white relative inline-block overflow-hidden">
                      SUBSCRIBE
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterLast /> */}
      </div>
    </>
  );
};

export default Footer;
