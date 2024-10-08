import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";

import MenuCart from "./sub-components/MenuCart";
import { useAuth } from "../../context/Auth";
import { useTranslation } from "react-i18next";

const IconGroup = ({ iconWhiteClass }) => {
  const { t } = useTranslation();
  const { authenticated: isAuthenticated, logout: handleLogout } = useAuth();

  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={handleClick}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div>
      </div>

      {/* Desktop Account Dropdown */}
      <div className="same-style account-setting d-none d-lg-block">
        <button className="account-setting-active" onClick={handleClick}>
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <button
                    style={{
                      border: "0px solid black",
                      backgroundColor: "transparent",
                      fontSize: "13px",
                      textAlign: "left",
                    }}
                    onClick={handleLogout}
                  >
                    {t("Logout")}
                  </button>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    {t("My Account")}
                  </Link>
                </li>
                <li>
                <a href="https://hiyam-store-dashboard.vercel.app/login" target="_blank" rel="noopener noreferrer">
                  {t("Admin Login")}
                </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    {t("Login")}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    {t("Register")}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    {t("Admin Login")}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile Account Dropdown */}
      <div style={{marginRight:'-1.2rem'}} className="same-style account-setting d-block d-lg-none">
        <button className="account-setting-active" onClick={handleClick}>
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            {isAuthenticated ? (
              <>
                <li>
                  <button
                    style={{
                      border: "0px solid black",
                      backgroundColor: "transparent",
                      fontSize: "13px",
                      textAlign: "left",
                    }}
                    onClick={handleLogout}
                  >
                    {t("Logout")}
                  </button>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/my-account"}>
                    {t("My Account")}
                  </Link>
                </li>
                <li>
                <a href="https://hiyam-store-dashboard.vercel.app/login" target="_blank" rel="noopener noreferrer">
                  {t("Admin Login")}
                </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    {t("Login")}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    {t("Register")}
                  </Link>
                </li>
                <li>
                  <Link to={process.env.PUBLIC_URL + "/login-register"}>
                    {t("Admin Login")}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareItems && compareItems.length ? compareItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistItems && wishlistItems.length ? wishlistItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartItems && cartItems.length ? cartItems.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
};

export default IconGroup;
