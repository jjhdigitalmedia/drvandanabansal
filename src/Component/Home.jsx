import React from 'react'
import Head from './Head'
import {Rewards} from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
import NewsImages from './NewsImages' 
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
        <NewsImages/>
        <FAQ />
        <Contact/>
    </div>
  )
}
export default Home