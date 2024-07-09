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


function App() {

  return (
    <>
      <Head />
      <Achievements/>
      <Outlet />
      <Treatements />
      <FAQ />
      <About />
      <GoogleReview />
      <Contact />
    </>
  )
}
export default App