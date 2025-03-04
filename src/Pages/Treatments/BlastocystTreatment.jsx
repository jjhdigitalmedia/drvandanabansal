import React from "react";
import PageBanner from "../PageBanner";
import { Helmet } from "react-helmet";

const BlastocystTreatment = () => {
  return (
    <>
      <Helmet>
        <title>Blastocyst Treatment</title>
        <meta name="description" content="Get expert gynecology consultations and women's health care services." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <PageBanner />
      <div className="w-11/12 md:w-4/5 m-auto pt-10 pb-24">
        <h1 className="font-bold text-3xl my-3"> Blastocyst</h1>
        <p>
          In conventional IVF the embryo transfer is done in the uterus after 48
          hours at 4-8 cell stage. In natural conception the embryo reaches the
          uterine cavity only on day FIVE. With the availability of new extended
          culture medium, we can now culture the embryos in the laboratory till
          the blastocyst stage (i.e. day 5-6). Thereby increasing the chances of
          success dramatically to 50%.
        </p>
        <p>
          Recent advances in blastocyst culture and transfer have resulted in
          improved IVF pregnancy rates and reduced multiple pregnancy rates.
          Traditionally, embryos are transferred to the uterus on day three
          (called Day 3 transfer) after fertilization and it is not uncommon to
          transfer three or four embryos. However, it is now possible to grow
          embryos in the laboratory to the blastocyst stage of development, which
          occurs on day five after fertilization when the embryo has 50-200 cells.
          Typically, the strongest, healthiest embryos make it to blastocyst stage
          as they have survived key growth and division processes and have a
          better chance of implanting once transferred. The selection of
          potentially more viable embryos allows the embryologist to transfer
          fewer embryos, often one or two, lowering the risk of high order
          multiples while maintaining high pregnancy rates.
        </p>
        <p>
          Blastocyst transfer is not an option for all IVF patients. The technique
          is most successful with patients who are younger and have a large number
          of eggs available at retrieval. On average, patients with six or more
          high quality embryos on day three are the best candidates for blastocyst
          culture because there is a better chance of more embryos growing
          successfully to day five.
        </p>
      </div>
    </>
  );
};

export default BlastocystTreatment;
