
import React from "react";
import { Helmet } from "react-helmet-async";
import {
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    CalendarDays,
    Phone,
    MessageCircle,
    Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import BannerMainWebsite1 from "../../../assets/Banners/BannerMainWebsite1.png"
const GynecologistPrayagraj = () => {
    const [openFaq, setOpenFaq] = React.useState(null);

    const services = [
        {
            title: "PCOS & Hormonal Disorders",
            text: "Evaluation and personalized management of PCOS, irregular periods, acne, unwanted hair growth and related hormonal concerns.",
        },
        {
            title: "Infertility & IVF Care",
            text: "Comprehensive fertility evaluation and personalized treatment planning for couples experiencing difficulty conceiving.",
        },
        {
            title: "High-Risk Pregnancy Care",
            text: "Specialized monitoring and management for pregnancies affected by diabetes, hypertension, previous pregnancy complications and other risk factors.",
        },
        {
            title: "Laparoscopic Surgery",
            text: "Advanced minimally invasive gynecological procedures for conditions such as fibroids, ovarian cysts, endometriosis and other pelvic problems.",
        },
        {
            title: "Hysteroscopic Surgery",
            text: "Evaluation and treatment of conditions affecting the inside of the uterus, including polyps, adhesions and abnormal uterine bleeding.",
        },
        {
            title: "Menopause Management",
            text: "Personalized care for menopause symptoms, hormonal changes, bone health, cardiovascular risk and healthy aging.",
        },
        {
            title: "Aesthetic & Functional Gynecology",
            text: "Individualized care for intimate wellness, pelvic floor concerns, vaginal health and selected aesthetic gynecology procedures.",
        },
        {
            title: "Preventive Women's Health",
            text: "Routine gynecological checkups, breast health assessment, cervical screening and preventive care for women's long-term health.",
        },
    ];

    const symptoms = [
        "Irregular or missed periods",
        "Heavy or painful periods",
        "Difficulty conceiving",
        "Abnormal vaginal bleeding",
        "Pelvic pain",
        "PCOS or hormonal symptoms",
        "Menopause-related symptoms",
        "Pregnancy-related concerns",
        "Recurrent pregnancy loss",
        "Breast or cervical health concerns",
    ];

    const faqs = [
        {
            question: "Who is the best gynecologist in Prayagraj?",
            answer:
                "Choosing a gynecologist depends on your individual health needs, experience required, treatment options and comfort with the doctor. Dr. Vandana Bansal is a senior gynecologist and women's health specialist in Prayagraj with experience in gynecology, obstetrics, infertility and IVF, high-risk pregnancy care and advanced gynecological surgery.",
        },
        {
            question: "When should I consult a gynecologist?",
            answer:
                "You should consider a gynecological consultation for irregular periods, heavy or painful bleeding, pelvic pain, PCOS symptoms, difficulty conceiving, abnormal vaginal discharge or bleeding, pregnancy-related concerns, menopause symptoms or routine preventive women's health screening.",
        },
        {
            question: "Does a gynecologist treat infertility?",
            answer:
                "Yes. A gynecologist can evaluate common causes of infertility and guide appropriate treatment. Depending on the cause and fertility goals, treatment may include lifestyle and medical management, ovulation treatment, fertility procedures or IVF-related care.",
        },
        {
            question: "Can PCOS affect fertility?",
            answer:
                "PCOS can affect ovulation and may make conception more difficult for some women. However, PCOS-related fertility problems are often manageable with individualized treatment, lifestyle measures and fertility therapies when required.",
        },
        {
            question: "What gynecological surgeries are performed?",
            answer:
                "Depending on the condition, gynecological surgery may include laparoscopic and hysteroscopic procedures for problems such as fibroids, ovarian cysts, endometriosis, uterine polyps, adhesions and abnormal uterine bleeding.",
        },
        {
            question: "Can I consult a gynecologist for menopause symptoms?",
            answer:
                "Yes. Menopause can affect periods, sleep, mood, bones, cardiovascular health and overall quality of life. A gynecologist can assess symptoms and create an individualized menopause and healthy-aging plan.",
        },
    ];

    return (
        <>
            <Helmet>
                <title>
                    Best Gynecologist in Prayagraj | Dr. Vandana Bansal
                </title>

                <meta
                    name="description"
                    content="Looking for a gynecologist in Prayagraj? Dr. Vandana Bansal provides comprehensive women's healthcare including PCOS, infertility and IVF, high-risk pregnancy, laparoscopic surgery, hysteroscopy, menopause and preventive gynecology care."
                />

                <meta
                    name="keywords"
                    content="best gynecologist in Prayagraj, gynecologist in Prayagraj, best gynecologist in Allahabad, women specialist in Prayagraj, PCOS treatment Prayagraj, infertility specialist Prayagraj, IVF doctor Prayagraj, laparoscopic gynecologist Prayagraj"
                />

                <meta
                    property="og:title"
                    content="Best Gynecologist in Prayagraj | Dr. Vandana Bansal"
                />

                <meta
                    property="og:description"
                    content="Comprehensive gynecology, women's health, infertility, IVF, pregnancy and advanced gynecological care in Prayagraj with Dr. Vandana Bansal."
                />

                <meta
                    property="og:type"
                    content="article"
                />
            </Helmet>

            <article className="min-h-screen bg-white text-gray-800">

                {/* =========================================================
            HERO
        ========================================================= */}
                <section className="bg-[#f1f1f1] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">

                        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-pink-800">
                            <span>Women's Health</span>
                            <span>•</span>
                            <span>Gynecology</span>
                            <span>•</span>
                            <span>Prayagraj</span>
                        </div>

                        <h1 className="max-w-5xl text-4xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-6xl">
                            Best Gynecologist in Prayagraj for Comprehensive Women's Health
                        </h1>
                        <div>
                            <img src={BannerMainWebsite1} alt="" />
                        </div>

                        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-600 md:text-xl">
                            Finding the right gynecologist is an important part of maintaining
                            women's health through every stage of life. From menstrual and
                            hormonal problems to pregnancy, infertility, menopause and
                            advanced gynecological surgery, personalized medical care can
                            help women make informed decisions about their health.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <a
                                href="tel:+916390103002"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-800 px-7 py-3.5 font-semibold text-white transition hover:bg-pink-900"
                            >
                                <Phone size={18} />
                                Book a Consultation
                            </a>

                            <a
                                href="#gynecology-services"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-800 px-7 py-3.5 font-semibold text-pink-800 transition hover:bg-pink-800 hover:text-white"
                            >
                                Explore Services
                                <ArrowRight size={18} />
                            </a>

                        </div>

                    </div>
                </section>

                {/* =========================================================
            INTRODUCTION
        ========================================================= */}
                <section className="py-14 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">

                        <div className="mb-12">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-800">
                                Dr Vandana Bansal - Gynecology Care in Prayagraj
                            </p>

                            <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
                                Comprehensive Gynecological Care for Women
                            </h2>

                            <p className="mb-5 text-lg leading-8 text-gray-600">
                                Women's health needs change throughout life. A woman may need
                                gynecological care for menstrual problems during her younger
                                years, fertility support when planning a family, specialized
                                pregnancy care during motherhood and guidance for hormonal and
                                metabolic changes around menopause.
                            </p>

                            <p className="text-lg leading-8 text-gray-600">
                                Dr. Vandana Bansal provides comprehensive gynecological and
                                women's healthcare in Prayagraj, with an approach focused on
                                understanding each patient's symptoms, medical history,
                                treatment goals and individual needs.
                            </p>
                        </div>

                        {/* Highlight */}
                        <div className="rounded-3xl border border-pink-50 bg-pink-50 p-7 md:p-9">
                            <div className="flex flex-col gap-5 md:flex-row md:items-start">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-800 text-white">
                                    <Stethoscope size={23} />
                                </div>

                                <div>
                                    <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                        Personalized Women's Healthcare
                                    </h3>

                                    <p className="leading-7 text-gray-700">
                                        Good gynecological care is not only about treating a
                                        particular symptom. It also involves identifying possible
                                        underlying causes, discussing available treatment options
                                        and helping women understand their long-term health needs.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* =========================================================
            ABOUT DOCTOR
        ========================================================= */}
                <section className="bg-[#f1f1f1] py-14 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-800">
                            Meet the Doctor
                        </p>

                        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                            Dr. Vandana Bansal – Gynecologist in Prayagraj
                        </h2>

                        <p className="mb-5 text-lg leading-8 text-gray-600">
                            Dr. Vandana Bansal is a senior gynecologist and women's health
                            specialist in Prayagraj with experience in gynecology,
                            obstetrics, infertility and advanced gynecological care.
                        </p>

                        <p className="mb-5 text-lg leading-8 text-gray-600">
                            Her areas of care include infertility and IVF, high-risk
                            pregnancy management, laparoscopic and hysteroscopic surgery,
                            PCOS and hormonal health, menopause management and preventive
                            women's healthcare.
                        </p>

                        <p className="text-lg leading-8 text-gray-600">
                            As every woman's health journey is different, treatment is
                            planned according to individual symptoms, medical history,
                            reproductive goals and overall health.
                        </p>

                        <div className="mt-9 grid gap-4 sm:grid-cols-2">

                            {[
                                "Senior Gynecological Care",
                                "Infertility & IVF Expertise",
                                "High-Risk Pregnancy Care",
                                "Advanced Laparoscopic Surgery",
                                "Hysteroscopic Procedures",
                                "Menopause & Healthy Aging",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                                >
                                    <CheckCircle2
                                        className="shrink-0 text-pink-800"
                                        size={21}
                                    />

                                    <span className="font-medium text-gray-800">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* =========================================================
            SERVICES
        ========================================================= */}
                <section
                    id="gynecology-services"
                    className="py-14 md:py-20"
                >
                    <div className="mx-auto max-w-6xl px-6">

                        <div className="mx-auto mb-12 max-w-3xl text-center">

                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-800">
                                Our Areas of Care
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                Gynecology Services in Prayagraj
                            </h2>

                            <p className="mt-4 text-lg leading-8 text-gray-600">
                                Comprehensive care for women's health, reproductive health,
                                pregnancy and gynecological conditions.
                            </p>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                                >

                                    <div className="mb-5 flex items-center gap-4">

                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-800">
                                            <CheckCircle2 size={21} />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900">
                                            {service.title}
                                        </h3>

                                    </div>

                                    <p className="leading-7 text-gray-600">
                                        {service.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* =========================================================
            WHEN TO VISIT
        ========================================================= */}
                <section className="bg-[#f1f1f1] py-14 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">

                        <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
                            When Should You Consult a Gynecologist?
                        </h2>

                        <p className="mb-8 text-lg leading-8 text-gray-600">
                            Some gynecological problems may be temporary, while others can
                            require proper evaluation. You should consider consulting a
                            gynecologist if you experience persistent or recurring symptoms
                            such as:
                        </p>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {symptoms.map((symptom, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl bg-white p-4"
                                >
                                    <CheckCircle2
                                        className="shrink-0 text-pink-800"
                                        size={20}
                                    />

                                    <span className="text-gray-700">
                                        {symptom}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-9 rounded-2xl border-l-4 border-pink-800 bg-pink-50 p-6">
                            <p className="leading-7 text-gray-700">
                                Persistent symptoms should not be ignored or self-treated for
                                long periods. The underlying cause may be different from what
                                the symptoms initially suggest, so proper medical evaluation
                                can help guide appropriate treatment.
                            </p>
                        </div>

                    </div>
                </section>

                {/* =========================================================
            SPECIALIZED CARE
        ========================================================= */}
                <section className="py-14 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-800">
                            Specialized Women's Care
                        </p>

                        <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                            Care Across Every Stage of a Woman's Life
                        </h2>

                        <div className="space-y-7">

                            <div>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                    Adolescence & Menstrual Health
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    Irregular periods, painful menstruation, heavy bleeding and
                                    hormonal changes can affect daily life. Early evaluation can
                                    help identify problems such as PCOS or other hormonal
                                    conditions.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                    Reproductive & Fertility Health
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    Women planning pregnancy may benefit from preconception
                                    guidance, fertility evaluation and management of conditions
                                    that can affect ovulation, the uterus or reproductive health.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                    Pregnancy & Maternity Care
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    Pregnancy requires regular monitoring and timely medical
                                    attention. Women with diabetes, hypertension, previous
                                    pregnancy complications or other risk factors may require
                                    specialized high-risk pregnancy care.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                    Menopause & Healthy Aging
                                </h3>

                                <p className="leading-7 text-gray-600">
                                    Menopause is a natural stage of life but hormonal changes can
                                    affect sleep, mood, bones, cardiovascular health and quality
                                    of life. Individualized evaluation can help women manage
                                    these changes safely.
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================================================
            WHY CHOOSE
        ========================================================= */}
                <section className="bg-gray-900 py-14 text-white md:py-20">
                    <div className="mx-auto max-w-5xl px-6">

                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-300">
                            Why Choose Dr. Vandana Bansal?
                        </p>

                        <h2 className="mb-7 text-3xl font-bold md:text-4xl">
                            A Personalized Approach to Women's Healthcare
                        </h2>

                        <p className="mb-8 max-w-4xl text-lg leading-8 text-gray-300">
                            Women's health often involves multiple factors. A comprehensive
                            approach can help connect symptoms, reproductive goals, hormonal
                            health and overall wellbeing instead of treating each concern in
                            isolation.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2">

                            {[
                                "Personalized treatment planning",
                                "38+ years of experience",
                                "Comprehensive gynecological evaluation",
                                "Infertility and reproductive health care",
                                "Advanced surgical options when required",
                                "Pregnancy and maternity care",
                                "Long-term women's health management",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl border border-gray-700 bg-gray-800 p-5"
                                >
                                    <CheckCircle2
                                        className="shrink-0 text-pink-400"
                                        size={21}
                                    />

                                    <span className="text-gray-200">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>

                {/* =========================================================
            CTA
        ========================================================= */}
                <section className="py-14 md:py-20">
                    <div className="mx-auto max-w-5xl px-6">

                        <div className="rounded-3xl bg-pink-800 p-8 text-white md:p-12">

                            <div className="max-w-3xl">

                                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-100">
                                    Women's Health Consultation
                                </p>

                                <h2 className="text-3xl font-bold md:text-4xl">
                                    Take the Next Step Towards Better Women's Health
                                </h2>

                                <p className="mt-4 leading-7 text-pink-100">
                                    Whether you are experiencing a gynecological concern,
                                    planning pregnancy, seeking fertility care or looking for
                                    guidance about menopause, a personalized consultation can
                                    help you understand your options.
                                </p>

                                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                                    <a
                                        href="tel:+916390103002"
                                        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-pink-800 transition hover:bg-gray-100"
                                    >
                                        <Phone size={18} />
                                        Call for Appointment
                                    </a>

                                    <a
                                        href="https://wa.me/916390103004"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-pink-800"
                                    >
                                        <MessageCircle size={18} />
                                        WhatsApp
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* =========================================================
            FAQ
        ========================================================= */}
                <section className="bg-[#f1f1f1] py-14 md:py-20">
                    <div className="mx-auto max-w-4xl px-6">

                        <div className="mb-10 text-center">

                            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-pink-800">
                                Frequently Asked Questions
                            </p>

                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                Gynecology FAQs
                            </h2>

                        </div>

                        <div className="space-y-4">

                            {faqs.map((faq, index) => {
                                const isOpen = openFaq === index;

                                return (
                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
                                    >

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenFaq(isOpen ? null : index)
                                            }
                                            className="flex w-full items-center justify-between gap-5 p-5 text-left"
                                        >

                                            <span className="font-semibold text-gray-900">
                                                {faq.question}
                                            </span>

                                            <ChevronDown
                                                size={21}
                                                className={`shrink-0 text-pink-800 transition-transform ${isOpen ? "rotate-180" : ""
                                                    }`}
                                            />

                                        </button>

                                        {isOpen && (
                                            <div className="border-t border-gray-100 px-5 pb-5 pt-4">

                                                <p className="leading-7 text-gray-600">
                                                    {faq.answer}
                                                </p>

                                            </div>
                                        )}

                                    </div>
                                );
                            })}

                        </div>

                    </div>
                </section>

                {/* =========================================================
            FINAL CTA
        ========================================================= */}
                <section className="border-t border-gray-100 bg-white py-12">
                    <div className="mx-auto max-w-4xl px-6 text-center">

                        <CalendarDays
                            className="mx-auto mb-4 text-pink-800"
                            size={34}
                        />

                        <h2 className="text-3xl font-bold text-gray-900">
                            Looking for a Gynecologist in Prayagraj?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                            Schedule a consultation with Dr. Vandana Bansal for personalized
                            gynecological, reproductive and women's healthcare.
                        </p>

                        <Link
                            to='/book-appointment'
                            className="mt-7 inline-flex items-center gap-2 rounded-full bg-pink-800 px-7 py-3.5 font-semibold text-white transition hover:bg-pink-900"
                        >
                            <Phone size={18} />
                            Book an Appointment
                        </Link>

                    </div>
                </section>

            </article>
        </>
    );
};

export default GynecologistPrayagraj;

