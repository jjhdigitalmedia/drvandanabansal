// src/NotFound.js
import React from 'react';
import { Helmet } from 'react-helmet';
const NotFound = () => {
  return (
    <div className='my-52 text-center'>
      <Helmet>
        <title>404: This page could not be found.</title>
        <meta name="description" content="The page you’re looking for could not be found. It may have been moved, deleted, or the URL may have been entered incorrectly. Please use the search bar to find related content or visit our homepage for information on Dr. Vandana Bansal’s IVF, gynecology, and fertility services. If you need further assistance, feel free to contact us. We’re here to help you with all your women’s health needs." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
