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
import Home from './Component/Home.jsx'
import Layout from './Layout.jsx'
import Facilities from './Component/Facilities.jsx'
import IVFteam from './Component/IVFteam.jsx'
import PatientsGuide from './Component/PatientsGuide.jsx'
import Gallery from './Component/Gallery.jsx'
import Endocrine from './Pages/Endocrine.jsx'
import Sonography from './Pages/Sonography.jsx'
import HSGSono from './Pages/HSGSono.jsx'
import SemenBank from './Pages/SemenBank.jsx'
import Blastocyst from './Pages/Blastocyst.jsx'
import EggDonation from './Pages/EggDonation.jsx'
import Cryopreservation from './Pages/Cryopreservation.jsx'
import EmbryoBank from './Pages/EmbryoBank.jsx'
import OurFounder from './Component/OurFounder.jsx'
import OurProfile from './Component/OurProfile.jsx'
import OurVisionMission from './Component/OurVisionMission.jsx'
import Spiritual from './Component/Spiritual.jsx'
import NewsImages from './Component/NewsImages.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <> <App /></>,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'bookappointment',
        element: <BookAppointment />,
      },
      {
        path: 'facilities',
        element: <Facilities />,
      },
      {
        path: 'ivfteam',
        element: <IVFteam />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'patientsguide',
        element: <PatientsGuide />,
        children: []
      },
      {
        path: 'achievements',
        element: <Achievements />,
        children: []
      },
      {
        path: 'gallery',
        element: <Gallery />,
        children: []
      },
      {
        path: 'patientsreview',
        element: <PatientReviewVideo />,
        children: []
      },
      {
        path: 'ourfounder',
        element: <OurFounder />,
        children: []
      },
      {
        path: 'ourprofile',
        element: <OurProfile />,
        children: []
      },
      {
        path: 'ourvisionmission',
        element: <OurVisionMission />,
        children: []
      },
      {
        path: 'spiritualjourney',
        element: <Spiritual />,
        children: []
      },
      {
        path: 'newsimages',
        element: <NewsImages />,
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
        path: '/endocrine',
        element: <Endocrine />,
        children: []
      },
      {
        path: '/sonography',
        element: <Sonography />,
        children: []
      },
      {
        path: '/hsgsono',
        element: <HSGSono />,
        children: []
      },
      {
        path: '/semenbank',
        element: <SemenBank />,
        children: []
      },
      {
        path: '/embryobank',
        element: <EmbryoBank />,
        children: []
      },
      {
        path: '/blastocyst',
        element: <Blastocyst />,
        children: []
      },
      {
        path: '/eggdonation',
        element: <EggDonation />,
        children: []
      },
      {
        path: '/cryopreservation',
        element: <Cryopreservation />,
        children: []
      },

      {
        path: '/guestspeaker',
        element: <GuestSpeaker />,
        children: []
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>

      <RouterProvider router={router} />

    </ParallaxProvider>
  </React.StrictMode>,
)
