import React from 'react'
import Head from './Head'
import {Rewards} from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
import {FAQ} from './FAQ'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Head/>
        <Rewards/>
        <Treatements/>
        <About/>
        <GoogleReview/>
        <Contact/>
        <FAQ />
    </div>
  )
}
export default Home