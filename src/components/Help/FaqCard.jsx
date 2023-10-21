import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./FaqStyle.css";
// import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const FaqCard = ({ item, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="faq__container lg:w-[740px] lg:h-[75px] smallest:w-full smallest:h-auto"
        onClick={toggleAccordion}
      >
        <div className="faq__container__content flex justify-between items-center cursor-pointer">
          {isOpen ? (
            <p
              className="text-center font-bold text-[25px] leading-[25px] text-[#C19A83] ml-5
            smallest:font-bold smallest:text-[18px] smallest:leading-[18px] smallest:ml-1"
            >
              {content}
            </p>
          ) : (
            <p className="text-center font-bold text-[25px] leading-[25px] text-[#000000] ml-5
            smallest:font-bold smallest:text-[18px] smallest:leading-[18px] smallest:ml-1">
              {content}
            </p>
          )}

          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} style={{ color: "#C19A83" }} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="faq__container__content__hide">
          <p className="text-[15px] leading-6 font-normal text-[#636363]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            dapibus dignissim turpis nec interdum. Nunc faucibus turpis vitae mi
            rhoncus, sed interdum mi commodo. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In mauris est, sagittis id arcu eu,
            scelerisque maximus odio.
          </p>
        </div>
      )}
    </>
  );
};

export default FaqCard;
