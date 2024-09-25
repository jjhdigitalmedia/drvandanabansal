import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Achievements from './Component/Achievements.jsx'
import NavigationB from './Component/NavigationB.jsx'
import Footer from './Component/Footer.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PatientReviewVideo } from './Component/Reviews/PatientReviewVideo.jsx'

import BookAppointment from './Component/BookAppointment.jsx'
import GuestSpeaker from './Component/GuestSpeaker/GuestSpeaker.jsx'

import Iui from './Pages/Iui.jsx'
import Ivfet from './Pages/Ivfet.jsx'
import Icsi from './Pages/Icsi.jsx'
import Ivm from './Pages/Ivm.jsx'
import Imsi from './Pages/Imsi.jsx'
import Embryo from './Pages/Embryo.jsx'
import LaserAssisted from './Pages/LaserAssisted.jsx'
import Laparoscopy from './Pages/Laparoscopy.jsx'
import Head from './Component/Head.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: <About />,
        children: []
      },
      {
        path: '/contact',
        element: <Contact />,
        children: []
      },
      {
        path: '/experience',
        element: <About />,
        children: []
      }
    ]
  },
  {
    path: '/hospitalprofile',
    element: <Iui />,
    children: []
  },
  {
    path: '/iuitreatment',
    element: <Iui />,
    children: []
  },
  {
    path: '/ivfet',
    element: <Ivfet />,
    children: []
  },
  {
    path: '/icsi',
    element: <Icsi />,
    children: []
  },
  {
    path: '/ivmtreatment',
    element: <Ivm />,
    children: []
  },
  {
    path: '/imsitreatment',
    element: <Imsi />,
    children: []
  },
  {
    path: '/embryomonitoring',
    element: <Embryo />,
    children: []
  },
  {
    path: '/laserassisted',
    element: <LaserAssisted />,
    children: []
  },
  {
    path: '/laparoscopy',
    element: <Laparoscopy />,
    children: []
  },

  {
    path: '/achievements',
    element: <Achievements />,
    children: []
  },
  {
    path: '/bookappointment',
    element: <BookAppointment />,
    children: []
  },
  {
    path: '/guestspeaker',
    element: <GuestSpeaker />,
    children: []
  },
  {
    path: '/patientsreview',
    element: <PatientReviewVideo />,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>

      <NavigationB />
      {/* <Head/> */}
      <RouterProvider router={router} />
      <Footer />
      
    </ParallaxProvider>
  </React.StrictMode>,
)
