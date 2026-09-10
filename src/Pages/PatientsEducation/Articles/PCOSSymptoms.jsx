// import React from "react";
// import ArticleLayout from "../ArticleLayout";
import { Helmet } from 'react-helmet-async';
const PCOSSymptoms = () => {
  return (<>
    <Helmet>
      <title>PCOS Symptoms: Common Signs Every Woman Should Know | Dr. Vandana Bansal</title>
      <meta name="description" content="Learn about common PCOS symptoms including irregular periods, acne, unwanted hair growth, weight changes, hair thinning and fertility problems. Get expert PCOS and fertility care from Dr. Vandana Bansal in Prayagraj." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
    
    <article className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#f11f1f1] py-16">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-700">
            Women's Health | PCOS
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            PCOS Symptoms: Common Signs Every Woman Should Know
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            PCOS is a common hormonal condition that can affect periods,
            fertility, skin, hair, weight and overall metabolic health.
            Recognizing the symptoms early can help women seek the right care
            and manage the condition effectively.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6">
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              What is PCOS?
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Polycystic Ovary Syndrome (PCOS) is a hormonal and metabolic
              condition that commonly affects women during their reproductive
              years. It can influence ovulation, menstrual cycles and the
              body's response to insulin. Symptoms can vary from woman to
              woman, which is why PCOS may look different in different
              individuals.
            </p>
          </div>

          {/* Symptoms */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Common Symptoms of PCOS
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "1. Irregular or Missed Periods",
                  text: "One of the most common signs of PCOS is having irregular periods, very long cycles or occasionally missing periods. This can happen when ovulation does not occur regularly.",
                },
                {
                  title: "2. Difficulty Getting Pregnant",
                  text: "PCOS can affect regular ovulation and may therefore make conception more difficult for some women. However, PCOS-related infertility is often treatable with lifestyle changes, ovulation treatment and, when required, fertility treatments.",
                },
                {
                  title: "3. Excess Facial or Body Hair",
                  text: "Higher levels or increased sensitivity to androgens can cause unwanted hair growth on areas such as the face, chin, chest or abdomen. This condition is known as hirsutism.",
                },
                {
                  title: "4. Acne and Oily Skin",
                  text: "Hormonal changes associated with PCOS may contribute to persistent acne, oily skin or acne that continues beyond the usual teenage years.",
                },
                {
                  title: "5. Hair Thinning or Hair Loss",
                  text: "Some women with PCOS may experience thinning of scalp hair or increased hair fall, particularly around the crown or front of the scalp.",
                },
                {
                  title: "6. Weight Gain or Difficulty Losing Weight",
                  text: "Some women with PCOS experience weight gain or find it difficult to lose weight. Insulin resistance may contribute to these metabolic changes, although PCOS can also occur in women who are not overweight.",
                },
                {
                  title: "7. Darkening of Skin",
                  text: "Dark, velvety patches of skin, especially around the neck, underarms or groin, may sometimes be associated with insulin resistance and can occur in women with PCOS.",
                },
              ].map((symptom, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
                >
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {symptom.title}
                  </h3>
                  <p className="leading-7 text-gray-600">
                    {symptom.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <div className="mb-12 rounded-2xl border-l-4 border-pink-700 bg-pink-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Does Having These Symptoms Mean You Have PCOS?
            </h2>

            <p className="leading-7 text-gray-700">
              Not necessarily. These symptoms can also occur due to other
              hormonal or medical conditions. PCOS is diagnosed based on a
              combination of medical history, symptoms, examination and
              appropriate investigations. An ultrasound may be helpful in
              some cases, but polycystic-appearing ovaries alone do not
              confirm PCOS.
            </p>
          </div>

          {/* Management */}
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Can PCOS Be Managed?
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-600">
              Yes. PCOS is a manageable condition, and treatment is
              individualized according to a woman's symptoms, age, fertility
              goals and metabolic health.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="font-bold text-pink-700">✓</span>
                Healthy and balanced nutrition
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-pink-700">✓</span>
                Regular physical activity and healthy weight management
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-pink-700">✓</span>
                Treatment for irregular periods and hormonal symptoms
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-pink-700">✓</span>
                Appropriate treatment when pregnancy is desired
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-pink-700">✓</span>
                Monitoring of metabolic health when required
              </li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="border-t border-gray-200 pt-10">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Take Your Symptoms Seriously
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              Irregular periods, unwanted hair growth, acne, hair thinning or
              difficulty conceiving should not simply be ignored. Early
              evaluation can help identify the underlying cause and create a
              personalized treatment plan. With the right approach, women
              with PCOS can manage their symptoms, protect their long-term
              health and achieve their fertility goals when desired.
            </p>

            <div className="mt-8 rounded-2xl bg-gray-900 p-7 text-white">
              <h3 className="text-2xl font-semibold">
                Expert PCOS & Fertility Care
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Dr. Vandana Bansal provides personalized care for PCOS,
                hormonal health, infertility and women's reproductive health.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <ArticleLayout/> */}
    </article>
  </>
  );
};

export default PCOSSymptoms;