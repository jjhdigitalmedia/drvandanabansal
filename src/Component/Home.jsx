import React from 'react'
import Head from './Head'
import {Rewards} from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
import {FAQ} from './FAQ'
import Contact from './Contact'
import VideoOfCentre from './VideoOfCentre'
import Stats from './Stats'
import Appointment from './Appointment'
import Arrow from './Arrow'
import ContactButton from './ContactButton'

const Home = () => {
  return (
    <div>
      <ContactButton/>
      <Arrow/>
        <Head/>
        <Rewards/>
        <Treatements/>
        <VideoOfCentre/>
        <About/>
        <GoogleReview/>
        <Stats/>
        <Contact/>
        <FAQ />
        <Appointment/>
    </div>
  )
}
export default Home