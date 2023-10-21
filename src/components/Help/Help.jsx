// import React from "react";
import "./HelpStyle.css";
import HelpCard from "./HelpCard";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FaqCard from "./FaqCard";
const Help = () => {
  return (
    <>
      <section className="help__section">
        <div className="container grid gap-y-10">
          <div
            className="help__container w-full flex flex-col items-center justify-center gap-9
          smallest:w-full"
          >
            <div className="help__container__text grid gap-2 place-items-center">
              <p
                className="tracking-[2px] font-normal text-[12px] leading-[15px] text-[#5E5E5E] text-center
              smallest:tracking-[2px] smallest:leading-[1.25em] smallest:text-[0.8rem] smallest:font-normal"
              >
                24/7 Support
              </p>
              <h2
                className="text-center font-bold text-[65px] leading-[65px]
              smallest:leading-[1em] smallest:text-[30px] smallest:font-bold"
              >
                Ready to help
              </h2>
              <span className="bg-[#C19A83] w-[51px] h-[2px] mt-[8px]" />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-5 smallest:flex smallest:flex-col smallest:w-full">
            <HelpCard
              icon={
                <FontAwesomeIcon icon={faUser} style={{ color: "#c19a83" }} />
              }
              title="Account Privacy"
              content="Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur."
              redirect="
              PRIVACY POLICY"
            />

            <HelpCard
              icon={
                <FontAwesomeIcon
                  icon={faHeadphones}
                  style={{ color: "#c19a83" }}
                />
              }
              title="Support Specialist"
              content="Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur.  "
              redirect="
              CONTACT US"
            />

            <HelpCard
              icon={
                <FontAwesomeIcon icon={faStar} style={{ color: "#c19a83" }} />
              }
              title="Account Privacy"
              content="Quisque a pharetra quam. Donec et risus sem. Etiam sollicitudin leo eu congue gravida. In semper lectus neque, eu interdum nisl pretium sit amet etiam efficitur."
              redirect="
              LEARN MORE"
            />
          </div>
          <div className="help__container__text grid gap-2 place-items-center mt-6">
            <p
              className="tracking-[2px] font-normal text-[12px] leading-[15px] text-[#5E5E5E] text-center
              smallest:tracking-[2px] smallest:leading-[1.25em] smallest:text-[0.8rem] smallest:font-normal"
            >
              faq
            </p>
            <h2
              className="text-center font-bold text-[45px] leading-[45px]
              smallest:leading-[1em] smallest:text-[30px] smallest:font-bold"
            >
              Find Answers
            </h2>
            <span className="bg-[#C19A83] w-[51px] h-[2px] mt-[8px]" />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="help__faqcard lg:w-[740px] lg:h-[375px] grid grid-cols-1 place-content-center place-items-center">
              <FaqCard content="How do I know that my products lorem ipsum dolor sit?" />
              <FaqCard content="Where can I see my invoices?" />
              <FaqCard content="Can I compare prices between tincidunt dui in congue?" />
              <FaqCard content="Are there any surcharges?" />
              <FaqCard content="I made an online purchase. Where can I check order status?" />
            </div>
          </div>
        </div>
      </section>
      <div className="help__parallax">
        <div className="help__parallax__content">
          <hr className="bg-white w-[51px] h-[1px] mx-auto block relative bottom-4" />
          <p
            className="text-white font-bold text-[45px] leading-[45px] text-center
          smallest:text-[30px]
          md:text-[32px]
          lg:text-[45px]"
          >
            Still need help?
          </p>
          <div className="flex items-center justify-center mt-8">
            <button className="help__button w-[120px] h-[47px] bg-[#C5A08B] font-normal text-[15px] leading-[15px] text-white text-center">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="help__parallax__child"></div>
      </div>
    </>
  );
};

export default Help;
