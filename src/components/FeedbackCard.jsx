import { quotes } from "../assets"

import PropTypes from "prop-types"


const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card select-none">
    <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain" />

    <p className="font-poppins text-white font-normal text-[18px] leading-[32px] my-10 mb-auto">{content}</p>

    <div className="flex flex-row items-center mt-6">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

      <div className="flex flex-col ml-4">
        <h4 className="text-white font-poppins font-semibold text-[20px] leading-[32px]">{name}</h4>

        <p className="font-poppins text-white font-normal text-[16px] leading-[24px]">{title}</p>
      </div>
    </div>
  </div>
)

FeedbackCard.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
}

export default FeedbackCard