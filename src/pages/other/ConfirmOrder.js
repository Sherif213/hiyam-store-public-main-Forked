// src/components/ThankYou.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from './seo'; // Assuming you have a SEO component for SEO purposes
import LayoutOne from '../layouts/LayoutOne';

const ConfirmOrder = () => {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get('orderId'); // Get orderId from URL params

  return (
    <LayoutOne headerTop="visible">
      <SEO title="Thank You" description="Thank you page for your order." />
      <div className="thank-you-page pt-95 pb-100">
        <div className="container">
          <div className="thank-you-message text-center">
            <h1>Thank You for Your Order!</h1>
            <p>Your order ID is: <strong>{orderId}</strong></p>
            <p>We appreciate your purchase. Our team will get in touch with you soon!</p>
          </div>
        </div>
      </div>
    </LayoutOne>
  );
};

export default ConfirmOrder;
