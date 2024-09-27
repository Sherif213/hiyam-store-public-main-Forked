import PropTypes from "prop-types";
import { setActiveSort } from "../../helpers/product";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils";
import { useTranslation } from "react-i18next";

const ShopCategories = ({ getSortParams }) => {
  const [categories, setCategories] = useState([]);
const {t}=useTranslation()
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(API_BASE_URL + "/category");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);
  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    getSortParams("category", category);
    setActiveSort(e);
  };

  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">{t("Categories")}</h4>
      <div className="sidebar-widget-list mt-30">
        {categories ? (
          <ul>
            <li>
              <div className="sidebar-widget-list-left">
                <button onClick={(e) => handleCategoryClick(e, "")}>
                  <span className="checkmark" /> {t("All Categories")}
                </button>
              </div>
            </li>
            {categories.map((category, key) => (
              <li key={key}>
                <div className="sidebar-widget-list-left">
                  <button
                    onClick={(e) => handleCategoryClick(e, t(category?.title))}
                  >
                    <span className="checkmark" /> {t(category?.title)}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          t("No categories found")
        )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func.isRequired,
};

export default ShopCategories;
