// import React from "react";
import "./FooterButtonStyle.css";
const FooterButton = () => {
  return (
    <>
      <div className="footer__button smallest:w-full">
        {/* <svg
          className="icon absolute left-[1rem] fill-[#9e9aa7] w-[1rem] h-[1rem]"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg> */}
        {/* <input placeholder="Search" type="search" className="input" > */}
        <input
          type="email"
          placeholder="Your email address..."
          className="input__header text-[15px] leading-[24px] w-[183px] h-[48px] font-normal  
          pl-[1rem] border-[1px] border-solid  rounded-[2px] outline-none bg-[#fafafa] text-[#111111] 
          placeholder:text-[15px] placeholder:font-normal placeholder:leading-[24px] placeholder:text-[#757575]
          smallest:w-full"
        />
      </div>
    </>
  );
};

export default FooterButton;
