import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
// import NavigationB from './Component/NavigationB.jsx'
// import Footer from './Component/Footer.jsx'
// import Layout from './Layout.jsx'
// import Gallery from './Component/Gallery.jsx'

import Home from './Component/Home.jsx'

import IuiTreatment from './Pages/Treatments/InfertilityAndIVF/IuiTreatment.jsx'
import IcsiTreatment from './Pages/Treatments/InfertilityAndIVF/IcsiTreatment.jsx'
import IvfEtTreatment from './Pages/Treatments/InfertilityAndIVF/IvfEtTreatment.jsx'
import ImsiTreatment from './Pages/Treatments/InfertilityAndIVF/ImsiTreatment.jsx'
import IvmTreatment from './Pages/Treatments/InfertilityAndIVF/IvmTreatment.jsx'
import EmbryoTreatment from './Pages/Treatments/InfertilityAndIVF/EmbryoTreatment.jsx'
import SonographyTreatment from './Pages/Treatments/InfertilityAndIVF/SonographyTreatment.jsx'
import LaserAssistedTreatment from './Pages/Treatments/InfertilityAndIVF/LaserAssistedTreatment.jsx'
import EmbryoBankTreatment from './Pages/Treatments/InfertilityAndIVF/EmbryoBankTreatment.jsx'
import EggDonationTreatment from './Pages/Treatments/InfertilityAndIVF/EggDonationTreatment.jsx'
import SemenBankTreatment from './Pages/Treatments/InfertilityAndIVF/SemenBankTreatment.jsx'
import HSGSonoTreatment from './Pages/Treatments/InfertilityAndIVF/HSGSonoTreatment.jsx'
import EndocrineTreatment from './Pages/Treatments/InfertilityAndIVF/EndocrineTreatment.jsx'
import BlastocystTreatment from './Pages/Treatments/InfertilityAndIVF/BlastocystTreatment.jsx'
import CryopreservationTreatment from './Pages/Treatments/InfertilityAndIVF/CryopreservationTreatment.jsx'
import LaparoscopyTreatment from './Pages/Treatments/InfertilityAndIVF/LaparoscopyTreatment.jsx'
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
import NavigationB from './Component/NavigationB.jsx'
import MESA from './Pages/Treatments/InfertilityAndIVF/MESA.jsx'
import TESA from './Pages/Treatments/InfertilityAndIVF/TESA.jsx'
import OocyteCryopreservation from './Pages/Treatments/InfertilityAndIVF/OocyteCryopreservation.jsx'
import SemenCryopreservation from './Pages/Treatments/InfertilityAndIVF/SemenCryopreservation.jsx'
import EmbryoDonation from './Pages/Treatments/InfertilityAndIVF/EmbryoDonation.jsx'
import OocyteDonation from './Pages/Treatments/InfertilityAndIVF/OocyteDonation.jsx'


import HeavyBleeding from './Pages/Treatments/AdvancedGynecologyCare/HeavyBleeding.jsx'
import IrregularPeriods from './Pages/Treatments/AdvancedGynecologyCare/IrregularPeriods.jsx'
import MenopauseManagement from './Pages/Treatments/AdvancedGynecologyCare/MenopauseManagement.jsx'
import PCOSAndPCOD from './Pages/Treatments/AdvancedGynecologyCare/PCOSAndPCOD.jsx'

import CervicalCancer from './Pages/Treatments/GynecCancerCare/CervicalCancer.jsx'
import OvarianCancer from './Pages/Treatments/GynecCancerCare/OvarianCancer.jsx'
import UterusCancer from './Pages/Treatments/GynecCancerCare/UterusCancer.jsx'

import CesareanDelivery from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/CesareanDelivery.jsx'
import HighBPAndDiabetesInPregnancy from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/HighBPAndDiabetesInPregnancy.jsx'
import NormalDeliveryCare from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/NormalDeliveryCare.jsx'
import PretemLabourCare from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/PretemLabourCare.jsx'
import RecurrentPregnancyLoss from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/RecurrentPregnancyLoss.jsx'
import TwinAndMultiplePregnancy from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/TwinAndMultiplePregnancy.jsx'


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
        path: 'about/our-founders',
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
        path: 'guest-speaker',
        element: <GuestSpeaker />,
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
        path: 'treatments/oocyte-donation',
        element: <OocyteDonation />,
        children: []
      },
      {
        path: 'treatments/embryo-donation',
        element: <EmbryoDonation />,
        children: []
      },
      {
        path: 'treatments/embryo-bank',
        element: <EmbryoBankTreatment />,
        children: []
      },
      {
        path: 'treatments/blastocyst-transfer',
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
        path: 'treatments/semen-cryopreservation',
        element: <SemenCryopreservation />,
        children: []
      },
      {
        path: 'treatments/oocyte-cryopreservation',
        element: <OocyteCryopreservation />,
        children: []
      },
      {
        path: 'treatments/mesa-microepididymal-sperm-aspiration',
        element: <MESA />,
        children: []
      },
      {
        path: 'treatments/tesa-testicular-sperm-aspiration-cryopreservation',
        element: <TESA />,
        children: []
      },
      {
        path: 'treatments/heavy-menstrual-bleeding',
        element: <HeavyBleeding/>,
        children: []
      },
      {
        path: 'treatments/irregular-periods',
        element: <IrregularPeriods/>,
        children: []
      },
      {
        path: 'treatments/menopause-management',
        element: <MenopauseManagement/>,
        children: []
      },
      {
        path: 'treatments/pcos-pcod',
        element: <PCOSAndPCOD/>,
        children: []
      },
      {
        path: 'treatments/cervical-cancer',
        element: <CervicalCancer/>,
        children: []
      },
      {
        path: 'treatments/ovarian-cancer',
        element: <OvarianCancer/>,
        children: []
      },
      {
        path: 'treatments/uterus-cancer',
        element: <UterusCancer/>,
        children: []
      },

      {
        path: 'treatments/cesarean-delivery',
        element: <CesareanDelivery/>,
        children: []
      },
      {
        path: 'treatments/high-bp-and-diabetes-in-pregnancy',
        element: <HighBPAndDiabetesInPregnancy/>,
        children: []
      },
      {
        path: 'treatments/normal-delivery',
        element: <NormalDeliveryCare/>,
        children: []
      },
      {
        path: 'treatments/pretem-labour',
        element: <PretemLabourCare/>,
        children: []
      },
      {
        path: 'treatments/recurrent-pregnancy-loss',
        element: <RecurrentPregnancyLoss/>,
        children: []
      },
      {
        path: 'treatments/twin-and-multiple-pregnancy',
        element: <TwinAndMultiplePregnancy/>,
        children: []
      },
      // {
      //   path: 'treatments/',
      //   element: ,
      //   children: []
      // },

      {
        path: '*',
        element: <NotFound />,
        children: []
      },
    ]
  },
  {
    path: 'all-links',
    element: <> <NavigationB /> <Linktree /></>,
    children: []
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
