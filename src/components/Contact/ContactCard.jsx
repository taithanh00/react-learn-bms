// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./ContactCardStyle.css";
const ContactCard = ({ icon, title, contact }) => {
  return (
    <>
      <div
        className="contact__card lg:w-[446px] lg:h-[252px] bg-white rounded-2xl grid place-items-center
      smallest:w-[255px] smallest:h-[168px]"
      >
        <div className="contact__card__content flex flex-col gap-4 items-center">
          {/* <FontAwesomeIcon
            icon={faPhone}
            style={{ color: "#c19a83" }}
            rotation={270}
            //   size="2xl"
            className="w-[50px] h-[50px]"
          /> */}
          {icon}
          <p className="font-bold text-[25px] leading-[28px] smallest:text-[20px] smallest:font-bold smallest:leading-[22px]">
            {title}
          </p>
          <p className="font-normal text-[15px] leading-[24px] text-[#636363] smallest:font-normal smallest:text-[14px] smallest:leading-[22px]">
            {/* 929-242-6868 */}
            {contact}
          </p>
        </div>
      </div>
    </>
  );
};
ContactCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  contact: PropTypes.any,
};
export default ContactCard;
