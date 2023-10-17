// import React from "react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { withGoogleMap, withScriptjs, GoogleMap } from "google-map-react";
import GoogleMapReact from "google-map-react";
// import { withGoogleMap, withScriptjs, GoogleMap } from "google-map-react";

import "./ContactStyle.css";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.998356,
      lng: 107.015026,
    },
    zoom: 11,
  };
  return (
    <>
      <section className="contact__section">
        <div className="container">
          <div
            className="contact__container w-full flex flex-col items-center justify-center gap-9
          smallest:w-full"
          >
            <div className="contact__container__text grid gap-2 place-items-center">
              <p
                className="tracking-[2px] font-normal text-[12px] leading-[15px] text-[#5E5E5E] text-center
              smallest:tracking-[2px] smallest:leading-[1.25em] smallest:text-[0.8rem] smallest:font-normal"
              >
                Dont be a stranger
              </p>
              <h2
                className="text-center font-bold text-[65px] leading-[65px]
              smallest:leading-[1em] smallest:text-[30px] smallest:font-bold"
              >
                Contact Us
              </h2>
              <span className="bg-[#C19A83] w-[51px] h-[2px] mt-[8px]" />
            </div>
            <div
              className="contact__container__card flex flex-row justify-around items-center gap-5
            smallest:flex smallest:flex-col"
            >
              <ContactCard
                icon={
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#c19a83" }}
                    shake
                    rotation={270}
                    //   size="2xl"
                    className="w-[50px] h-[50px] smallest:w-[25px] smallest:h-[25px]"
                  />
                }
                title="Phone Number"
                contact="929-242-6868"
              />
              <ContactCard
                icon={
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    shake
                    style={{ color: "#c19a83" }}
                    className="w-[50px] h-[50px] smallest:w-[25px] smallest:h-[25px]"
                  />
                }
                title="Email"
                contact="contact@info.com"
              />
              <ContactCard
                icon={
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    shake
                    style={{ color: "#c19a83" }}
                    className="w-[50px] h-[50px] smallest:w-[25px] smallest:h-[25px]"
                  />
                }
                title="Address  "
                contact="123 Fifth Avenue, New York, NY 10160"
              />
            </div>
            <div className="contact__get__in__touch grid place-items-center mt-16 gap-2">
              <p className="font-normal text-[12px] leading-[15px] tracking-[2px] text-[#606060]">
                Message us
              </p>
              <h2 className="text-center font-bold text-[45px] leading-[45px]">
                Get in touch
              </h2>
              <span className="bg-[#C19A83] w-[51px] h-[2px] mt-[8px]" />
            </div>
            <div
              className="contact__form w-[740px] h-[372px] mb-[130px]
            smallest:w-full smallest:h-auto "
            >
              <div className="contact__form__name py-[10px] px-0 relative text-left">
                <label
                  htmlFor=""
                  className="block font-bold float-none text-[15px] leading-[24px] text-[#616161]"
                >
                  Name
                  <span className="text-[#ff0000] font-normal text-left">
                    *
                  </span>
                </label>
                <div className="w-full relative text-left flex justify-between items-center ">
                  <div className="first__name clear-both float-left text-left">
                    <input
                      type="text"
                      className=" mt-1 w-full float-none text-[#666] p-[0.75em] border-solid border-[1px] rounded-[2px] bg-white
                      font-normal text-[15px] leading-[24px]"
                    />
                    <label
                      htmlFor=""
                      className="block float-none text-[0.85em] text-left font-normal leading-[24px] text-[#616161]"
                    >
                      First
                    </label>
                  </div>
                  <div className="last__name clear-both float-left text-left ml-[20px]">
                    <input
                      type="text"
                      className=" mt-1 w-full float-none text-[#666] p-[0.75em] border-solid border-[1px] rounded-[2px] bg-white
                      font-normal text-[15px] leading-[24px]"
                    />
                    <label
                      htmlFor=""
                      className="block float-none text-[0.85em] text-left font-normal leading-[24px] text-[#616161]"
                    >
                      Last
                    </label>
                  </div>
                </div>
                <label
                  htmlFor=""
                  className="block font-bold float-none text-[15px] leading-[24px] text-[#616161] mt-4"
                >
                  Email
                  <span className="text-[#ff0000] font-normal text-left">
                    *
                  </span>
                </label>
                <div className="w-full relative text-left flex justify-between items-center ">
                  <div className="w-full float-left text-left">
                    <input
                      type="email"
                      className=" mt-1 block w-full float-none text-[#666] p-[0.75em] border-solid border-[1px] rounded-[2px] bg-white
                      font-normal text-[15px] leading-[24px]"
                    />
                  </div>
                </div>
                <label
                  htmlFor=""
                  className="block font-bold float-none text-[15px] leading-[24px] text-[#616161] mt-4"
                >
                  Message
                  <span className="text-[#ff0000] font-normal text-left">
                    *
                  </span>
                </label>
                <div className="w-full relative text-left flex justify-between items-center ">
                  <div className="w-full float-left text-left">
                    <textarea
                      type="email"
                      className=" mt-1 block w-full h-[120px] float-none text-[#666] p-[0.75em] border-solid border-[1px] rounded-[2px] bg-white
                      font-normal text-[15px] leading-[24px]"
                    />
                  </div>
                </div>
                <button className="w-[80px] h-[45px] mt-5 bg-black text-white font-normal text-[15px] leading-[15px] hover:bg-[#C19A83]">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="contact__googlemap w-full lg:h-[500px] smallest:hidden">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Contact;
