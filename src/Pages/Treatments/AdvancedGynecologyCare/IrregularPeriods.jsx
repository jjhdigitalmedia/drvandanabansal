import IrregularPeriodsImage from '../../../assets/Treatments/IrregularPeriodsImage.png'
import PeriodsImgae from '../../../assets/TreatmentPages/IrregularPeriods/PeriodsImgae.png'
import IrregularCycle from '../../../assets/TreatmentPages/IrregularPeriods/IrregularCycle.jpg'

function IrregularPeriods() {
  return (
    <div className="bg-pin-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src={IrregularPeriodsImage}
          alt="Women's Health"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-4xl text-white">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Irregular Periods
            </h1>
            <p className="text-lg leading-8 md:text-xl">
              Expert Care for Women’s Health & Hormonal Wellness
            </p>
          </div>
        </div>
      </section> 

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-3xl bg-white p-8 shadow- md:p-12">
          <h2 className="mb-6 text-4xl font-bold text-pink-800">
            Overview
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            Irregular periods are a common gynecological concern affecting women of all ages. A normal menstrual cycle usually occurs every 21 to 35 days and lasts between 4 to 7 days. Variations outside this range may indicate hormonal imbalance, lifestyle-related factors, or underlying medical conditions requiring evaluation and treatment.
          </p>

          <p className="mb-10 leading-8 text-gray-700">
            At Vandana Clinic, we provide comprehensive diagnosis and personalized treatment plans to help restore menstrual regularity, improve hormonal health, and enhance overall well-being.
          </p>

          <img
            src={PeriodsImgae}
            alt="Gynecology"
            className="mb-14 h-[450px] w-full rounded-3xl object-cover shadow-lg"
          />

          <h2 className="mb-6 text-4xl font-bold text-pink-700">
            What Are Irregular Periods?
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            Irregular periods refer to changes in the timing, duration, or flow of menstruation. These may include:
          </p>

          <ul className="mb-12 list-disc space-y-3 pl-6 leading-8 text-gray-700">
            <li>Periods occurring less than 21 days or more than 35 days apart</li>
            <li>Missing three or more periods consecutively</li>
            <li>Very heavy or extremely light bleeding</li>
            <li>Menstrual bleeding lasting longer than 7 days</li>
            <li>Bleeding or spotting between periods</li>
            <li>Severe pain, cramping, nausea, or vomiting during periods</li>
            <li>Sudden unpredictable changes in cycle length</li>
          </ul>

          <p className="mb-12 leading-8 text-gray-700">
            While mild cycle variations can be normal, persistent irregularity should be medically evaluated.
          </p>

          <h2 className="mb-8 text-4xl font-bold text-pink-700">
            Conditions Associated with Irregular Periods
          </h2>

          <div className="mb-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl bg-rose-50 p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-pink-700">Amenorrhea</h3>
              <p className="leading-7 text-gray-700">
                Absence of periods for 3 months or longer (when not pregnant, breastfeeding, or menopausal).
              </p>
            </div>

            <div className="rounded-3xl bg-rose-50 p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-pink-700">Oligomenorrhea</h3>
              <p className="leading-7 text-gray-700">
                Infrequent menstrual periods occurring more than 35 days apart.
              </p>
            </div>

            <div className="rounded-3xl bg-rose-50 p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-pink-700">Dysmenorrhea</h3>
              <p className="leading-7 text-gray-700">
                Painful periods associated with severe cramping.
              </p>
            </div>

            <div className="rounded-3xl bg-rose-50 p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-semibold text-pink-700">Abnormal Uterine Bleeding</h3>
              <p className="leading-7 text-gray-700">
                Heavy, prolonged, or irregular bleeding outside normal menstrual cycles.
              </p>
            </div>
          </div>

          <h2 className="mb-8 text-4xl font-bold text-pink-700">
            Causes of Irregular Periods
          </h2>

          <div className="mb-14 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-5 text-2xl font-semibold text-pink-700">Hormonal & Medical Causes</h3>
              <ul className="list-disc space-y-2 pl-5 leading-7 text-gray-700">
                <li>Polycystic Ovary Syndrome (PCOS)</li>
                <li>Thyroid disorders (hypothyroidism or hyperthyroidism)</li>
                <li>Endometriosis</li>
                <li>Pelvic Inflammatory Disease (PID)</li>
                <li>Primary Ovarian Insufficiency</li>
                <li>Uterine fibroids or polyps</li>
                <li>Bleeding disorders</li>
                <li>Perimenopause</li>
                <li>Uterine or ovarian abnormalities</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-5 text-2xl font-semibold text-pink-700">Lifestyle-Related Causes</h3>
              <ul className="list-disc space-y-2 pl-5 leading-7 text-gray-700">
                <li>Excessive stress</li>
                <li>Sudden weight gain or weight loss</li>
                <li>Excessive exercise</li>
                <li>Poor nutrition</li>
                <li>Sleep disturbances</li>
                <li>Chronic illness</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-5 text-2xl font-semibold text-pink-700">Other Causes</h3>
              <ul className="list-disc space-y-2 pl-5 leading-7 text-gray-700">
                <li>Pregnancy or miscarriage</li>
                <li>Breastfeeding</li>
                <li>Birth control pills or hormonal medications</li>
                <li>Certain medications such as steroids or blood thinners</li>
              </ul>
            </div>
          </div>

          <img
            src={IrregularCycle}
            alt="Diagnosis"
            className="mb-14 h-[450px] w-full rounded-3xl object-cover shadow-lg"
          />

          <h2 className="mb-6 text-4xl font-bold text-pink-700">
            Diagnosis of Irregular Periods
          </h2>

          <p className="mb-6 leading-8 text-gray-700">
            A detailed medical evaluation helps identify the underlying cause. Diagnostic methods may include:
          </p>

          <ul className="mb-14 list-disc space-y-3 pl-6 leading-8 text-gray-700">
            <li>Detailed menstrual history</li>
            <li>Physical and pelvic examination</li>
            <li>Hormonal blood tests</li>
            <li>Thyroid profile</li>
            <li>Pelvic ultrasound</li>
            <li>Endometrial biopsy (when required)</li>
            <li>Hysteroscopy for evaluation of uterine abnormalities</li>
          </ul>

          <h2 className="mb-8 text-4xl font-bold text-pink-700">
            Treatment Options for Irregular Periods
          </h2>

          <p className="mb-10 leading-8 text-gray-700">
            Treatment depends on the underlying cause, age, symptoms, and future fertility plans.
          </p>

          <div className="space-y-12">
            <div className="rounded-3xl bg-rose-50 p-8 shadow-lg">
              <h3 className="mb-5 text-3xl font-bold text-pink-700">1. Hormonal Therapy</h3>
              <p className="mb-5 leading-8 text-gray-700">
                Hormonal treatment helps regulate menstrual cycles and control abnormal bleeding.
              </p>
              <h4 className="mb-3 text-xl font-semibold text-gray-800">Options Include:</h4>
              <ul className="list-disc space-y-2 pl-6 leading-8 text-gray-700">
                <li>Birth control pills</li>
                <li>Hormonal patches</li>
                <li>Vaginal rings</li>
                <li>Progesterone therapy</li>
                <li>Hormonal intrauterine devices (IUDs)</li>
              </ul>

              <p className="mt-6 mb-3 text-xl font-semibold text-gray-800">These therapies are commonly used for:</p>
              <ul className="list-disc space-y-2 pl-6 leading-8 text-gray-700">
                <li>PCOS</li>
                <li>Heavy menstrual bleeding</li>
                <li>Endometriosis</li>
                <li>Hormonal imbalance</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-lg">
              <h3 className="mb-5 text-3xl font-bold text-pink-700">2. Medications</h3>

              <div className="space-y-6 leading-8 text-gray-700">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Metformin</h4>
                  <p>Commonly prescribed for women with PCOS to improve insulin resistance and ovulation.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Thyroid Medication</h4>
                  <p>Used when thyroid imbalance is causing menstrual irregularity.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Tranexamic Acid</h4>
                  <p>Helps reduce heavy menstrual bleeding.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Pain Relievers</h4>
                  <p>Medications such as ibuprofen help relieve menstrual cramps and discomfort.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Antibiotics</h4>
                  <p>Prescribed when infections like PID are responsible for irregular bleeding.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-lg">
              <h3 className="mb-5 text-3xl font-bold text-pink-800">3. Lifestyle Modifications</h3>
              <p className="mb-5 leading-8 text-gray-700">
                Healthy lifestyle changes can significantly improve menstrual regularity.
              </p>

              <h4 className="mb-3 text-xl font-semibold text-gray-800">Recommended Measures:</h4>
              <ul className="list-disc space-y-2 pl-6 leading-8 text-gray-700">
                <li>Maintaining a healthy body weight</li>
                <li>Balanced nutrition</li>
                <li>Regular moderate exercise</li>
                <li>Stress reduction techniques such as yoga and meditation</li>
                <li>Adequate sleep and hydration</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-lg">
              <h3 className="mb-5 text-3xl font-bold text-pink-800">4. Surgical Treatment Options</h3>

              <div className="space-y-6 leading-8 text-gray-700">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Endometrial Ablation</h4>
                  <p>A procedure to reduce heavy menstrual bleeding by removing the uterine lining.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Myomectomy</h4>
                  <p>Surgical removal of uterine fibroids.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Uterine Artery Embolization</h4>
                  <p>Minimally invasive treatment to shrink fibroids.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Hysteroscopy & Dilation and Curettage (D&C)</h4>
                  <p>Diagnostic and therapeutic procedures for abnormal uterine bleeding.</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Hysterectomy</h4>
                  <p>Reserved for severe cases when other treatments fail.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-16 mb-6 text-4xl font-bold text-pink-800">
            Natural Supportive Approaches
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Certain supportive measures may help improve menstrual health:
          </p>

          <ul className="mb-14 list-disc space-y-3 pl-6 leading-8 text-gray-700">
            <li>Adequate Vitamin D and Calcium intake</li>
            <li>Balanced diet rich in fruits, vegetables, and iron</li>
            <li>Stress management</li>
            <li>Avoiding excessive dieting or over-exercising</li>
          </ul>

          <p className="mb-14 leading-8 text-gray-700">
            These approaches should complement, not replace, medical treatment.
          </p>

          <h2 className="mb-6 text-4xl font-bold text-pink-800">
            When Should You Consult a Gynecologist?
          </h2>

          <p className="mb-5 leading-8 text-gray-700">
            Seek medical advice if you experience:
          </p>

          <ul className="mb-14 list-disc space-y-3 pl-6 leading-8 text-gray-700">
            <li>Periods consistently shorter than 21 days or longer than 35 days</li>
            <li>Missing periods for more than 3 months</li>
            <li>Excessively heavy bleeding</li>
            <li>Severe pelvic pain or cramps</li>
            <li>Bleeding between periods</li>
            <li>Foul-smelling vaginal discharge</li>
            <li>Bleeding after menopause</li>
            <li>Difficulty conceiving due to irregular cycles</li>
          </ul>

          <h2 className="mb-8 text-4xl font-bold text-pink-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-pink-800">
                Is it normal to occasionally miss a period?
              </h3>
              <p className="leading-8 text-gray-700">
                Occasional missed periods can occur due to stress, lifestyle changes, or hormonal fluctuations. However, repeated missed periods should be evaluated.
              </p>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-pink-800">
                How much delay in periods is considered normal?
              </h3>
              <p className="leading-8 text-gray-700">
                Minor variations are common, but significant changes in cycle timing should be assessed by a Gynecologist.
              </p>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-pink-800">
                Are irregular periods common during teenage years or menopause?
              </h3>
              <p className="leading-8 text-gray-700">
                Yes. Irregular periods are more common during puberty and perimenopause due to hormonal fluctuations.
              </p>
            </div>

            <div className="rounded-3xl bg-rose-50 p-8 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-pink-800">
                Can irregular periods affect fertility?
              </h3>
              <p className="leading-8 text-gray-700">
                Yes. Conditions like PCOS or hormonal imbalance can interfere with ovulation and make conception difficult.
              </p>
            </div>
          </div>

          <h2 className="mt-16 mb-8 text-4xl font-bold text-pink-800">
            Why Choose Vandana Clinic?
          </h2>

          <div className="rounded-3xl bg-gradient-to-r from-pink-800 to-rose-100 p-10 text-white shadow-xl">
            <ul className="space-y-4 text-lg leading-8">
              <li>• Comprehensive evaluation of menstrual disorders</li>
              <li>• Advanced diagnostic facilities</li>
              <li>• Personalized treatment plans</li>
              <li>• Expert gynecological care</li>
              <li>• Fertility-focused management when required</li>
              <li>• Compassionate and confidential patient support</li>
            </ul>

            <p className="mt-8 text-lg leading-8 text-pink-100">
              Our goal is to help women achieve better reproductive health and improved quality of life.
            </p>
          </div>

          <h2 className="mt-16 mb-6 text-4xl font-bold text-pink-800">
            Book a Consultation
          </h2>

          <p className="mb-8 leading-8 text-gray-700">
            If you are experiencing irregular periods or abnormal menstrual symptoms, consult our specialists for accurate diagnosis and effective treatment.
          </p>

          <div className="rounded-3xl bg-rose-50 p-10 text-center shadow-xl">
            <h3 className="mb-4 text-3xl font-bold text-pink-800">
              Vandana Clinic
            </h3>
            <p className="text-xl text-gray-700">
              Expert Care for Women’s Health & Hormonal Wellness
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default IrregularPeriods;