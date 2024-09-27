import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Rating from "./sub-components/ProductRating";
import { getDiscountPrice } from "../../helpers/product";
import ProductModal from "./ProductModal";
import { addToCart } from "../../store/slices/cart-slice";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { useTranslation } from "react-i18next";

const ProductGridSingle = ({
  product,
  currency,
  cartItem,
  wishlistItem,
  compareItem,
  spaceBottomClass,
}) => {
  const {t}=useTranslation()
  const [modalShow, setModalShow] = useState(false);
  const discountedPrice = getDiscountPrice(product?.price, product?.discount);
  const finalProductPrice = +(product?.price * currency.currencyRate).toFixed(
    2
  );
  const finalDiscountedPrice = +(
    discountedPrice * currency.currencyRate
  ).toFixed(2);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={clsx("product-wrap", spaceBottomClass)}>
        <div className="product-img">
          <Link to={process.env.PUBLIC_URL + "/product/" + product?.id}>
            <img
              className="default-img"
              src={process.env.PUBLIC_URL + product?.image[0]}
              alt=""
            />
            {product?.image.length > 1 ? (
              <img
                className="hover-img"
                src={process.env.PUBLIC_URL + product?.image[1]}
                alt=""
              />
            ) : (
              ""
            )}
          </Link>
          {product?.discount || product?.new ? (
            <div className="product-img-badges">
              {product?.discount ? (
                <span className="pink">-{product?.discount}%</span>
              ) : (
                ""
              )}
              {product?.new ? <span className="purple">{t("New")}</span> : ""}
            </div>
          ) : (
            ""
          )}

          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
              <button
                className={wishlistItem !== undefined ? t("active") : ""}
                disabled={wishlistItem !== undefined}
                title={
                  wishlistItem !== undefined
                    ? t("Added to wishlist")
                    : t("Add to wishlist")
                }
                onClick={() => dispatch(addToWishlist(product))}
              >
                <i className="pe-7s-like" />
              </button>
            </div>
            <div className="pro-same-action pro-cart">
              {product?.affiliateLink ? (
                <a
                  href={t(product?.affiliateLink)}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  {t("Buy now")}{" "}
                </a>
              ) : product?.variation && product?.variation.length >= 1 ? (
                <Link to={`${process.env.PUBLIC_URL}/product/${product?.id}`}>
                  {t("Select Option")}
                </Link>
              ) : product?.stock && product?.stock > 0 ? (
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={
                    cartItem !== undefined && cartItem.quantity > 0
                      ? t("active")
                      : ""
                  }
                  disabled={cartItem !== undefined && cartItem.quantity > 0}
                  title={
                    cartItem !== undefined ? t("Added to cart") : t("Add to cart")
                  }
                >
                  {" "}
                  <i className="pe-7s-cart"></i>{" "}
                  {cartItem !== undefined && cartItem.quantity > 0
                    ? t("Added")
                    :t("Add to cart")}
                </button>
              ) : (
                <button disabled className="active">
                  {t("Out of Stock")}
                </button>
              )}
            </div>
            <div className="pro-same-action pro-quickview">
              <button title={t("Quick View")} onClick={() => setModalShow(true)}>
                <i className="pe-7s-look" />
              </button>
            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3>
            <Link to={process.env.PUBLIC_URL + "/product/" + product?.id}>
              {t(product?.name)}
            </Link>
          </h3>
          {product?.rating && product?.rating > 0 ? (
            <div className="product-rating">
              <Rating ratingValue={product?.rating} />
            </div>
          ) : (
            ""
          )}
          <div className="product-price">
            {product?.oldPrice!== null ? (
              <Fragment>
                <span>{currency.currencySymbol + product?.price}</span>{" "}
                <span className="old">
                  {currency.currencySymbol + product?.oldPrice}
                </span>
              </Fragment>
            ) : (
              <span>{currency.currencySymbol + product?.price} </span>
            )}
          </div>
        </div>
      </div>
      {/* product modal */}
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
        currency={currency}
        discountedPrice={discountedPrice}
        finalProductPrice={finalProductPrice}
        finalDiscountedPrice={finalDiscountedPrice}
        wishlistItem={wishlistItem}
        compareItem={compareItem}
      />
    </Fragment>
  );
};

ProductGridSingle.propTypes = {
  cartItem: PropTypes.shape({}),
  compareItem: PropTypes.shape({}),
  wishlistItem: PropTypes.shape({}),
  currency: PropTypes.shape({}),
  product: PropTypes.shape({}),
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default ProductGridSingle;
