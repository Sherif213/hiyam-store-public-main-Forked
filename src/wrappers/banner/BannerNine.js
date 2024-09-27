import PropTypes from "prop-types";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils.js";
import BannerNineSingle from "../../components/banner/BannerNineSingle.js";
import { useTranslation } from "react-i18next";

const BannerNine = ({ spaceBottomClass }) => {
  const {t}=useTranslation()
  const [categories, setCategories] = useState([]);
  const [visibleCategories, setVisibleCategories] = useState(4); // Initially show only 4 categories
  const initialVisibleCount = 4; // Limit for visible categories initially

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(API_BASE_URL + "/category");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleViewMore = () => {
    setVisibleCategories(categories.length); // Show all categories when "View More" is clicked
  };

  const handleShowLess = () => {
    setVisibleCategories(initialVisibleCount); // Show only the initial 4 categories when "Show Less" is clicked
  };

  return (
    <div className={clsx("banner-area", spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {categories?.slice(0, visibleCategories).map((single, key) => (
            <div className="col-lg-6 col-md-6" key={key}>
              <BannerNineSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          {visibleCategories < categories.length ? (
            <button
              style={{
                border: "0px solid transparent",
                backgroundColor: "transparent",
                textDecoration: "underline",
                color: "grey"
              }}
              className="loadMore6"
              onClick={handleViewMore}
            >
              {t("VIEW MORE CATEGORIES")}
            </button>
          ) : (
            <button
              style={{
                border: "0px solid transparent",
                backgroundColor: "transparent",
                textDecoration: "underline",
                color: "grey"
              }}
              className="loadMore6"
              onClick={handleShowLess}
            >
              {t("SHOW LESS CATEGORIES")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

BannerNine.propTypes = {
  spaceBottomClass: PropTypes.string,
};

export default BannerNine;
