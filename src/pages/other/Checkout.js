import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useAuth } from "../../context/Auth";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../utils";
import { Spinner } from "react-bootstrap";
import { deleteAllFromCart } from "../../store/slices/cart-slice";
import { useTranslation } from "react-i18next";

const Checkout = () => {
  const { t } = useTranslation();
  let cartTotalPrice = 0;
  const { authenticated, user, token, updateUser } = useAuth();
  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log("Cart Items: ", cartItems);

  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [country, setCountry] = useState(user?.country || "");
  const [address1, setAddress1] = useState(user?.address1 || "");
  const [address2, setAddress2] = useState(user?.address2 || "");
  const [city, setCity] = useState(user?.city || "");
  const [state, setState] = useState(user?.state || "");
  const [zip, setZip] = useState(user?.zip || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("creditCard"); // Default to Credit Card

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiryYear: "",
    expiryMonth: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    number: "",
    name: "",
    expiryYear: "",
    expiryMonth: "",
    cvv: "",
  });

  // Regular expressions for validation
  const cardNumberRegex = /^[0-9]{16}$/;
  const expiryMonthRegex = /^(0[1-9]|1[0-2])$/; // Matches MM (01-12)
  const expiryYearRegex = /^[0-9]{4}$/; // Matches YYYY (4 digits)
  const cvvRegex = /^[0-9]{3,4}$/; // 3 or 4 digits for CVV

  const handleChangeCardInfo = (e) => {
    const { name, value } = e.target;

    if (name !== "name") {
      if (!value.match(/^[0-9]*$/)) {
        return;
      }
    }

    setCardInfo({ ...cardInfo, [name]: value });

    // Remove error when typing
    setErrors({ ...errors, [name]: "" });
  };

  const validateCard = () => {
    let formIsValid = true;
    let newErrors = {
      number: "",
      name: "",
      expiryYear: "",
      expiryMonth: "",
      cvv: "",
    };

    if (!cardInfo.number.match(cardNumberRegex)) {
      formIsValid = false;
      newErrors.number = "Card number must be 16 digits.";
    }

    if (cardInfo.name.trim() === "") {
      formIsValid = false;
      newErrors.name = "Cardholder name is required.";
    }

    if (!cardInfo.expiryMonth.match(expiryMonthRegex)) {
      formIsValid = false;
      newErrors.expiryMonth = "Expiry month must be in MM format.";
    }

    if (!cardInfo.expiryYear.match(expiryYearRegex)) {
      formIsValid = false;
      newErrors.expiryYear = "Expiry year must be 4 digits (YYYY).";
    }

    if (!cardInfo.cvv.match(cvvRegex)) {
      formIsValid = false;
      newErrors.cvv = "CVV must be 3 or 4 digits.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  useEffect(() => {
    if (!authenticated) {
      toast.info("You must login first!");
      window.location.href = "/login-register";
    }
  }, [authenticated]);

  const data = {
    firstName,
    lastName,
    email: user?.email,
    country,
    address1,
    address2,
    city,
    state,
    zip,
    phone,
    notes,
    cardHolderName: cardInfo.name,
    cardNumber: cardInfo.number,
    expireMonth: cardInfo.expiryMonth,
    expireYear: cardInfo.expiryYear,
    cvc: cardInfo.cvv,
    products: [
      ...cartItems.map((item) => ({
        id: item?.id,
        quantity: item?.quantity || 1,
      })),
    ],
    paymentMethod:
      paymentMethod === "creditCard" ? "Payment" : "bank-transfer",
    totalAmount: cartTotalPrice,
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    if (paymentMethod === "creditCard" && !validateCard()) {
      toast.info("Please enter valid credit card details.");
      return;
    }
  
    try {
      setLoading(true);
      const url = "http://hayimcoesmotics.store/paymentprocess.php"; 
      console.log("Request URL:", url);
  
      const requestBody = {
        firstName,
        lastName,
        email: user?.email,
        address1,
        address2,
        state,
        zip,
        phone,
        notes,
        cardHolderName: cardInfo.name,
        cardNumber: cardInfo.number,
        expireMonth: cardInfo.expiryMonth,
        expireYear: cardInfo.expiryYear,
        cvc: cardInfo.cvv,
        products: cartItems.map((item) => ({
          id: item?.id,
          quantity: item?.quantity || 1,
        })),
        paymentMethod: paymentMethod === "creditCard" ? "Payment" : "bank-transfer",
        totalAmount: cartTotalPrice,
      };
  
      console.log("Request Body:", requestBody);
  
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      console.log("Response received", res);
  
      const contentType = res.headers.get("content-type");
      let resData;
      if (contentType && contentType.includes("application/json")) {
        // resData = await res.json();
        console.log("Response Data:", resData);
      } else {
        console.error("Received non-JSON response");
        throw new Error("Received non-JSON response");
      }
  
      console.log("Response Status:", res.status);
      console.log("Response OK:", res.ok);
  
      if (res.ok) {
        console.log("Response OK");
        updateUser(resData?.user);
        toast.success("Thank You for your order!");
        dispatch(deleteAllFromCart());
        
  
        const orderId = resData?.id || "Order ID not available";
        toast.info(`Your Order ID is: ${orderId}`);
        const orderUrl = API_BASE_URL + "/orders/place";
            const orderRes = await fetch(orderUrl, {
                method: "POST",
                headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            const orderResData = await orderRes.json();
            console.log("Order Response Data:", orderResData);

        
        // window.location.href = "/shop-grid-standard";
      } else {
        console.log("Response not OK");
        toast.error(
          resData?.error ||
          resData?.message ||
          "Something went wrong! Please try again."
        );
      }
    } catch (error) {
      console.log("Error:", error);
      toast.error("Server error! Please try again later.");
    } finally {
      setLoading(false);
      console.log("Loading set to false");
    }
  };
  
  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of hiyam react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("Home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("Checkout"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <form className="row" onSubmit={placeOrder}>
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>{t("Billing Details")}</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("First Name")}</label>
                          <input
                            type="text"
                            value={t(firstName)}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Last Name")}</label>
                          <input
                            type="text"
                            value={t(lastName)}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            disabled={loading}
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Company Name</label>
                          <input type="text" />
                        </div>
                      </div> */}
                      {/* <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>{t("Country")}</label>
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            disabled={loading}
                            required
                          >
                            <option value={""} disabled selected>
                              {t("Select a country")}
                            </option>
                            <option value={"Azerbaijan"}>Azerbaijan</option>
                            <option value={"Bahamas"}>Bahamas</option>
                            <option value={"Bahrain"}>Bahrain</option>
                            <option value={"Bangladesh"}>Bangladesh</option>
                            <option value={"Barbados"}>Barbados</option> 
                          </select>
                        </div>
                      </div> */}
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{t("Street Address")}</label>
                          <input
                            className="billing-address"
                            placeholder={t("House number and street name")}
                            type="text"
                            value={address1}
                            required
                            onChange={(e) => setAddress1(e.target.value)}
                            disabled={loading}
                          />
                          <input
                            placeholder={t("Apartment, suite, unit etc.")}
                            type="text"
                            value={address2}
                            required
                            onChange={(e) => setAddress2(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      {/*  <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>{t("Town / City")}</label>
                          <input
                            type="text"
                            value={city}
                            required
                            onChange={(e) => setCity(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div> */}
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("State / County")}</label>
                          <input
                            type="text"
                            required
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Postcode / ZIP")}</label>
                          <input
                            type="number"
                            required
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Phone")}</label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>{t("Email Address")}</label>
                          <input
                            style={{ background: "#ddd" }}
                            disabled
                            required
                            type="email"
                            value={user?.email}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>{t("Additional information")}</h4>
                      <div className="additional-info">
                        <label>{t("Order notes")}</label>
                        <textarea
                          placeholder={t(
                            "Notes about your order, e.g. special notes for delivery."
                          )}
                          name="message"
                          defaultValue={""}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>{t("Your order")}</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>{t("Product")}</li>
                            <li>{t("Total")}</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                  cartItem.price * cartItem.quantity)
                                : (cartTotalPrice +=
                                  cartItem.price * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          cartItem.price *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          cartItem.price * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">
                              {t("Shipping")}
                            </li>
                            <li>{t("Free shipping")}</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">{t("Total")}</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method d-flex flex-column gap-3">
                        <h4>{t("Select the Payment Method")}</h4>

                        <div className="d-flex align-items-center">
                          <input
                            type="radio"
                            id="bank-transfer"
                            name="paymentMethod"
                            value="bankTransfer"
                            onChange={handlePaymentMethodChange}
                            checked={paymentMethod === "bankTransfer"}
                            className="small-radio"
                          />
                          <label htmlFor="bank-transfer" className="ms-2">
                            {t("Bank Transfer/EFT")}
                          </label>
                        </div>

                        <div className="d-flex align-items-center">
                          <input
                            type="radio"
                            id="credit-card"
                            name="paymentMethod"
                            value="creditCard"
                            onChange={handlePaymentMethodChange}
                            checked={paymentMethod === "creditCard"}
                            className="small-radio"
                          />
                          <label htmlFor="credit-card" className="ms-2">
                            {t("Credit Card")}
                          </label>
                        </div>

                        {paymentMethod === "bankTransfer" && (
                          <div className="bank-transfer-info mt-3">
                            <h5>{t("Bank Transfer Information")}</h5>
                            <p>
                              {t("Account Name")}: {t("HIYAM KATANOĞLU")}
                            </p>
                            <p>{t("IBAN")}: TR040020500009930489100001</p>
                            <p>
                              <strong>
                                {t(
                                  "To Confirm your order ,please transfer the total amount to the provided IBAN and Send the reciept to the contact form in the Contact Us page"
                                )}
                              </strong>
                            </p>
                          </div>
                        )}

                        {paymentMethod === "creditCard" && (
                          <div className="credit-card-info mt-3">
                            <h5>{t("Credit Card Information")}</h5>
                            <div>
                              <label>{t("Card Holder Name")}</label>
                              <input
                                type="text"
                                value={cardInfo.name}
                                disabled={loading}
                                required
                                name="name"
                                onChange={handleChangeCardInfo}
                              />
                            </div>
                            <div>
                              <label>{t("Card Number")}</label>
                              <input
                                maxLength={16}
                                value={t(cardInfo.number)}
                                disabled={loading}
                                required
                                name="number"
                                onChange={handleChangeCardInfo}
                                placeholder={t("Enter 16-digit card number")}
                              />
                              {errors?.number && (
                                <span className="text-danger">
                                  {errors.number}
                                </span>
                              )}
                            </div>
                            <div>
                              <label>{t("Expiry Month")}</label>
                              <input
                                maxLength={2}
                                value={t(cardInfo.expiryMonth)}
                                disabled={loading}
                                required
                                name="expiryMonth"
                                placeholder="MM"
                                onChange={handleChangeCardInfo}
                              />
                              {errors.expiryMonth && (
                                <span className="text-danger">
                                  {errors.expiryMonth}
                                </span>
                              )}
                            </div>
                            <div>
                              <label>{t("Expiry Year")}</label>
                              <input
                                maxLength={4}
                                value={cardInfo.expiryYear}
                                disabled={loading}
                                placeholder="YYYY"
                                required
                                name="expiryYear"
                                onChange={handleChangeCardInfo}
                              />
                              {errors.expiryYear && (
                                <span className="text-danger">
                                  {errors.expiryYear}
                                </span>
                              )}
                            </div>
                            <div>
                              <label>CVV</label>
                              <input
                                maxLength={4}
                                value={cardInfo.cvv}
                                disabled={loading}
                                required
                                onChange={handleChangeCardInfo}
                                name="cvv"
                                placeholder="CVV"
                              />
                              {errors.cvv && (
                                <span className="text-danger">
                                  {errors.cvv}
                                </span>
                              )}
                            </div>
                          </div>
                        )} 
                      </div>
                    </div>
                    <div className="place-order mt-25">
                      <button
                        disabled={loading}
                        type="submit"
                        className="btn-hover"
                        style={{
                          opacity: loading ? 0.5 : 1,
                        }}
                      >
                        {loading ? (
                          <Spinner
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                            animation="border"
                          />
                        ) : (
                          t("Place Order")
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      {t("No items found in cart to checkout")} <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        {t("Shop Now")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
