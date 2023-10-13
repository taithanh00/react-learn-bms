// import React from "react";

const HeaderButton = () => {
  return (
    <>
      <div className="group flex leading-[28px] items-center relative max-w-[190px]">
        <svg
          className="icon absolute left-[1rem] fill-[#9e9aa7] w-[1rem] h-[1rem]"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        {/* <input placeholder="Search" type="search" className="input" > */}
        <input
          type="text"
          placeholder="Search"
          className="input__header input w-full h-[40px] leading-[28px] px-0 py-[1rem] pl-[2.5rem] border-[2px] border-solid border-transparent rounded-[8px] outline-none bg-transparent text-[#0d0c22] placeholder:text-[#9e9ea7]"
        />
      </div>
    </>
  );
};

export default HeaderButton;
