import PropTypes from "prop-types";
const WhyUsCard = ({ icon, title, desc }) => {
  return (
    <>
      <div className="w-[280px] h-[130px] flex flex-col items-center gap-y-4">
        {icon}
        <p className="font-normal text-[22px] leading-[26px] text-center">
          {title}
        </p>

        <p className="font-normal text-[15px] leading-[24px] text-center text-[#636363]">
          {desc}
        </p>
      </div>
    </>
  );
};
WhyUsCard.propTypes = {
  icon: PropTypes.any,
  title: PropTypes.any,
  desc: PropTypes.any,
};
export default WhyUsCard;
