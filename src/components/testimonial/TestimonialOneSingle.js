import PropTypes from "prop-types";
import clsx from "clsx"
import { useTranslation } from "react-i18next";

const TestimonialOneSingle = ({ data, testimonialClass }) => {
  const {t}=useTranslation()
  return (
    <div className={clsx(testimonialClass || "single-testimonial", "text-center")}>
      
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p>{t(data.content)}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{t(data.customerName)}</h5>
        <span>{t(data.title)}</span>
      </div>
    </div>
  );
};

TestimonialOneSingle.propTypes = {
  data: PropTypes.shape({}),
};

export default TestimonialOneSingle;
