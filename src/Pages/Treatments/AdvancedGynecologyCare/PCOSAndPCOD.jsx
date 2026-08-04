import React from "react";

const PCOSAndPCOD = () => {
  return (
    <main className="bg-white text-gray-700">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#fdf3f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-[#9d174d] font-medium tracking-[0.18em] uppercase text-sm mb-5">
              Women's Health
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              PCOS & PCOD Management
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl">
              Understanding PCOS and PCOD and receiving timely, personalized
              care can help manage symptoms, improve fertility, and support
              long-term health.
            </p>
          </div>
        </div>
      </section>

      {/* ================= UNDERSTANDING ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <p className="text-[#9d174d] font-medium mb-3">
              Understanding PCOS & PCOD
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Understanding PCOS & PCOD
            </h2>

            <div className="space-y-5 text-gray-600 leading-8">
              <p>
                Polycystic Ovary Syndrome (PCOS) and Polycystic Ovarian Disease
                (PCOD) are among the most common hormonal disorders affecting
                women of reproductive age. They can impact menstrual cycles,
                fertility, metabolism, skin, hair, and overall health.
              </p>

              <p>
                Although the terms PCOS and PCOD are often used
                interchangeably, PCOS is a hormonal and metabolic disorder
                that may require long-term medical management, while PCOD
                generally refers to enlarged ovaries containing multiple
                immature follicles.
              </p>

              <p>
                Early diagnosis and proper treatment can help manage symptoms,
                improve fertility, and reduce long-term health risks.
              </p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/pcos/understanding-pcos.webp"
              alt="Understanding PCOS and PCOD"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= DEFINITIONS ================= */}
      <section className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

          <div className="max-w-3xl mb-12">
            <p className="text-[#9d174d] font-medium mb-3">
              Important Definitions
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Important Definitions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-9">

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                PCOD (Polycystic Ovarian Disease):
              </h3>
              <p className="leading-7 text-gray-600">
                A condition in which the ovaries produce multiple immature
                follicles due to hormonal imbalance, leading to irregular
                ovulation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                PCOS (Polycystic Ovary Syndrome):
              </h3>
              <p className="leading-7 text-gray-600">
                A complex endocrine disorder characterized by irregular
                ovulation, increased androgen levels, and polycystic ovaries.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Ovulation:
              </h3>
              <p className="leading-7 text-gray-600">
                The release of a mature egg from the ovary.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Insulin Resistance:
              </h3>
              <p className="leading-7 text-gray-600">
                A condition in which the body's cells do not respond
                effectively to insulin, commonly associated with PCOS.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Hyperandrogenism:
              </h3>
              <p className="leading-7 text-gray-600">
                Excess production of male hormones causing acne, excessive
                hair growth, and hair thinning.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SYMPTOMS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="rounded-3xl overflow-hidden lg:sticky lg:top-24">
            <img
              src="/images/pcos/pcos-symptoms.webp"
              alt="Common Symptoms of PCOS and PCOD"
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div>
            <p className="text-[#9d174d] font-medium mb-3">
              Common Symptoms of PCOS & PCOD
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Common Symptoms of PCOS & PCOD
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Symptoms vary from woman to woman. Some women have only mild
              symptoms, while others may experience multiple health concerns.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Common Symptoms Include
            </h3>

            <ul className="space-y-4">
              {[
                "Irregular or absent menstrual periods",
                "Difficulty conceiving due to irregular ovulation",
                "Weight gain or difficulty losing weight",
                "Acne and oily skin",
                "Excess facial or body hair (Hirsutism)",
                "Hair thinning or hair loss",
                "Darkening of skin around the neck, armpits, or groin (Acanthosis Nigricans)",
                "Multiple small follicles in the ovaries on ultrasound",
                "Mood changes, anxiety, or depression",
                "Fatigue and low energy levels",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 leading-7 text-gray-600"
                >
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= ASSESSMENT ================= */}
      <section className="bg-[#fdf3f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="max-w-4xl">
            <p className="text-[#9d174d] font-medium mb-3">
              Comprehensive PCOS & PCOD Assessment
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Comprehensive PCOS & PCOD Assessment
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Accurate diagnosis requires a thorough evaluation, including:
            </p>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Detailed menstrual history",
                "Assessment of symptoms",
                "Physical examination",
                "Hormonal profile",
                "Blood sugar and insulin evaluation",
                "Thyroid function assessment",
                "Ultrasound examination of the ovaries",
                "Evaluation of fertility status",
                "Screening for metabolic syndrome and cardiovascular risk",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-700 leading-7"
                >
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-600 leading-8">
              Since every woman experiences PCOS differently, treatment should
              always be individualized.
            </p>
          </div>

        </div>
      </section>

      {/* ================= TREATMENT OPTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="max-w-4xl mb-14">
          <p className="text-[#9d174d] font-medium mb-3">
            Treatment Options for PCOS & PCOD
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Treatment Options for PCOS & PCOD
          </h2>
        </div>

        {/* LIFESTYLE MODIFICATION */}
        <div className="border-t border-gray-200 pt-10">

          <h3 className="text-2xl font-semibold text-gray-900 mb-5">
            1. Lifestyle Modification
          </h3>

          <p className="text-gray-600 leading-8 mb-8">
            Lifestyle changes form the foundation of PCOS management.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-5">
            Benefits
          </h4>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Improves hormonal balance",
              "Helps restore ovulation",
              "Supports weight loss",
              "Improves insulin sensitivity",
              "Reduces long-term complications",
              "Enhances fertility outcomes",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-600 leading-7">
                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

        </div>

        {/* IMAGE */}
        <div className="my-16 rounded-3xl overflow-hidden">
          <img
            src="/images/pcos/lifestyle-pcos.webp"
            alt="Lifestyle Modification for PCOS"
            className="w-full h-[360px] md:h-[480px] object-cover"
          />
        </div>

        {/* ================= MEDICATIONS ================= */}
        <div className="pt-8">

          <h3 className="text-2xl font-semibold text-gray-900 mb-5">
            2. Medications
          </h3>

          <p className="text-gray-600 leading-8 mb-8 max-w-4xl">
            Depending on symptoms and future pregnancy plans, treatment may
            include:
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-5">
            Options Include
          </h4>

          <ul className="space-y-4 max-w-5xl">
            {[
              "Medicines to regulate menstrual cycles",
              "Ovulation induction medications for women planning pregnancy",
              "Insulin-sensitizing medications such as Metformin",
              "Medications to reduce excessive androgen levels",
              "Acne treatment when required",
              "Weight management medications in selected women",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-600 leading-7">
                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 leading-8 mt-8 max-w-4xl">
            Treatment is always tailored according to age, symptoms, and
            reproductive goals.
          </p>

        </div>

        {/* ================= FERTILITY ================= */}
        <div className="mt-20 pt-12 border-t border-gray-200">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                3. Fertility Treatment
              </h3>

              <p className="text-gray-600 leading-8 mb-7">
                Women who do not conceive naturally may benefit from fertility
                treatments.
              </p>

              <h4 className="text-xl font-semibold text-gray-900 mb-5">
                Available options include:
              </h4>

              <ul className="space-y-4 text-gray-600 leading-7">
                <li>• Ovulation induction</li>
                <li>• Follicular monitoring</li>
                <li>• Intrauterine Insemination (IUI)</li>
                <li>• In Vitro Fertilization (IVF)</li>
                <li>
                  • Intracytoplasmic Sperm Injection (ICSI), when indicated
                </li>
              </ul>

            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/pcos/fertility-treatment.webp"
                alt="Fertility Treatment for PCOS"
                className="w-full h-[420px] object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ================= LIFESTYLE MANAGEMENT ================= */}
      <section className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-[#9d174d] font-medium mb-3">
                Lifestyle Management for PCOS & PCOD
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Lifestyle Management for PCOS & PCOD
              </h2>

              <p className="text-gray-600 leading-8">
                Healthy lifestyle habits play a major role in long-term
                management.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/pcos/healthy-lifestyle.webp"
                alt="Healthy Lifestyle for PCOS and PCOD"
                className="w-full h-[400px] object-cover"
              />
            </div>

          </div>

          {/* NUTRITION + EXERCISE */}
          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">

            {/* Nutrition */}
            <div>

              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Nutrition & Diet
              </h3>

              <ul className="space-y-3 text-gray-600 leading-7">
                <li>• Follow a balanced, high-fiber diet</li>
                <li>• Increase protein intake</li>
                <li>• Choose whole grains over refined carbohydrates</li>
                <li>• Reduce sugary foods and processed snacks</li>
                <li>• Maintain adequate hydration</li>
                <li>• Achieve and maintain a healthy weight</li>
              </ul>

            </div>

            {/* Exercise */}
            <div>

              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Exercise
              </h3>

              <p className="text-gray-600 leading-7 mb-4">
                Regular physical activity helps:
              </p>

              <ul className="space-y-3 text-gray-600 leading-7 mb-6">
                <li>• Improve insulin sensitivity</li>
                <li>• Promote weight loss</li>
                <li>• Restore ovulation</li>
                <li>• Improve mood</li>
                <li>• Reduce stress</li>
              </ul>

              <p className="font-medium text-gray-900 mb-3">
                Recommended activities:
              </p>

              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
                <li>• Brisk walking</li>
                <li>• Strength training</li>
                <li>• Cycling</li>
                <li>• Yoga</li>
                <li>• Aerobic exercise</li>
              </ul>

            </div>

          </div>

        </div>
      </section>

      {/* ================= STRESS & SLEEP ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="max-w-5xl">

          <p className="text-[#9d174d] font-medium mb-3">
            Stress & Sleep Management
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Stress & Sleep Management
          </h2>

          <p className="text-gray-600 leading-8 mb-7">
            Healthy sleep and stress control are equally important.
          </p>

          <p className="font-medium text-gray-900 mb-4">
            Helpful strategies include:
          </p>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600">
            <li>• Maintain a regular sleep schedule</li>
            <li>• Practice yoga and meditation</li>
            <li>• Stress reduction techniques</li>
            <li>• Mindfulness exercises</li>
            <li>
              • Cognitive Behavioural Therapy (CBT), when appropriate
            </li>
          </ul>

        </div>

      </section>

      {/* ================= LONG TERM RISKS ================= */}
      <section className="bg-[#fdf3f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-[#9d174d] font-medium mb-3">
                Long-Term Health Risks of PCOS
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Long-Term Health Risks of PCOS
              </h2>

              <p className="text-gray-600 leading-8 mb-7">
                If left untreated, PCOS may increase the risk of
              </p>

              <ul className="space-y-4 text-gray-600 leading-7">
                <li>• Type 2 Diabetes</li>
                <li>• High blood pressure</li>
                <li>• High cholesterol</li>
                <li>• Heart disease</li>
                <li>• Endometrial hyperplasia</li>
                <li>• Endometrial cancer</li>
                <li>• Sleep apnea</li>
                <li>• Infertility</li>
                <li>• Pregnancy complications</li>
              </ul>

              <p className="text-gray-600 leading-8 mt-8">
                Regular follow-up helps reduce these risks.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/pcos/long-term-health.webp"
                alt="Long-Term Health Risks of PCOS"
                className="w-full h-[480px] object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= WHEN TO CONSULT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="rounded-3xl overflow-hidden lg:order-1">
            <img
              src="/images/pcos/consult-doctor.webp"
              alt="Consult a Doctor for PCOS and PCOD"
              className="w-full h-[450px] object-cover"
            />
          </div>

          <div className="lg:order-2">

            <p className="text-[#9d174d] font-medium mb-3">
              Medical Consultation
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              When to Consult a Doctor
            </h2>

            <p className="text-gray-600 leading-8 mb-7">
              You should seek medical advice if you experience:
            </p>

            <ul className="space-y-4 text-gray-600 leading-7">
              <li>• Irregular or absent periods</li>
              <li>• Difficulty conceiving</li>
              <li>• Excessive facial or body hair</li>
              <li>• Persistent acne</li>
              <li>• Rapid weight gain</li>
              <li>• Hair thinning</li>
              <li>• Symptoms of insulin resistance</li>
              <li>• Heavy or prolonged menstrual bleeding</li>
            </ul>

            <p className="text-gray-600 leading-8 mt-8">
              Early diagnosis leads to better symptom control and improved
              reproductive health.
            </p>

          </div>

        </div>

      </section>

      {/* ================= PERSONALIZED CARE ================= */}
      <section className="bg-[#fdf3f7]">

        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">

          <p className="text-[#9d174d] font-medium mb-3">
            Personalized PCOS & PCOD Care
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-7">
            Personalized PCOS & PCOD Care
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Every woman with PCOS or PCOD has unique symptoms and treatment
            goals. Modern management focuses on personalized care that
            combines lifestyle modification, medical therapy, fertility
            support, and long-term health monitoring.
          </p>

          <p className="text-gray-700 leading-8 text-lg mt-7">
            With timely diagnosis, expert guidance, and individualized
            treatment, most women with PCOS or PCOD can achieve healthy
            menstrual cycles, improved fertility, and a better quality of
            life.
          </p>

        </div>

      </section>

    </main>
  );
};

export default PCOSAndPCOD;