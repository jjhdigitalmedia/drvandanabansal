import './App.css'
import { Outlet }
  from 'react-router-dom'
import Head from './Component/Head.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Achievements from './Component/Achievements.jsx'
import Treatements from './Component/Treatements.jsx'
import GoogleReview from './Component/GoogleReview.jsx'
import { FAQ } from './Component/FAQ.jsx'
import { Rewards } from './Component/Rewards.jsx'
import NavigationB from './Component/NavigationB.jsx'


function App() {

  return (
    <>
      {/* <NavigationB /> */}
      <Head />
      <Rewards />
      {/* <Achievements/> */}
      <Outlet />
      <Treatements />
      <GoogleReview />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}
export default App