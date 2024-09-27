import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import GoogleMap from "../../components/google-map"
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../utils";

const Contact = () => {
  let { pathname } = useLocation();
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const fd = new FormData();
  fd.append("name", name);
  fd.append("email", email);
  fd.append("orderId", orderId);
  fd.append("message", message);
  fd.append("image", file);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(API_BASE_URL + "/contact", {
        method: "POST",
        body: fd,
      });
      console.log(res);

      if (res.status === 201) {
        toast.success("Your message has been sent.");
        setName("");
        setEmail("");
        setOrderId("");
        setMessage("");
        setFile(null);
        setLoading(false);
      } else {
        const data = await res.json();
        console.log(data);
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of Hiyam react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: t("Home"), path: process.env.PUBLIC_URL + "/" },
            { label: t("Contact"), path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10">
              <GoogleMap lat={47.444} lng={-122.176} />
            </div> */}
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>0532 446 59 02</p>
                      <p>0532 446 59 02</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:hiyamcosmetics@gnpmail.com">
                          hiyamcosmetics@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="https://hiyamcosmetics.com">
                          hiyamcosmetics.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                      <div className="contact-icon">
                        
                      <i  className="fa fa-map-marker" />
                   <span style={{marginLeft:'1rem'}}> MERKEZ MAH. ECE SK.</span>
                   <p style={{marginLeft:'4rem'}}> A10 BLOK NO: 16 E İÇ KAPI NO:3</p>
                   <p style={{marginLeft:'4rem'}}> KAĞITHANE / İSTANBUL </p>
                    </div> 
                  </div>
                  <div className="contact-social text-center">
                    <h3>{t("Follow Us")}</h3>
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/hiyam.cosmetic?igsh=Y3lqbjd2ZW0xcHM3">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>

                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>{t("Get In Touch")}</h2>
                  </div>
                  <form className="contact-form-style" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="name"
                          placeholder={t("Name*")}
                          type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="email"
                          placeholder={t("Email*")}
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="order number"
                          placeholder={t("Order ID*")}
                          type="text"
                          onChange={(e) => setOrderId(e.target.value)}
                          value={orderId}
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="col-lg-12">
                        <label>{t("Receipt Image")}</label>
                        <input
                          type="file"
                          name="receiptImage"
                          onChange={handleFileChange}
                          accept="image/*"
                          required
                          disabled={loading}
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder={t("Your Message*")}
                          defaultValue={""}
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          required
                          disabled={loading}
                        />
                        <button className="submit" type="submit">
                          {t(loading ? "SENDING..." : "SEND")}
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
