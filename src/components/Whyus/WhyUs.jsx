// import React from "react";
import WhyUsCard from "./WhyUsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShippingFast } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="whyus__container flex flex-col justify-center gap-16">
            <div className="whyus__text grid gap-[28px] place-content-center place-items-center">
              <p className="font-normal text-[12px] leading-[15px] text-[#8E8E8E] tracking-[2px] text-center">
                Best products
              </p>
              <h4 className="font-bold leading-[45px] text-[45px] text-center">
                Why choose us
              </h4>
              <hr className="bg-[#C19A83] w-[51px] h-[2px]" />
            </div>
            <div className="whyus__icon flex justify-around mb-32
            smallest:grid smallest:grid-cols-1 smallest:place-content-center smallest:place-items-center smallest:gap-4 ">
              <WhyUsCard
                icon={
                  <FontAwesomeIcon
                    icon={faShippingFast}
                    size="lg"
                    style={{ color: "#c19a83" }}
                  />
                }
                title="Fast Delivery"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
              />
              <WhyUsCard
                icon={
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    size="lg"
                    style={{ color: "#c19a83" }}
                  />
                }
                title="Free Shipping"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
              />
              <WhyUsCard
                icon={
                  <FontAwesomeIcon
                    icon={faShieldHalved}
                    size="lg"
                    style={{ color: "#c19a83" }}
                  />
                }
                title="Secure Checkout"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
              />
              <WhyUsCard
                icon={
                  <FontAwesomeIcon
                    icon={faCartArrowDown}
                    size="lg"
                    style={{ color: "#c19a83" }}
                  />
                }
                title="Easy Returns"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
