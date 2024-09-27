import { useTranslation } from "react-i18next";


const ShopSearch = () => {
  const {t}=useTranslation()
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">{t("Search")} </h4>
      <div className="pro-sidebar-search mb-50 mt-25">
        <form className="pro-sidebar-search-form" action="#">
          <input type="text" placeholder={t("Search here...")} />
          <button>
            <i className="pe-7s-search" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShopSearch;
