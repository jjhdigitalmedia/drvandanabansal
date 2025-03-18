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
        <title>Dr. Vandana Bansal: IVF Expert | Gynaecologist</title>
        <meta name="description" content="Dr. Vandana Bansal is a renowned IVF expert and experienced gynaecologist specializing in advanced fertility treatments in Prayagraj. With years of expertise in in vitro fertilization (IVF), she provides personalized care for couples seeking solutions to infertility. Dr. Bansal offers a range of services, including fertility evaluations, IVF treatments, egg freezing, male infertility treatments, and high-risk obstetrics. Dedicated to helping women achieve their family-building goals, Dr. Vandana Bansal combines medical proficiency with compassionate care to ensure the best outcomes for her patients. Consult with Dr. Bansal for effective, trusted fertility solutions and personalized care in gynaecology and reproductive health. Dr. Vandana Bansal Prayagraj" />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment, fertility treatment, gyanecologist in prayagraj" />
        <meta property="og:title" content="Dr. Vandana Bansal: IVF Expert | Gynaecologist" />
        <meta property="og:description" content="Dr. Vandana Bansal is a leading IVF expert and gynaecologist, offering advanced fertility treatments and compassionate care to help couples achieve their dreams of parenthood." />

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