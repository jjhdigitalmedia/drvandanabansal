import React from 'react'
import Head from './Head'
import { Rewards } from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
import { FAQ } from './FAQ'
import Contact from './Contact'
import VideoOfCentre from './VideoOfCentre'
import Stats from './Stats'
import Appointment from './Appointment'
import Arrow from './Arrow'
import ContactButton from './ContactButton'
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dr Vandana Bansal Best Gynecologist in Prayagraj</title>
        <meta name="description" content="Dr Vandana Bansal is a best gynecologist in Prayagraj and IVF expert, offering advanced fertility treatments, IVF, infertility care, and high-risk pregnancy management." />
        <meta name="keywords" content="gynecologist, jeevan jyoti hospital, women's health, pregnancy care, PCOS treatment, fertility treatment, best gyanecologist in prayagraj, IVF expert, infertility specialist, gynaecologist in Prayagraj, IVF doctor in Allahabad, best fertility clinic, egg freezing, PCOS treatment, IUI specialist, pregnancy care, women's reproductive health" />
        <meta property="og:title" content="Dr. Vandana Bansal: IVF Expert | Gynaecologist" />
        <meta property="og:description" content="Dr. Vandana Bansal is a leading IVF expert and gynaecologist, offering advanced fertility treatments and compassionate care to help couples achieve their dreams of parenthood." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Dr Vandana Bansal Fertility Clinic",
            "url": "https://www.drvandanabansal.in",
            "sameAs": [
              "https://www.instagram.com/dr.vandanabansal",
              "https://www.facebook.com/vandana.bansal.33/",
              "https://www.youtube.com/@DrVandanaBansal"
            ]
          })}
        </script>

      </Helmet>
      {/* <Navv /> */}
      <ContactButton />
      <Arrow />
      <Head />
      <Rewards />
      <Treatements />
      <VideoOfCentre />
      <About />
      <GoogleReview />
      <Stats />
      <Contact />
      <FAQ />
      <Appointment />
    </div>
  )
}
export default Home