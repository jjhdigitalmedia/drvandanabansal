import React from "react";

const Facilities = () => {
  return (
    <div className="w-11/12 md:w-4/5 m-auto pt-10 pb-24">
      <h1 className="font-bold text-3xl my-3">
        Facilities available at our IVF centre
      </h1>
      <p>
        In our IVF (In Vitro Fertilization) centre, a variety of procedures are
        performed to assist individuals and couples in achieving pregnancy. Here
        are some common procedures:
      </p>

      <ul>
        <li>
          <h3 className="font-semibold text-xl my-3">
            1. Ovulation Induction:{" "}
          </h3>
          <p>
            This involves the use of medications to stimulate the ovaries to
            produce multiple eggs. It's often the initial step in fertility
            treatment, especially for women who do not ovulate regularly or have
            irregular menstrual cycles.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">
            2. Egg Retrieval (Oocyte Retrieval):{" "}
          </h3>
          <p>
            During this procedure, eggs are collected from the ovaries using a
            thin needle guided by ultrasound imaging. This typically occurs
            under sedation or anaesthesia and is a minimally invasive procedure.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">
            3. Sperm Collection and Preparation:
          </h3>
          <p>
            Sperm samples are collected from the male partner (or donor) and
            processed in the laboratory to isolate healthy sperm for
            fertilization.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">4. Fertilization:</h3>
          <p>
            In conventional IVF, eggs and sperm are combined in a laboratory
            dish and left to fertilize naturally. Alternatively,
            intracytoplasmic sperm injection (ICSI) may be used, where a single
            sperm is injected directly into each mature egg to facilitate
            fertilization.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">5. Embryo Culture:</h3>
          <p>
            Fertilized eggs (embryos) are cultured in the laboratory for several
            days to allow them to develop and grow. The embryos are monitored
            closely for signs of viability.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">6. Embryo Transfer:</h3>
          <p>
            Once embryos reach a certain stage of development (typically 3 to 5
            days after fertilization), one or more embryos are transferred into
            the woman's uterus using a thin catheter. This procedure is usually
            performed without anaesthesia.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">
            7. Embryo Cryopreservation:
          </h3>
          <p>
            Extra embryos that are not transferred during the initial IVF cycle
            may be frozen (cryopreserved) for future use. This allows patients
            to undergo frozen embryo transfer (FET) cycles without the need for
            additional egg retrieval procedures.
          </p>
        </li>
        <li>
          <h3 className="font-semibold text-xl my-3">
            8. Artificial Insemination (IUI):
          </h3>
          <p>
            This procedure relies on the natural ability of sperm to fertilize
            an egg within the reproductive tract. The sperm from the male
            partner is collected and then washed in the lab to improve motility
            and concentrated sperm are then placed in the uterus using a thin
            catheter inserted through the cervix during the most fertile time in
            the menstrual cycle.
          </p>
          <p>IUI Is Often Recommended for Women or Couples Who:</p>
          <ul>
            <li>
              • Have ovulation problems and are undergoing ovulation induction
            </li>
            <li>• Are unable to have normal intercourse</li>
            <li>• Have mild male factor infertility</li>
            <li>• Have unexplained infertility</li>
          </ul>
          <p>
            Donor Sperm is used only when a male partner has an abnormal semen
            report. The procedure is simple and does not require anesthesia or
            hospitalization.
          </p>
        </li>
        <li>
          9. IVM (In Vitro Maturation) - New ART Procedure: In vitro egg
          maturation or IVM - Instead of removing fully mature eggs from the
          ovaries and then fertilizing them, IVF Specialists remove immature
          eggs, ripen them in a lab dish, and then add sperm. The rest of the
          procedure is the same as IVF, the time required for stimulation is
          reduced greatly. This may be particularly useful for women who suffer
          from polycystic ovarian syndrome, a hormonal disorder that disrupts
          ovulation.
        </li>
      </ul>
    </div>
  );
};

export default Facilities;
