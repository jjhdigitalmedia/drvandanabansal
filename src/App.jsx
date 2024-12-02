// import './App.css'
import { Outlet }
  from 'react-router-dom'
import Head from './Component/Head.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Treatements from './Component/Treatements.jsx'
import GoogleReview from './Component/GoogleReview.jsx'
import { FAQ } from './Component/FAQ.jsx'
import { Rewards } from './Component/Rewards.jsx'
import NavigationB from './Component/NavigationB.jsx'
import Home from './Component/Home.jsx'
import Footer from './Component/Footer.jsx'


function App() {

  return (
    <>
      <NavigationB />
      <div className=" fixed top-52 -rotate-90 -ml-16 z-50">
        <a href="bookappointment">
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-3xl">
            Book Appointment
          </button>
        </a>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
export default App