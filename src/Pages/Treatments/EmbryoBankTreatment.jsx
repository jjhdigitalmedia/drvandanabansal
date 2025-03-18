import React from "react";
import PageBanner from "../PageBanner";
import { Helmet } from "react-helmet";
const EmbryoBankTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Embryo Bank Treatment: Dr. Vandana Bansal</title>
        <meta name="description" content="Get expert gynecology consultations and women's health care services." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <PageBanner />
      <div className="w-11/12 md:w-4/5 m-auto pt-10 pb-24">
        <h1 className="font-bold text-3xl my-3"> EmbryoBank</h1>
        <p>
          The world is a different place today than that in which our mothers and
          grandmothers lived. Many of today's modern couples choose to start a
          family later in life. Embryo Banking allows these couples the chance to
          freeze embryos and delay starting their families until the time is
          right. Also, during the IVF process many couples naturally produce an
          embryo surplus. Freezing surplus embryos until future cycles can
          circumvent additional egg retrievals. And last, for singles & couples
          with little time left on their fertility clock, Embryo Banking is an
          ideal strategy and gives the best insurance for starting a family later,
          especially if they want more than one child.
        </p>
      </div>
    </>
  );
};

export default EmbryoBankTreatment;
