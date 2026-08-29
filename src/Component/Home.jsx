import React from 'react'
import { Helmet } from "react-helmet-async";
import { FAQ } from './FAQ'
import About from './About'
import Arrow from './Arrow'
import Stats from './Stats'
import Head from './Head'
import Treatements from './Treatements'
import Appointment from './Appointment'
import ContactButton from './ContactButton'
import Conferences from '../Pages/Conferences';
import Features from './Features';
import Contact from './Contact'
import CurrentRoute from './CurrentRoute'
import GoogleReview from './GoogleReview'
import VideoOfCentre from './VideoOfCentre'
import Memberships from './Memberships';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Best Gynecologist in Prayagraj | Dr. Vandana Bansal</title>
        <meta name="description" content="Dr Vandana Bansal is a best gynecologist in Prayagraj and IVF expert, offering advanced fertility treatments, IVF, infertility care, and high-risk pregnancy management." />
        <meta name="keywords" content="gynecologist, jeevan jyoti hospital, women's health, pregnancy care, PCOS treatment, fertility treatment, best gyanecologist in prayagraj, IVF expert, infertility specialist, gynaecologist in Prayagraj, IVF doctor in Allahabad, best fertility clinic, egg freezing, PCOS treatment, IUI specialist, pregnancy care, women's reproductive health" />
        <meta property="og:title" content="Best Gynaecologist in Prayagraj | Dr Vandana Bansal" />
        <meta property="og:description" content="Dr. Vandana Bansal is a leading IVF expert and gynaecologist, offering advanced fertility treatments and compassionate care to help couples achieve their dreams of parenthood." />
        <meta property="og:site_name" content="Dr. Vandana Bansal"></meta>
        <meta name="application-name" content="Dr. Vandana Bansal"></meta>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Dr. Vandana Bansal",
            "url": "https://www.drvandanabansal.in",
            "sameAs": [
              "https://www.instagram.com/dr.vandanabansal",
              "https://www.facebook.com/vandana.bansal.33/",
              "https://www.youtube.com/@DrVandanaBansal"
            ]
          })}
        </script>
      </Helmet>

      <ContactButton />
      <Arrow />
      <Head />
      <About />
      <Stats />
      <Treatements />
      <Conferences />
      {/* <Memberships/> */}
      <Features />
      {/* <GoogleReview /> */}
      {/* <!-- Elfsight Instagram Feed | Untitled Instagram Feed --> */}
      <div className='w-11/12 mx-auto'>
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div class="elfsight-app-09e858a6-5228-44ea-a1ec-2bd24b2c4aff" data-elfsight-app-lazy></div>
      </div>
      <FAQ />
      <Appointment />
      {/* <Contact /> */}

    </div>
  )
}
export default Home