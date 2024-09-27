import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BannerNineSingle = ({ data, spaceBottomClass }) => {
  const {t}=useTranslation()
  return (
    <div className={clsx("single-banner-2", spaceBottomClass)}>
      <Link
        to={`${process.env.PUBLIC_URL + "/shop-grid-standard"}?category=${
          t(data.title)
        }`}
      >
        <img src={data.image?.url} alt={data.title} />
      </Link>
      <div className="banner-content-2">
        <h3>{t(data.title)}</h3>
        <h4>
          {t(data.subtitle)} <span>{data.price}</span>
        </h4>
        <Link  limit={4}
          to={`${process.env.PUBLIC_URL + "/shop-grid-standard"}?category=${
            t(data.title)
          }`}
        >
          <i className="fa fa-long-arrow-right" />
        </Link>
       
      </div>
    </div>
  );
};

BannerNineSingle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    subtitle: PropTypes.string,
    price: PropTypes.string,
    link: PropTypes.string,
  }),
  spaceBottomClass: PropTypes.string,
};

export default BannerNineSingle;
