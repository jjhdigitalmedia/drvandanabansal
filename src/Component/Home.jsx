import React from 'react'
import Head from './Head'
import { Rewards } from './Rewards'
import Treatements from './Treatements'
import GoogleReview from './GoogleReview'
import About from './About'
import { FAQ } from './FAQ'
import Contact from './Contact'
import NewsImages from './NewsImages'

const Home = () => {
  return (
    <div>
        <Head/>
        <Rewards/>
        <Treatements/>
        <GoogleReview/>
        <About/>
        <NewsImages/>
        <FAQ/>
        <Contact/>

    </div>
  )
}

export default Home