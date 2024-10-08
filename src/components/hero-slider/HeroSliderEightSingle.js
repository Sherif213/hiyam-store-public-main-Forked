import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeroSliderEightSingle = ({ data }) => {
  const {t}= useTranslation();
  return (
    <div
      className="single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.image})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-13 slider-animated-1">
              <h5 className="animated">{t(data.title)}</h5>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: t(data.subtitle) }}
              />
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  {t("SHOP NOW")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderEightSingle.propTypes = {
  data: PropTypes.shape({})
};

export default HeroSliderEightSingle;
