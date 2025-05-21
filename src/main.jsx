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
import VideoOfCentre from './Component/VideoOfCentre.jsx'
import NotFound from './Pages/NotFound.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Treatements from './Component/Treatements.jsx'
import Linktree from './Pages/LinkTree.jsx'


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
        path: 'book-appointment',
        element: <BookYourAppointment />,
      },
      {
        path: 'ivf-team',
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
        path: 'patients-guide',
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
        path: 'patients-review',
        element: <PatientReviewVideo />,
        children: []
      },
      {
        path: 'about/founders',
        element: <OurFounders />,
        children: []
      },
      {
        path: 'about/profile',
        element: <OurProfiles />,
        children: []
      },
      {
        path: 'about/vision-mission',
        element: <OurVisionMissions />,
        children: []
      },
      {
        path: 'about/spiritual-journey',
        element: <SpiritualJourney />,
        children: []
      },
      {
        path: 'in-news',
        element: <NewsPaperCutting />,
        children: []
      },

      {
        path: 'treatments',
        element: <Treatements />,
        children: []
      },
      {
        path: 'treatments/iui',
        element: <IuiTreatment />,
        children: []
      },
      {
        path: 'treatments/ivf-et',
        element: <IvfEtTreatment />,
        children: []
      },
      {
        path: 'treatments/icsi',
        element: <IcsiTreatment />,
        children: []
      },
      {
        path: 'treatments/ivm',
        element: <IvmTreatment />,
        children: []
      },
      {
        path: 'treatments/imsi',
        element: <ImsiTreatment />,
        children: []
      },
      {
        path: 'treatments/embryo-monitoring',
        element: <EmbryoTreatment />,
        children: []
      },
      {
        path: 'treatments/laser-assisted-hatching',
        element: <LaserAssistedTreatment />,
        children: []
      },
      {
        path: 'treatments/laparoscopy',
        element: <LaparoscopyTreatment />,
        children: []
      },
      {
        path: 'treatments/endocrine',
        element: <EndocrineTreatment />,
        children: []
      },
      {
        path: 'treatments/sonography',
        element: <SonographyTreatment />,
        children: []
      },
      {
        path: 'treatments/hsg-sono',
        element: <HSGSonoTreatment />,
        children: []
      },
      {
        path: 'treatments/semen-bank',
        element: <SemenBankTreatment />,
        children: []
      },
      {
        path: 'treatments/embryo-bank',
        element: <EmbryoBankTreatment />,
        children: []
      },
      {
        path: 'treatments/blastocyst',
        element: <BlastocystTreatment />,
        children: []
      },
      {
        path: 'treatments/egg-donation',
        element: <EggDonationTreatment />,
        children: []
      },
      {
        path: 'treatments/cryopreservation',
        element: <CryopreservationTreatment />,
        children: []
      },

      {
        path: 'guest-speaker',
        element: <GuestSpeaker />,
        children: []
      },
      {
        path: '*',
        element: <NotFound />,
        children: []
      },
      {
        path: 'all-links',
        element: <Linktree />,
        children: []
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <HelmetProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </HelmetProvider>

  </React.StrictMode>
)
