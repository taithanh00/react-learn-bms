import logo from "../../assets/e-commerce-logo.png";
import "./Header_Style.css";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HeaderButton from "./HeaderButton/HeaderButton";
import { Link } from "react-router-dom";
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <>
      <header
        className="header flex items-center bg-transparent text-black"
        ref={headerRef}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="logo">
              <Link to="/">
                <img
                  className="max-w-[120px] max-h-[120px]"
                  src={logo}
                  alt={"Logo"}
                />
              </Link>
              {/* <a href="">
                <img
                  className="max-w-[120px] max-h-[120px]"
                  src={logo}
                  alt={"Logo"}
                />
              </a> */}
            </div>
            {/* menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[29px] cursor-pointer">
                <li className=" nav-zoom text-[14px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <Link to="/shopall">SHOP ALL</Link>
                </li>
                <li className=" nav-zoom text-[14px] leading-[80px] font-normal hover:text-[#c19a83]">
                  DECOR
                </li>
                <li className=" nav-zoom text-[14px] leading-[80px] font-normal hover:text-[#c19a83]">
                  OFFICE
                </li>
                <li className=" nav-zoom text-[14px] leading-[80px] font-normal hover:text-[#c19a83]">
                  LIVING ROOM
                </li>
                <li className=" nav-zoom text-[14px] leading-[80px] font-normal hover:text-[#c19a83]">
                  BEDROOM
                </li>
                <li className=" nav-zoom text-[14px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <HeaderButton className="w-5 h-5" />
                </li>
              </ul>
            </div>
            <div className="navigation2" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu2 flex items-center gap-[29px] cursor-pointer">
                <li className="nav-zoom text-[12px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <Link to="/story">STORY</Link>
                </li>
                <li className="nav-zoom text-[12px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li className="nav-zoom text-[12px] leading-[80px] font-normal hover:text-[#c19a83]">
                  TRACK ORDER
                </li>
                <li className="nav-zoom text-[12px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <Link to="/help">Help</Link>
                </li>
                <li className="nav-zoom text-[12px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <Link to="/login">Log In</Link>
                </li>
                <li className="nav-zoom text-[12px] leading-[80px] font-normal hover:text-[#c19a83]">
                  <AiOutlineShoppingCart className="w-5 h-5" />
                </li>
              </ul>
            </div>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>

            {/* <div className="flex items-center gap-0">
              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" />
              </span>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
