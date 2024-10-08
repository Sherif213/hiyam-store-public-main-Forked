import PropTypes from "prop-types";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

const FunFactOneSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  const {t}=useTranslation()
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
      <div style={{width:'100%',justifyContent:'center',alignItems:'center',margin:'2rem 7rem',textAlign:'center'}} className={clsx("single-count", textAlignClass, spaceBottomClass)}>
        <div className="count-icon">
          <i className={data.iconClass} />
        </div>
        <h2 className="count">
          <VisibilitySensor
            onChange={onVisibilityChange}
            offset={{ top: 10 }}
            delayedCall
          >
            <CountUp end={didViewCountUp ? data.countNum : 0} />
          </VisibilitySensor>
        </h2>
        <span>{t(data.title)}</span>
      </div>
  );
};

FunFactOneSingle.propTypes = {
  data: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FunFactOneSingle;
