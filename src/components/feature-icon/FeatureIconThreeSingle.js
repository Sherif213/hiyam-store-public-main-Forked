import PropTypes from "prop-types";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const FeatureIconThreeSingle = ({
  
  data,
  spaceBottomClass,
  featureShapeClass
}) => {
  const {t}=useTranslation()
  return (
      <div style={{marginTop:'0px'}}className={clsx("support-wrap-2 support-padding-2 text-center", featureShapeClass, spaceBottomClass)}>
        <div  className="support-content-2">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          />
          <h5>{t(data.title)}</h5>
          <p>{t(data.subtitle)}</p>
        </div>
      </div>
  );
};

FeatureIconThreeSingle.propTypes = {
  data: PropTypes.shape({}),
  featureShapeClass: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconThreeSingle;
