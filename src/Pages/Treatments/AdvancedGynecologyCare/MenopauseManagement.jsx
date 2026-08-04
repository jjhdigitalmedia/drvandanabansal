import React from "react";

const MenopauseManagement = () => {
  return (
    <main className="bg-white text-gray-700">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#fdf3f7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[#9d174d] font-medium tracking-[0.18em] uppercase text-sm mb-5">
              Women's Health
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              Menopause Management
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-2xl">
              Understanding menopause and receiving personalized care can help
              women maintain excellent physical, emotional, and sexual
              wellbeing during and after menopause.
            </p>
          </div>
        </div>
      </section>

      {/* ================= UNDERSTANDING MENOPAUSE ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div>
            <p className="text-[#9d174d] font-medium mb-3">
              Understanding Menopause
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              Understanding Menopause
            </h2>

            <p className="text-gray-600 leading-8">
              Menopause is a natural phase in a woman’s life marked by the
              permanent cessation of menstruation due to declining ovarian
              function and reduced hormone production, especially estrogen.
              The average age of menopause is between 45 and 55 years,
              although some women may experience it earlier.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/menopause/understanding-menopause.webp"
              alt="Understanding Menopause"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= IMPORTANT DEFINITIONS ================= */}
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

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Perimenopause:
              </h3>
              <p className="leading-7 text-gray-600">
                The transitional phase before menopause when hormone levels
                fluctuate and menstrual cycles become irregular.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Menopause:
              </h3>
              <p className="leading-7 text-gray-600">
                The final menstrual period, confirmed after 12 consecutive
                months without periods.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Post menopause:
              </h3>
              <p className="leading-7 text-gray-600">
                The phase after menopause has occurred.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Early Menopause:
              </h3>
              <p className="leading-7 text-gray-600">
                Menopause occurring between 40–44 years of age.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Premature Ovarian Insufficiency (POI):
              </h3>
              <p className="leading-7 text-gray-600">
                Menopause occurring before the age of 40.
              </p>
            </div>

          </div>

          <p className="mt-12 text-gray-600 leading-8 max-w-4xl">
            Menopause may occur naturally or may be induced due to surgery,
            chemotherapy, radiotherapy, or removal of ovaries.
          </p>
        </div>
      </section>

      {/* ================= SYMPTOMS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="rounded-3xl overflow-hidden lg:sticky lg:top-24">
            <img
              src="/images/menopause/menopause-symptoms.webp"
              alt="Common Symptoms of Menopause"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-[#9d174d] font-medium mb-3">
              Common Symptoms of Menopause
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Common Symptoms of Menopause
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Menopausal symptoms vary from woman to woman. While some
              experience mild symptoms, others may have moderate to severe
              symptoms that significantly affect their quality of life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-5">
              Common Symptoms Include
            </h3>

            <ul className="space-y-4">
              {[
                "Hot flashes and night sweats",
                "Irregular menstrual cycles",
                "Mood swings, anxiety, or low mood",
                "Sleep disturbances",
                "Fatigue and reduced energy",
                "Brain fog and difficulty concentrating",
                "Vaginal dryness",
                "Painful intercourse (dyspareunia)",
                "Reduced libido",
                "Urinary urgency or recurrent urinary tract infections",
                "Joint and muscle pain",
                "Headaches or migraines",
                "Skin crawling sensations (formication)",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 leading-7 text-gray-600">
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
              Comprehensive Menopause Assessment
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Comprehensive Menopause Assessment
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Effective menopause management begins with a detailed medical
              evaluation, including:
            </p>

            <ul className="space-y-4">
              {[
                "Assessment of symptoms and their impact on quality of life",
                "Menstrual and bleeding history",
                "Cardiovascular risk assessment",
                "Bone health and osteoporosis screening",
                "Breast and gynecological evaluation",
                "Review of contraception needs during perimenopause",
                "Identification of contraindications to hormone therapy",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700 leading-7">
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-600 leading-8">
              A personalized treatment plan is essential because every woman
              experiences menopause differently.
            </p>
          </div>

        </div>
      </section>

      {/* ================= TREATMENT OPTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="max-w-4xl mb-14">
          <p className="text-[#9d174d] font-medium mb-3">
            Treatment Options for Menopause
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Treatment Options for Menopause
          </h2>
        </div>

        {/* MHT */}
        <div className="border-t border-gray-200 pt-10">

          <h3 className="text-2xl font-semibold text-gray-900 mb-5">
            1. Menopausal Hormone Therapy (MHT / HRT)
          </h3>

          <p className="text-gray-600 leading-8 max-w-4xl">
            Menopausal Hormone Therapy is the most effective treatment for
            menopausal symptoms, especially hot flashes and night sweats.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mt-10 mb-5">
            Benefits of Hormone Therapy
          </h4>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "Reduces hot flashes and night sweats",
              "Improves sleep quality",
              "Helps stabilize mood",
              "Improves vaginal dryness and sexual comfort",
              "Supports bone health",
              "May reduce the risk of osteoporosis and cardiovascular disease in selected women",
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
            src="/images/menopause/hormone-therapy.webp"
            alt="Menopause Hormone Therapy"
            className="w-full h-[360px] md:h-[480px] object-cover"
          />
        </div>

        {/* TYPES OF HORMONE THERAPY */}
        <div className="max-w-5xl">

          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Types of Hormone Therapy
          </h3>

          <div className="space-y-10">

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Estrogen Therapy
              </h4>

              <p className="text-gray-600 leading-8 mb-4">
                Recommended for women who have undergone hysterectomy.
              </p>

              <p className="font-medium text-gray-900 mb-3">
                Available as:
              </p>

              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
                <li>• Tablets</li>
                <li>• Patches</li>
                <li>• Gels</li>
                <li>• Sprays</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Combined Estrogen + Progesterone Therapy
              </h4>

              <p className="text-gray-600 leading-8 mb-4">
                Required for women who still have a uterus to protect the
                endometrium.
              </p>

              <p className="font-medium text-gray-900 mb-3">
                Can be given as:
              </p>

              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
                <li>• Cyclical therapy</li>
                <li>• Continuous combined therapy</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Tibolone
              </h4>

              <p className="text-gray-600 leading-8">
                A synthetic hormone with estrogenic, progestogenic, and
                androgenic effects, useful in postmenopausal women,
                particularly those with low libido.
              </p>
            </div>

          </div>

        </div>

        {/* ================= VAGINAL ESTROGEN ================= */}
        <div className="mt-20 pt-12 border-t border-gray-200">

          <h3 className="text-2xl font-semibold text-gray-900 mb-5">
            2. Vaginal Estrogen Therapy
          </h3>

          <p className="text-gray-600 leading-8 mb-8">
            Low-dose vaginal estrogen is highly effective for:
          </p>

          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Vaginal dryness",
              "Burning and irritation",
              "Painful intercourse",
              "Recurrent urinary infections",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 text-gray-600">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#9d174d] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="font-medium text-gray-900 mt-8 mb-3">
            Available as:
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
            <li>• Creams</li>
            <li>• Tablets</li>
            <li>• Vaginal rings</li>
          </ul>

          <p className="text-gray-600 leading-8 mt-7 max-w-4xl">
            This treatment has minimal systemic absorption and is considered
            safe for many women.
          </p>

        </div>

        {/* ================= NON HORMONAL ================= */}
        <div className="mt-20 pt-12 border-t border-gray-200">

          <h3 className="text-2xl font-semibold text-gray-900 mb-5">
            3. Non-Hormonal Prescription Medications
          </h3>

          <p className="text-gray-600 leading-8 mb-8 max-w-4xl">
            For women who cannot take hormone therapy or prefer non-hormonal
            treatment, several medications may help.
          </p>

          <h4 className="text-xl font-semibold text-gray-900 mb-5">
            Options Include
          </h4>

          <ul className="space-y-5 max-w-5xl">
            <li className="text-gray-600 leading-7">
              <strong className="text-gray-900">
                Fezolinetant (Veozah):
              </strong>{" "}
              Helps reduce moderate to severe hot flashes.
            </li>

            <li className="text-gray-600 leading-7">
              <strong className="text-gray-900">
                SSRIs/SNRIs:
              </strong>{" "}
              Certain antidepressants such as paroxetine may reduce hot
              flashes and improve mood.
            </li>

            <li className="text-gray-600 leading-7">
              <strong className="text-gray-900">
                Gabapentin:
              </strong>{" "}
              Useful for hot flashes and sleep disturbances.
            </li>

            <li className="text-gray-600 leading-7">
              <strong className="text-gray-900">
                Clonidine:
              </strong>{" "}
              May help reduce vasomotor symptoms.
            </li>
          </ul>

        </div>

      </section>

      {/* ================= LIFESTYLE ================= */}
      <section className="bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-[#9d174d] font-medium mb-3">
                Lifestyle Management During Menopause
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Lifestyle Management During Menopause
              </h2>

              <p className="text-gray-600 leading-8">
                Healthy lifestyle changes can significantly improve
                menopausal symptoms and overall wellbeing.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/menopause/lifestyle-menopause.webp"
                alt="Lifestyle Management During Menopause"
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
                <li>• Eat a balanced, nutrient-rich diet</li>
                <li>• Ensure adequate calcium and vitamin D intake</li>
                <li>• Maintain healthy body weight</li>
                <li>
                  • Limit caffeine, alcohol, and spicy foods if they trigger
                  symptoms
                </li>
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
                <li>• Maintain bone strength</li>
                <li>• Improve mood</li>
                <li>• Reduce weight gain</li>
                <li>• Improve sleep quality</li>
              </ul>

              <p className="font-medium text-gray-900 mb-3">
                Recommended activities:
              </p>

              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-gray-600">
                <li>• Walking</li>
                <li>• Strength training</li>
                <li>• Yoga</li>
                <li>• Aerobic exercise</li>
              </ul>
            </div>

            {/* Sleep */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Sleep & Stress Management
              </h3>

              <p className="font-medium text-gray-900 mb-3">
                Helpful strategies include:
              </p>

              <ul className="space-y-3 text-gray-600 leading-7">
                <li>• Good sleep hygiene</li>
                <li>• Relaxation techniques</li>
                <li>• Meditation and mindfulness</li>
                <li>• Cognitive Behavioural Therapy (CBT)</li>
              </ul>
            </div>

            {/* Natural */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Natural & Complementary Therapies
              </h3>

              <p className="text-gray-600 leading-7 mb-4">
                Some women choose complementary therapies for symptom relief.
              </p>

              <p className="font-medium text-gray-900 mb-3">
                Commonly used options include:
              </p>

              <ul className="space-y-3 text-gray-600 leading-7">
                <li>• Black cohosh</li>
                <li>• Red clover extract</li>
                <li>• Lemon balm</li>
                <li>• Valerian</li>
                <li>• Passionflower</li>
              </ul>
            </div>

          </div>

          <p className="mt-14 text-gray-600 leading-8 max-w-5xl">
            Although some women find relief, scientific evidence remains
            limited. Always consult a qualified healthcare professional
            before starting herbal or alternative therapies.
          </p>

        </div>
      </section>

      {/* ================= WHEN HORMONE THERAPY NOT SUITABLE ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

        <div className="max-w-5xl">

          <p className="text-[#9d174d] font-medium mb-3">
            Important Considerations
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-7">
            When Hormone Therapy May Not Be Suitable
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            Hormone therapy may not be recommended in women with:
          </p>

          <ul className="space-y-4 text-gray-600 leading-7">
            <li>• Hormone-dependent cancers (breast or endometrial cancer)</li>
            <li>• Undiagnosed vaginal bleeding</li>
            <li>• Active liver disease</li>
            <li>• Recent cardiovascular events</li>
            <li>• Active venous thromboembolism</li>
            <li>• Certain rare metabolic conditions</li>
          </ul>

          <p className="text-gray-600 leading-8 mt-8">
            A detailed medical consultation is essential before starting
            therapy.
          </p>

        </div>

        {/* ================= POI ================= */}
        <div className="mt-20 pt-12 border-t border-gray-200 max-w-5xl">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Premature Ovarian Insufficiency (POI)
          </h2>

          <p className="text-gray-600 leading-8 mb-7">
            Women experiencing menopause before the age of 40 require
            specialized evaluation and long-term management.
          </p>

          <p className="text-gray-600 leading-8 mb-5">
            Hormone therapy is usually recommended until the average age of
            natural menopause unless contraindicated, to help protect:
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>• Bone health</li>
            <li>• Heart health</li>
            <li>• Overall wellbeing</li>
          </ul>

        </div>

      </section>

      {/* ================= WHEN TO CONSULT ================= */}
      <section className="bg-[#fdf3f7]">
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
                You should seek medical advice if menopausal symptoms:
              </p>

              <ul className="space-y-4 text-gray-600 leading-7">
                <li>• Affect your quality of life</li>
                <li>• Disturb sleep</li>
                <li>• Cause emotional distress</li>
                <li>• Interfere with work or relationships</li>
                <li>• Lead to sexual discomfort</li>
                <li>• Cause abnormal bleeding</li>
              </ul>

              <p className="text-gray-600 leading-8 mt-8">
                Early evaluation helps ensure safe, effective, and
                individualized treatment.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="/images/menopause/consult-doctor.webp"
                alt="Consult a Doctor for Menopause Management"
                className="w-full h-[450px] object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= PERSONALIZED CARE ================= */}
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-20 lg:py-28 text-center">

        <p className="text-[#9d174d] font-medium mb-3">
          Personalized Menopause Care
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-7">
          Personalized Menopause Care
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          Every woman’s menopause journey is unique. Modern menopause
          management focuses on individualized care that combines medical
          expertise, lifestyle support, and long-term preventive health
          strategies.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-7">
          With the right guidance and treatment, women can maintain excellent
          physical, emotional, and sexual wellbeing during and after
          menopause.
        </p>

      </section>

    </main>
  );
};

export default MenopauseManagement;