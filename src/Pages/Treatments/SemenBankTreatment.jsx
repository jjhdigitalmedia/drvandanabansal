import React from "react";
import PageBanner from "../PageBanner";
import { Helmet } from "react-helmet";
const SemenBankTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Semen Bank Treatment</title>
        <meta name="description" content="Get expert gynecology consultations and women's health care services." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <PageBanner />
      <div className="w-11/12 md:w-4/5 m-auto pt-40 pb-24">
        <h1 className="font-bold text-3xl my-3"> SemenBank</h1>
        <p>
          We maintain a dedicated Semen Bank. We have one of the best Semen Bank
          in India. The male partners sperms are routinely frozen for cryopooling
          and for IVF, or prior to treatment of cancer or any major surgery. We
          screen all donors for HIV HbsAg VDRL every three months. Carefully look
          into any family history of diabetes, hypertension, congenital anomalies
          and blood disorders. Donors physical characteristics are matched with
          the recipient in terms of height, physique, colour of skin/eyes/hair,
          texture of hair, caste religion, IQ, Blood Group, General/Financial
          Status in society. Donors are recruited only when they meet our
          requirements and are continued if their fertility status is proved. We
          ensure close confidentiality for both the donor and the recipient.
        </p>
        <p>
          We have latest instruments for transportation of washed semen samples in
          “Lab condition” (i.e. 37°C and 5% Co2) to else where. Donor’s / Male
          Partner's processed Semen sample is available to outside consultants on
          request.
        </p>
      </div>
    </>
  );
};

export default SemenBankTreatment;
