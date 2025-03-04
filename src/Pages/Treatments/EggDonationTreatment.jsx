import React from "react";
import PageBanner from "../PageBanner";
import { Helmet } from "react-helmet";

const EggDonationTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Egg Donation Treatmetn</title>
        <meta name="description" content="Get expert gynecology consultations and women's health care services." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <PageBanner />
      <div className="w-11/12 md:w-4/5 m-auto pt-10 pb-24">
        <h1 className="font-bold text-3xl my-3"> EggDonation</h1>
        <p>
          Egg donation is the process by which a woman provides one or several
          (usually 10-15) eggs (ova, oocytes) for purposes of assisted
          reproduction or biomedical research. For assisted reproduction purposes,
          egg donation involves the process of in vitro fertilization as the eggs
          are fertilized in the laboratory. Egg donation is part of the process of
          third party reproduction as part of ART (Assisted Reproductive
          Technology).
        </p>
        <p>
          It is considered for women who is a poor responder to the ovulation
          induction drugs, has reduced ovarian reserve, or is a carrier of a
          genetic condition.
        </p>
        <p>
          All the steps are IVF are performed except the egg donor undergoes the
          ovulation induction and egg retrieval. Once the eggs are retrieved ,
          they are Fertilized with the partner’s sperms. Legal, medical and Psycho
          logic counseling are required.
        </p>
      </div>
    </>
  );
};

export default EggDonationTreatment;
