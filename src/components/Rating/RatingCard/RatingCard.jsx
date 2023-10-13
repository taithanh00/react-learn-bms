import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const RatingCard = ({ content, author }) => {
  return (
    <div className="rating__card w-[480px] h-[345px] bg-[#F1F2F2] grid place-content-center grid-flow-col place-items-center
    smallest:w-fit smallest:h-fit">
      <div className="grid place-items-center grid-cols-1 place-content-center p-[15%] gap-y-3">
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faStar} style={{ color: "#F0AD4E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#F0AD4E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#F0AD4E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#F0AD4E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#F0AD4E" }} />
        </div>
        <p className="text-center font-normal text-[20px] leading-[24px]">
          {content}
        </p>
        <p className="font-normal text-[12px] leading-[18px] text-[#5E5E5E] tracking-[5px]">
          {author}
        </p>
      </div>
    </div>
  );
};
RatingCard.propTypes = {
  content: PropTypes.any,
  author: PropTypes.any
};
export default RatingCard;
