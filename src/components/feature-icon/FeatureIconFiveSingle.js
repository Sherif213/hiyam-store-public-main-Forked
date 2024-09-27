import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const FeatureIconFiveSingle = ({ data, spaceBottomClass }) => {
  const {t}=useTranslation()
  return (
      <div className={clsx("support-wrap-4", spaceBottomClass)}>
        <div className="support-icon-4">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          />
        </div>
        <div className="support-content-4">
          <h5>{t(data.title)}</h5>
          <p>{t(data.subtitle)}</p>
        </div>
      </div>
  );
};

FeatureIconFiveSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string
};

export default FeatureIconFiveSingle;
