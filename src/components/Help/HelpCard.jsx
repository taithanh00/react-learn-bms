import { useState } from "react";
import { Link } from "react-router-dom";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const HelpCard = ({ icon, title, content, redirect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="help__card__container lg:w-[379px] lg:h-[334px] bg-white rounded-2xl border-2 flex items-center justify-center
      smallest:py-5">
        <div className="help__card__content grid place-content-center place-items-center gap-y-3">
          <span className="lg:w-[30px] lg:h-[30px] bg-white rounded-full border-[1px] border-[#C19A83] flex items-center justify-center">
            {icon}
          </span>
          <h4 className="text-center  font-bold text-[25px] leading-[28px] text-[#000000]">
            {title}
          </h4>
          <p className="text-center font-normal text-[15px] leading-[24px] text-[#636363] mx-14">
            {content}
          </p>
          <Link 
            className={`text-[#C19A83] text-center text-[15px] leading-[15px] font-normal hover:text-[#000000] ${
              isHovered ? "text-[#000000]" : ""
            }`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {redirect}
            <FontAwesomeIcon
              icon={faRightLong}
              style={{ color: isHovered ? "#000000" : "#c19a83" }}
              className="ml-1"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

HelpCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  content: PropTypes.any,
  redirect: PropTypes.any,
};

export default HelpCard;
