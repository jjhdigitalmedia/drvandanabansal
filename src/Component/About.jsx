import '../Style/neonStyle.css'
import DrVandanaBansalPhoto from '../assets/DrVandanaBansalPhoto.png';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <>
            <Helmet>
                <title>Dr. Vandana Bansal Allahabad</title>
                <meta name="description" content="DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists,   High Risk Pregnancy Care, Infertility & IVF and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 200-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration. Obstetric & Gynecology" />
                <meta name="keywords" content="gynecologist, women's health, pregnancy care, IVF expert in allahabad, High risk pregnancy, Infertility treatment, senior gynaecologist, Laparoscopic surgeon, Hysteroscopic surgeon,  PCOS treatment, doctors for pregnancy" />
                <meta property="og:title" content="Best Gynecology Services" />
                <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
            </Helmet>
            <section id='about' className="text-gray-600 w-11/12 mx-auto mt-14 body-font">
                <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
                    <div className="pt-5 pb-0 md:w-96 w-5/6 ">
                        <img className=" object-cover object-center roundedxl w-96" alt="hero" src={DrVandanaBansalPhoto} />
                    </div>
                    <div className="lg:flex-grow md:rounded-r-2xl my-2 md:w-1/2 text-white py-3 pr-1 md:bg-rose-800 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
                        <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-white"> Dr. Vandana Bansal
                        </h1>

                        <div className='flex'>
                            <a href="https://www.instagram.com/drvandanabansal_gynaecologist/" target='_blank'>
                                <FaInstagram className='m-2 md:text-whit text-xl' />
                            </a>
                            <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
                                <FaFacebook className='m-2 md:text-whie text-xl' />
                            </a>
                            <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
                                <FaYoutube className='m-2 md:text-whie text-xl' />
                            </a>
                            <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
                                <FaLinkedinIn className='m-2 md:text-wite text-xl' />
                            </a>
                        </div>

                        <p className="mb-8 md:text-left text-sm leading-relaxed font-semibold text-justify"> DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists, High Risk Pregnancy Care, Infertility & IVF and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery. Besided, she is Director of 200-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre Allahabad.
                            </p>
                            <p className="mb-8 md:text-left text-sm leading-relaxed font-semibold text-justify">Dr. Vandana Bansal is a trusted gynecologist, IVF specialist, and dedicated to women's health. With 38+ years of experience and a compassionate approach, she offers advanced care in infertility, laparoscopy, menopause, and high-risk pregnancies. Patients value her for ethical practice, clear communication, and personalized treatment plans. Book your appointment today for expert care and guidance on your reproductive health journey.</p>
                            {/* <span className='text-rose-700'> know more </span> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default About







