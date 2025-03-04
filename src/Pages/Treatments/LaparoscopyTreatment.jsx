import React from "react";
import PageBanner from "../PageBanner";
import { Helmet } from "react-helmet";
const LaparoscopyTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Laparoscopy Treatment</title>
        <meta name="description" content="Get expert gynecology consultations and women's health care services." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <PageBanner />
      <div className="w-11/12 md:w-1/2 m-auto pt-40 pb-24">
        <h1 className="font-bold text-3xl my-3">Sonography</h1>
        <p>
          Vaginal Sonography, which is a base line scan. An ultrasound scan is carried out to check the ovaries and the endometrial lining. In addition, fibroids in the uterus and cysts in the ovaries can be diagnosed. When scan is done several times during ovulation phase it is called Follicular monitoring – to visualize the development of follicles (each follicle has within itself an egg) and the lining of the uterus.
        </p>
      </div>
    </>
  );
};

export default LaparoscopyTreatment;
