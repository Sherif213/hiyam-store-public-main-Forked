import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerNine";
import TabProductFive from "../../wrappers/product/TabProductFive";
import BannerTwentySeven from "../../wrappers/banner/BannerTwentySeven";
import LayoutThree from "../../layouts/LayoutThree";
import HeaderTop from "../../components/header/HeaderTop";
import TabProductFour from "../../wrappers/product/TabProductFour";
import TabProductTwentyOne from "../../wrappers/product/TabProductTwentyOne";
import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const HomeCosmetics = () => {
  const {t}=useTranslation()
  return (
    <Fragment>
      <SEO
        titleTemplate="Cosmetics Home"
        description="Cosmetics home of Hiyam react minimalist eCommerce template."
      />
     
      <LayoutOne headerTop="visible"
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderEight />
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />
        {/* tab product */}
        <TabProductFive
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
          category="cosmetics"
        />
        {/* feature icon */}
       
        {/* testimonial */}
        <h1 style={{textAlign:'center',fontSize:'35px',margin:'1rem 0 1rem 0rem'}}>{t("Customer's Comments")}</h1>
        <TestimonialOne spaceBottomClass="pb-95" />
        {/* banner */}
       
                <h4 style={{textAlign:'center',fontSize:'35px',margin:'1rem 0 5rem 0rem'}}>{t("Categories")}</h4>
             
        <BannerNine spaceBottomClass="pb-70" />
        {/* brand logo slider */}
      {/*   <BrandLogoSliderOne spaceBottomClass="pb-95" /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCosmetics;
