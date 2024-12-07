import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
// import NavigationB from './Component/NavigationB.jsx'
// import Footer from './Component/Footer.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
// import Layout from './Layout.jsx'

import Home from './Component/Home.jsx'
// import Gallery from './Component/Gallery.jsx'

import IuiTreatment from './Pages/Treatments/IuiTreatment.jsx'
import IcsiTreatment from './Pages/Treatments/IcsiTreatment.jsx'
import IvfEtTreatment from './Pages/Treatments/IvfEtTreatment.jsx'
import ImsiTreatment from './Pages/Treatments/ImsiTreatment.jsx'
import IvmTreatment from './Pages/Treatments/IvmTreatment.jsx'
import EmbryoTreatment from './Pages/Treatments/EmbryoTreatment.jsx'
import SonographyTreatment from './Pages/Treatments/SonographyTreatment.jsx'
import LaserAssistedTreatment from './Pages/Treatments/LaserAssistedTreatment.jsx'
import EmbryoBankTreatment from './Pages/Treatments/EmbryoBankTreatment.jsx'
import EggDonationTreatment from './Pages/Treatments/EggDonationTreatment.jsx'
import SemenBankTreatment from './Pages/Treatments/SemenBankTreatment.jsx'
import HSGSonoTreatment from './Pages/Treatments/HSGSonoTreatment.jsx'
import EndocrineTreatment from './Pages/Treatments/EndocrineTreatment.jsx'
import BlastocystTreatment from './Pages/Treatments/BlastocystTreatment.jsx'
import CryopreservationTreatment from './Pages/Treatments/CryopreservationTreatment.jsx'
import LaparoscopyTreatment from './Pages/Treatments/LaparoscopyTreatment.jsx'
import OurFounders from './Pages/AboutUs/OurFounders.jsx'
import SpiritualJourney from './Pages/AboutUs/SpiritualJourney.jsx'
import OurVisionMissions from './Pages/AboutUs/OurVisionMissions.jsx'
import OurProfiles from './Pages/AboutUs/OurProfiles.jsx'
import Facilities from './Pages/Facilities.jsx'
import IVFteam from './Pages/Ivfteam.jsx'
import PatientsGuide from './Pages/PatientsGuide.jsx'
import SuccessRate from './Pages/SuccessRate.jsx'
// import BookYourAppointment from './Pages/BookYourAppointment.jsx'
// import BookAppointment from './Component/BookAppointment.jsx'
import Gallery from './Pages/Gallery.jsx'
import BookYourAppointment from './Pages/BookYourAppointment.jsx'
import PatientReviewVideo from './Pages/Rewards/PatientReviewVideo.jsx'
import GuestSpeaker from './Pages/Rewards/GuestSpeaker.jsx'
import NewsPaperCutting from './Pages/NewsPaperCutting.jsx'


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
        element: <BookYourAppointment />,
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
        path: 'facilities',
        element: <Facilities />,
        children: []
      },
      {
        path: 'patientsguide',
        element: <PatientsGuide />,
        children: []
      },
      {
        path: 'achievements',
        element: <SuccessRate />,
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
        element: <OurFounders />,
        children: []
      },
      {
        path: 'ourprofile',
        element: <OurProfiles />,
        children: []
      },
      {
        path: 'ourvisionmission',
        element: <OurVisionMissions />,
        children: []
      },
      {
        path: 'spiritualjourney',
        element: <SpiritualJourney />,
        children: []
      },
      {
        path: 'newsimages',
        element: <NewsPaperCutting />,
        children: []
      },

      {
        path: 'iuitreatment',
        element: <IuiTreatment />,
        children: []
      },
      {
        path: 'ivfet',
        element: <IvfEtTreatment />,
        children: []
      },
      {
        path: 'icsi',
        element: <IcsiTreatment />,
        children: []
      },
      {
        path: 'ivmtreatment',
        element: <IvmTreatment />,
        children: []
      },
      {
        path: 'imsitreatment',
        element: <ImsiTreatment />,
        children: []
      },
      {
        path: 'embryomonitoring',
        element: <EmbryoTreatment />,
        children: []
      },
      {
        path: 'laserassisted',
        element: <LaserAssistedTreatment />,
        children: []
      },
      {
        path: 'laparoscopy',
        element: <LaparoscopyTreatment />,
        children: []
      },
      {
        path: 'endocrine',
        element: <EndocrineTreatment />,
        children: []
      },
      {
        path: 'sonography',
        element: <SonographyTreatment />,
        children: []
      },
      {
        path: 'hsgsono',
        element: <HSGSonoTreatment />,
        children: []
      },
      {
        path: 'semenbank',
        element: <SemenBankTreatment />,
        children: []
      },
      {
        path: 'embryobank',
        element: <EmbryoBankTreatment />,
        children: []
      },
      {
        path: 'blastocyst',
        element: <BlastocystTreatment />,
        children: []
      },
      {
        path: 'eggdonation',
        element: <EggDonationTreatment />,
        children: []
      },
      {
        path: 'cryopreservation',
        element: <CryopreservationTreatment />,
        children: []
      },

      {
        path: 'guestspeaker',
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
