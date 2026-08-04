import React from "react";

const HeavyBleeding = () => {
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
              Heavy Menstrual Bleeding Management
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-3xl">
              Understanding the causes of heavy menstrual bleeding and
              receiving timely, individualized treatment can help improve
              symptoms, quality of life, and long-term reproductive health.
            </p>

          </div>
        </div>
      </section>

      {/* ================= UNDERSTANDING HMB ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>

            <p className="text-[#9d174d] font-medium mb-3">
              Understanding Heavy Menstrual Bleeding
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Understanding Heavy Menstrual Bleeding
            </h2>

            <div className="space-y-5 text-gray-600 leading-8">

              <p>
                Heavy Menstrual Bleeding (HMB), also known as Menorrhagia, is
                a common gynecological condition in which menstrual bleeding is
                excessive in volume, lasts longer than normal, or interferes
                with a woman's daily life. While every woman's menstrual cycle
                is different, excessively heavy or prolonged periods are not
                considered normal and should be evaluated by a gynecologist.
              </p>

              <p>
                Heavy menstrual bleeding can affect women of all ages—from
                adolescence to perimenopause—and may lead to anemia, fatigue,
                reduced quality of life, and fertility concerns if left
                untreated.
              </p>

            </div>

          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/heavy-menstrual-bleeding/understanding-hmb.webp"
              alt="Understanding Heavy Menstrual Bleeding"
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
                Heavy Menstrual Bleeding (HMB):
              </h3>

              <p className="leading-7 text-gray-600">
                Menstrual bleeding that is excessive enough to interfere with
                physical, emotional, social, or daily activities.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Menorrhagia:
              </h3>

              <p className="leading-7 text-gray-600">
                Medical term for abnormally heavy or prolonged menstrual
                bleeding.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Abnormal Uterine Bleeding (AUB):
              </h3>

              <p className="leading-7 text-gray-600">
                Any bleeding that differs from the normal menstrual pattern in
                timing, duration, or amount.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Anemia:
              </h3>

              <p className="leading-7 text-gray-600">
                A condition caused by low hemoglobin levels due to excessive
                blood loss.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Dysmenorrhea:
              </h3>

              <p className="leading-7 text-gray-600">
                Painful menstrual cramps that may accompany heavy bleeding.
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
              src="/images/heavy-menstrual-bleeding/hmb-symptoms.webp"
              alt="Symptoms of Heavy Menstrual Bleeding"
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div>

            <p className="text-[#9d174d] font-medium mb-3">
              Common Symptoms of Heavy Menstrual Bleeding
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Common Symptoms of Heavy Menstrual Bleeding
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Symptoms may vary depending on the underlying cause and
              severity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Common Symptoms Include
            </h3>

            <ul className="space-y-4">

              {[
                "Soaking one or more sanitary pads or tampons every hour for several hours",
                "Passing large blood clots during periods",
                "Menstrual bleeding lasting longer than 7 days",
                "Needing to change pads or tampons during the night",
                "Fatigue, weakness, or dizziness due to blood loss",
                "Shortness of breath caused by anemia",
                "Severe menstrual cramps",
                "Difficulty carrying out daily activities during menstruation",
                "Irregular or unpredictable menstrual bleeding",
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

      {/* ================= CAUSES ================= */}
      <section className="bg-[#fdf3f7]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-[#9d174d] font-medium mb-3">
                Common Causes of Heavy Menstrual Bleeding
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Common Causes of Heavy Menstrual Bleeding
              </h2>

              <p className="text-gray-600 leading-8 mb-8">
                Heavy menstrual bleeding may occur due to various medical
                conditions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Common Causes Include
              </h3>

              <ul className="space-y-4 text-gray-600 leading-7">

                {[
                  "Hormonal imbalance",
                  "Uterine fibroids",
                  "Adenomyosis",
                  "Endometrial polyps",
                  "Endometriosis",
                  "Polycystic Ovary Syndrome (PCOS)",
                  "Thyroid disorders",
                  "Bleeding disorders",
                  "Copper intrauterine device (IUCD)",
                  "Pregnancy-related complications",
                  "Endometrial hyperplasia or, rarely, uterine cancer",
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                    {item}
                  </li>
                ))}

              </ul>

            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/heavy-menstrual-bleeding/common-causes.webp"
                alt="Common Causes of Heavy Menstrual Bleeding"
                className="w-full h-[520px] object-cover"
              />
            </div>

          </div>

        </div>

      </section>

      {/* ================= COMPREHENSIVE EVALUATION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="max-w-5xl">

          <p className="text-[#9d174d] font-medium mb-3">
            Comprehensive Evaluation
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Comprehensive Evaluation
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            A detailed evaluation helps identify the exact cause of heavy
            menstrual bleeding.
          </p>

          <p className="font-medium text-gray-900 mb-5">
            Assessment may include:
          </p>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">

            {[
              "Detailed menstrual history",
              "Physical and pelvic examination",
              "Blood tests including complete blood count (CBC)",
              "Iron studies if anemia is suspected",
              "Hormonal evaluation",
              "Thyroid function tests",
              "Pregnancy test when indicated",
              "Pelvic ultrasound",
              "Saline infusion sonography (when required)",
              "Hysteroscopy for evaluation of the uterine cavity",
              "Endometrial biopsy in selected women",
            ].map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-gray-600 leading-7"
              >
                <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {item}
              </li>
            ))}

          </ul>

          <p className="mt-8 text-gray-600 leading-8">
            An individualized treatment plan is essential because the cause
            of heavy bleeding differs from one woman to another.
          </p>

        </div>

      </section>

      {/* ================= TREATMENT OPTIONS ================= */}
      <section className="bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="max-w-4xl mb-14">

            <p className="text-[#9d174d] font-medium mb-3">
              Treatment Options for Heavy Menstrual Bleeding
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Treatment Options for Heavy Menstrual Bleeding
            </h2>

          </div>

          {/* ================= MEDICAL MANAGEMENT ================= */}
          <div className="border-t border-gray-200 pt-10">

            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              1. Medical Management
            </h3>

            <p className="text-gray-600 leading-8 mb-8 max-w-4xl">
              Many women can be successfully treated with medications.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-5">
              Benefits
            </h4>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">

              {[
                "Reduces menstrual blood loss",
                "Relieves pain",
                "Improves quality of life",
                "Corrects anemia",
                "Helps regulate menstrual cycles",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-600 leading-7"
                >
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  {item}
                </li>
              ))}

            </ul>

            <h4 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
              Treatment options may include:
            </h4>

            <ul className="space-y-4 text-gray-600 leading-7">

              {[
                "Non-steroidal anti-inflammatory drugs (NSAIDs)",
                "Tranexamic acid",
                "Hormonal tablets",
                "Progesterone therapy",
                "Combined oral contraceptive pills",
                "Levonorgestrel-releasing intrauterine system (LNG-IUS)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* ================= IMAGE ================= */}
          <div className="my-16 rounded-3xl overflow-hidden">

            <img
              src="/images/heavy-menstrual-bleeding/medical-treatment.webp"
              alt="Medical Management of Heavy Menstrual Bleeding"
              className="w-full h-[360px] md:h-[480px] object-cover"
            />

          </div>

          {/* ================= SURGICAL TREATMENT ================= */}
          <div className="pt-8">

            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              2. Surgical Treatment
            </h3>

            <p className="text-gray-600 leading-8 mb-8 max-w-4xl">
              When medications are ineffective or structural abnormalities
              are present, surgical treatment may be recommended.
            </p>

            <h4 className="text-xl font-semibold text-gray-900 mb-5">
              Available options include:
            </h4>

            <ul className="space-y-4 text-gray-600 leading-7">

              {[
                "Hysteroscopic polyp removal",
                "Fibroid removal (Myomectomy)",
                "Endometrial ablation (selected women)",
                "Hysteroscopic surgery",
                "Hysterectomy (when appropriate)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  {item}
                </li>
              ))}

            </ul>

            <p className="text-gray-600 leading-8 mt-8 max-w-4xl">
              The choice of procedure depends on age, symptoms, future
              pregnancy plans, and the underlying cause.
            </p>

          </div>

          {/* ================= UNDERLYING CONDITIONS ================= */}
          <div className="mt-20 pt-12 border-t border-gray-200">

            <h3 className="text-2xl font-semibold text-gray-900 mb-5">
              3. Treatment of Underlying Conditions
            </h3>

            <p className="text-gray-600 leading-8 mb-7">
              Managing the underlying cause is essential for long-term relief.
            </p>

            <p className="font-medium text-gray-900 mb-4">
              This may include treatment for:
            </p>

            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600">

              <li>• Fibroids</li>
              <li>• Adenomyosis</li>
              <li>• PCOS</li>
              <li>• Thyroid disorders</li>
              <li>• Bleeding disorders</li>
              <li>• Endometrial abnormalities</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= LIFESTYLE MANAGEMENT ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>

            <p className="text-[#9d174d] font-medium mb-3">
              Lifestyle Management
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Lifestyle Management
            </h2>

            <p className="text-gray-600 leading-8">
              Healthy habits can support medical treatment and improve
              overall wellbeing.
            </p>

          </div>

          <div className="rounded-3xl overflow-hidden">

            <img
              src="/images/heavy-menstrual-bleeding/lifestyle-management.webp"
              alt="Lifestyle Management for Heavy Menstrual Bleeding"
              className="w-full h-[400px] object-cover"
            />

          </div>

        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-14">

          {/* Nutrition */}
          <div>

            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Nutrition & Diet
            </h3>

            <ul className="space-y-3 text-gray-600 leading-7">
              <li>• Eat iron-rich foods</li>
              <li>• Increase green leafy vegetables and fruits</li>
              <li>• Include protein-rich foods</li>
              <li>• Take iron supplements if prescribed</li>
              <li>• Stay well hydrated</li>
              <li>• Maintain a healthy body weight</li>
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
              <li>• Improve overall health</li>
              <li>• Maintain healthy body weight</li>
              <li>• Reduce stress</li>
              <li>• Improve energy levels</li>
              <li>• Support hormonal balance</li>
            </ul>

            <p className="font-medium text-gray-900 mb-3">
              Recommended activities:
            </p>

            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
              <li>• Walking</li>
              <li>• Yoga</li>
              <li>• Cycling</li>
              <li>• Strength training</li>
              <li>• Aerobic exercise</li>
            </ul>

          </div>

        </div>

      </section>

      {/* ================= ANEMIA ================= */}
      <section className="bg-[#fdf3f7]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="rounded-3xl overflow-hidden">

              <img
                src="/images/heavy-menstrual-bleeding/anemia-management.webp"
                alt="Managing Anemia in Heavy Menstrual Bleeding"
                className="w-full h-[420px] object-cover"
              />

            </div>

            <div>

              <p className="text-[#9d174d] font-medium mb-3">
                Managing Anemia
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Managing Anemia
              </h2>

              <p className="text-gray-600 leading-8 mb-7">
                Women with heavy menstrual bleeding are at increased risk of
                iron deficiency anemia.
              </p>

              <p className="font-medium text-gray-900 mb-4">
                Management may include:
              </p>

              <ul className="space-y-4 text-gray-600 leading-7">
                <li>• Iron-rich diet</li>
                <li>• Oral iron supplements</li>
                <li>• Iron infusions when required</li>
                <li>• Regular monitoring of hemoglobin levels</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= POSSIBLE COMPLICATIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="max-w-5xl">

          <p className="text-[#9d174d] font-medium mb-3">
            Possible Complications
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Possible Complications
          </h2>

          <p className="text-gray-600 leading-8 mb-7">
            If left untreated, heavy menstrual bleeding may lead to:
          </p>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600 leading-7">

            <li>• Iron deficiency anemia</li>
            <li>• Chronic fatigue</li>
            <li>• Reduced quality of life</li>
            <li>• Fertility problems (depending on the cause)</li>
            <li>• Emotional stress and anxiety</li>
            <li>• Severe blood loss requiring emergency treatment</li>

          </ul>

          <p className="text-gray-600 leading-8 mt-8">
            Early diagnosis helps prevent these complications.
          </p>

        </div>

      </section>

      {/* ================= WHEN TO CONSULT ================= */}
      <section className="bg-[#fafafa]">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>

              <p className="text-[#9d174d] font-medium mb-3">
                Medical Consultation
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                When to Consult a Doctor
              </h2>

              <p className="text-gray-600 leading-8 mb-7">
                Seek medical attention if you experience:
              </p>

              <ul className="space-y-4 text-gray-600 leading-7">

                <li>• Bleeding lasting more than 7 days</li>
                <li>• Excessive bleeding requiring frequent pad changes</li>
                <li>• Passing large blood clots</li>
                <li>• Severe menstrual pain</li>
                <li>• Dizziness or fainting</li>
                <li>• Symptoms of anemia</li>
                <li>• Bleeding after menopause</li>
                <li>• Irregular bleeding between periods</li>

              </ul>

              <p className="text-gray-600 leading-8 mt-8">
                Prompt evaluation ensures timely diagnosis and appropriate
                treatment.
              </p>

            </div>

            <div className="rounded-3xl overflow-hidden">

              <img
                src="/images/heavy-menstrual-bleeding/consult-doctor.webp"
                alt="Consult a Doctor for Heavy Menstrual Bleeding"
                className="w-full h-[450px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= PERSONALIZED CARE ================= */}
      <section className="bg-[#fdf3f7]">

        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">

          <p className="text-[#9d174d] font-medium mb-3">
            Personalized Care for Heavy Menstrual Bleeding
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-7">
            Personalized Care for Heavy Menstrual Bleeding
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            Every woman experiences heavy menstrual bleeding differently.
            Modern treatment focuses on identifying the underlying cause and
            providing individualized care through medication, minimally
            invasive procedures, lifestyle guidance, and advanced
            gynecological treatment when required.
          </p>

          <p className="text-gray-700 leading-8 text-lg mt-7">
            With expert evaluation and personalized management, most women can
            achieve effective symptom relief, restore their quality of life,
            and maintain long-term reproductive and overall health.
          </p>

        </div>

      </section>

    </main>
  );
};

export default HeavyBleeding;