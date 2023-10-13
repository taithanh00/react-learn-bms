// import React from 'react'
import "./LoginStyle.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswords = () => {
    setPasswordShow(!passwordShow);
  };
  const [isInputFilled, setInputFilled] = useState(false);
  const handleInputChange = (event) => {
    setInputFilled(event.target.value !== "");
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="container__login w-full h-auto relative grid place-content-center">
            <p className="absolute font-normal text-[25px] leading-[30px]">
              My account
            </p>
            <div
              className="login__content w-[540px] h-[490px] relative top-16 mb-16 flex flex-col border-[1px] rounded-md gap-y-[62px]
            smallest:w-[338px] smallest:h-[425px] smallest:gap-y-5
            "
            >
              <h2 className="font-bold text-[45px] leading-[45px] text-center pt-[40px]">
                Login
              </h2>
              <div className="w-full h-auto flex flex-nowrap flex-col gap-y-[27px] ">
                <input
                  type="text"
                  placeholder="Username or email address *"
                  className="input__check font-normal text-[15px] leading-[15px] text-[#535353] pl-4 mx-10 h-[54px] border-[1px] placeholder:font-normal 
                  placeholder:text-[15px] placeholder:leading-[15px]
                placeholder:text-[#757575]
                rounded-md"
                />
                <div className="password__input flex flex-col justify-center relative mt-[-31px]"></div>
                <input
                  type={passwordShow ? "text" : "password"}
                  placeholder="Password *"
                  className="input__check font-normal text-[15px] leading-[15px] text-[#535353] pl-4 mx-10 h-[54px] border-[1px] placeholder:font-normal 
                  placeholder:text-[15px] placeholder:leading-[15px]
                placeholder:text-[#757575] 
                rounded-md"
                />
                <span
                  className="absolute top-[15.2rem] right-16 smallest:top-[12.6rem]"
                  onClick={togglePasswords}
                >
                  {passwordShow ? <BsEyeSlashFill /> : <IoEyeSharp />}
                </span>
                <form
                  action=""
                  className="mx-10 flex gap-x-2 font-semibold text-[14px] leading-[27px] text-[#636363]"
                >
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="bg-[#C19A83] border-[1px] border-[#C19A83] "
                  />
                  <label htmlFor="">Remember me</label>
                </form>
                <input
                  type="submit"
                  value="LOG IN"
                  className=" bg-black text-white mx-10 w-[452px] h-[40px] font-normal text-[15px] leading-[15px] hover:bg-[#C19A83]
                  smallest:w-auto
                  md:w-auto"
                />
                <a href="">
                  <p className="text-center font-normal text-[15px] leading-[24px] text-[#C19A83] hover:text-black">
                    Lost your password?
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
Login.propTypes = {
  passwordShow: PropTypes.any,
  setPasswordShow: PropTypes.any,
};
export default Login;
