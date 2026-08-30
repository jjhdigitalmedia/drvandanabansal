import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { HelmetProvider } from 'react-helmet-async'

import App from './App.jsx'
import './index.css'

import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import NavigationB from './Component/NavigationB.jsx'
import Gallery from './Pages/Gallery.jsx'
import NewsPaperCutting from './Pages/NewsPaperCutting.jsx'
import Treatements from './Component/Treatements.jsx'
import NotFound from './Pages/NotFound.jsx'
import BookYourAppointment from './Pages/BookYourAppointment.jsx'
import Linktree from './Pages/LinkTree.jsx'

import IvfEtTreatment from './Pages/Treatments/InfertilityAndIVF/IvfEtTreatment.jsx'
import IuiTreatment from './Pages/Treatments/InfertilityAndIVF/IuiTreatment.jsx'
import IcsiTreatment from './Pages/Treatments/InfertilityAndIVF/IcsiTreatment.jsx'
import ImsiTreatment from './Pages/Treatments/InfertilityAndIVF/ImsiTreatment.jsx'
import LaserAssistedTreatment from './Pages/Treatments/InfertilityAndIVF/LaserAssistedTreatment.jsx'
import EmbryoBankTreatment from './Pages/Treatments/InfertilityAndIVF/EmbryoBankTreatment.jsx'
import BlastocystTreatment from './Pages/Treatments/InfertilityAndIVF/BlastocystTreatment.jsx'
import OocyteCryopreservation from './Pages/Treatments/InfertilityAndIVF/OocyteCryopreservation.jsx'
import MESA from './Pages/Treatments/InfertilityAndIVF/MESA.jsx'
import OocyteDonation from './Pages/Treatments/InfertilityAndIVF/OocyteDonation.jsx'
import SemenCryopreservation from './Pages/Treatments/InfertilityAndIVF/SemenCryopreservation.jsx'
import TESA from './Pages/Treatments/InfertilityAndIVF/TESA.jsx'


import HeavyBleeding from './Pages/Treatments/AdvancedGynecologyCare/HeavyBleeding.jsx'
import IrregularPeriods from './Pages/Treatments/AdvancedGynecologyCare/IrregularPeriods.jsx'
import MenopauseManagement from './Pages/Treatments/AdvancedGynecologyCare/MenopauseManagement.jsx'
import PCOSAndPCOD from './Pages/Treatments/AdvancedGynecologyCare/PCOSAndPCOD.jsx'

import CervicalCancer from './Pages/Treatments/GynecCancerCare/CervicalCancer.jsx'
import OvarianCancer from './Pages/Treatments/GynecCancerCare/OvarianCancer.jsx'
import UterusCancer from './Pages/Treatments/GynecCancerCare/UterusCancer.jsx'
import BreastCancer from './Pages/Treatments/GynecCancerCare/BreastCancer.jsx'

import BreastHealthCheckup from './Pages/Treatments/PreventiveWomensCare/BreastHealthCheckup.jsx'
import HPVVaccination from './Pages/Treatments/PreventiveWomensCare/HPVVaccination.jsx'
import Mammography from './Pages/Treatments/PreventiveWomensCare/Mammography.jsx'
import PapSmearScreening from './Pages/Treatments/PreventiveWomensCare/PapSmearScreening.jsx'
import BoneHealthScreening from './Pages/Treatments/PreventiveWomensCare/BoneHealthScreening.jsx'

import CesareanDelivery from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/CesareanDelivery.jsx'
import HighBPAndDiabetesInPregnancy from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/HighBPAndDiabetesInPregnancy.jsx'
import PainlessDelivery from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/PainlessDelivery.jsx'
import NormalDeliveryCare from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/NormalDeliveryCare.jsx'
import PretemLabourCare from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/PretemLabourCare.jsx'
import RecurrentPregnancyLoss from './Pages/Treatments/HighRiskPregnancyAndMaternityCare/RecurrentPregnancyLoss.jsx'

import FibroidRemoval from './Pages/Treatments/LaparoscopicSurgery/FibroidRemoval.jsx'
import EndometriosisTreatment from './Pages/Treatments/LaparoscopicSurgery/EndometriosisTreatment.jsx'
import OvarianCystSurgery from './Pages/Treatments/LaparoscopicSurgery/OvarianCystSurgery.jsx'


import Hymenoplasty from './Pages/Treatments/AestheticGynae/Hymenoplasty.jsx'
import Labiaplasty from './Pages/Treatments/AestheticGynae/Labiaplasty.jsx'
import PelvicFloorTreatment from './Pages/Treatments/AestheticGynae/PelvicFloorTreatment.jsx'
import SexualWellness from './Pages/Treatments/AestheticGynae/SexualWellness.jsx'
import StressUrinaryIncontinence from './Pages/Treatments/AestheticGynae/StressUrinaryIncontinence.jsx'
import Vaginismus from './Pages/Treatments/AestheticGynae/Vaginismus.jsx'
import VaginalRejuvination from './Pages/Treatments/AestheticGynae/VaginalRejuvination.jsx'

import BoneAndOsteoporosis from './Pages/Treatments/MenopuaseAndLongevity/BoneAndOsteoporosis.jsx'
import CardiovascularAndMetabolicHealth from './Pages/Treatments/MenopuaseAndLongevity/CardiovascularAndMetabolicHealth.jsx'
import LifestyleNutritionAndExercise from './Pages/Treatments/MenopuaseAndLongevity/LifestyleNutritionAndExercise.jsx'
import PerimenopauseAndMenopause from './Pages/Treatments/MenopuaseAndLongevity/PerimenopauseAndMenopause.jsx'
import SleepMoodAndCognition from './Pages/Treatments/MenopuaseAndLongevity/SleepMoodAndCognition.jsx'

import AbnormalUterineBleeding from './Pages/Treatments/HysteroscopicSurgery.jsx/AbnormalUterineBleeding.jsx'
import AdhesionsRemoval from './Pages/Treatments/HysteroscopicSurgery.jsx/AdhesionsRemoval.jsx'
import DiagnosticHysteroscopyEvaluation from './Pages/Treatments/HysteroscopicSurgery.jsx/DiagnosticHysteroscopyEvaluation.jsx'
import PreIVFHysteroscopyEvaluation from './Pages/Treatments/HysteroscopicSurgery.jsx/PreIVFHysteroscopyEvaluation.jsx'
import UterinePolypRemoval from './Pages/Treatments/HysteroscopicSurgery.jsx/UterinePolypRemoval.jsx'
import UterineSeptumResection from './Pages/Treatments/HysteroscopicSurgery.jsx/UterineSeptumResection.jsx'


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
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
        
      },
      {
        path: 'in-news',
        element: <NewsPaperCutting />,
        
      },
      
      {
        path: 'treatments',
        element: <Treatements />,
        
      },
      {
        path: 'treatments/iui',
        element: <IuiTreatment />,
        
      },
      {
        path: 'treatments/ivf-et',
        element: <IvfEtTreatment />,
        
      },
      {
        path: 'treatments/icsi',
        element: <IcsiTreatment />,
        
      },
      {
        path: 'treatments/imsi',
        element: <ImsiTreatment />,
        
      },
      {
        path: 'treatments/laser-assisted-hatching',
        element: <LaserAssistedTreatment />,
        
      },
      {
        path: 'treatments/oocyte-donation',
        element: <OocyteDonation />,
        
      },
      {
        path: 'treatments/embryo-banking',
        element: <EmbryoBankTreatment />,
        
      },
      {
        path: 'treatments/blastocyst-transfer',
        element: <BlastocystTreatment />,
        
      },
      {
        path: 'treatments/mesa ',
        element: <MESA />,
        
      },
      {
        path: 'treatments/semen-cryopreservation',
        element: <SemenCryopreservation />,
        
      },
      {
        path: 'treatments/oocyte-cryopreservation',
        element: <OocyteCryopreservation />,
        
      },
      {
        path: 'treatments/mesa-microepididymal-sperm-aspiration',
        element: <MESA />,
        
      },
      {
        path: 'treatments/tesa-testicular-sperm-aspiration-cryopreservation',
        element: <TESA />,
        
      },
      // ........................................................................................
      {
        path: 'treatments/heavy-menstrual-bleeding',
        element: <HeavyBleeding/>,
        
      },
      {
        path: 'treatments/irregular-periods',
        element: <IrregularPeriods/>,
        
      },
      {
        path: 'treatments/menopause-management',
        element: <MenopauseManagement/>,
        
      },
      {
        path: 'treatments/pcos-pcod',
        element: <PCOSAndPCOD/>,
        
      },
      // ...............................................................................................
      {
        path: 'treatments/hymenoplasty',
        element: <Hymenoplasty/>,
        
      },
      {
        path: 'treatments/labiaplasty',
        element: <Labiaplasty/>,
        
      },
      {
        path: 'treatments/pelvic-floor-treatment',
        element: <PelvicFloorTreatment/>,
        
      },
      {
        path: 'treatments/sexual-wellness',
        element: <SexualWellness/>,
        
      },
      {
        path: 'treatments/stress-urinary-incontinence',
        element: <StressUrinaryIncontinence/>,
        
      },
      {
        path: 'treatments/vaginismus',
        element: <Vaginismus/>,
        
      },
      {
        path: 'treatments/vaginal-rejuvination',
        element: <VaginalRejuvination/>,
        
      },
      // ..................................................................................................
      {
        path: 'treatments/bone-and-osteoporosis',
        element: <BoneAndOsteoporosis/>,
        
      },
      {
        path: 'treatments/cardiovascular-and-metabolic-health',
        element: <CardiovascularAndMetabolicHealth/>,
        
      },
      {
        path: 'treatments/lifestyle-nutrition-and-exercise',
        element: <LifestyleNutritionAndExercise/>,
        
      },
      {
        path: 'treatments/menopause-management',
        element: <MenopauseManagement/>,
        
      },
      {
        path: 'treatments/perimenopause-and-menopause',
        element: <PerimenopauseAndMenopause/>,
        
      },
      {
        path: 'treatments/sleepMood-and-cognition',
        element: <SleepMoodAndCognition/>,
        
      },
      // .......................................................................................................
      {
        path: 'treatments/cervical-cancer',
        element: <CervicalCancer/>,
        
      },
      {
        path: 'treatments/ovarian-cancer',
        element: <OvarianCancer/>,
        
      },
      {
        path: 'treatments/uterine-cancer',
        element: <UterusCancer/>,
        
      },
      {
        path: 'treatments/breast-cancer',
        element: <BreastCancer/>,
        
      },
      // .....................................................................................................
      {
        path: 'treatments/cesarean-section-delivery',
        element: <CesareanDelivery/>,
        
      },
      {
        path: 'treatments/high-bp-and-diabetes-in-pregnancy',
        element: <HighBPAndDiabetesInPregnancy/>,
        
      },
      {
        path: 'treatments/normal-delivery',
        element: <NormalDeliveryCare/>,
        
      },
      {
        path: 'treatments/painless-delivery',
        element: <PainlessDelivery/>,
        
      },
      {
        path: 'treatments/pretem-labour',
        element: <PretemLabourCare/>,
        
      },
      {
        path: 'treatments/recurrent-pregnancy-loss',
        element: <RecurrentPregnancyLoss/>,
        
      },
      // ................................................................................
      {
        path: 'treatments/ovarian-cyst-laparoscopic-surgery',
        element: <OvarianCystSurgery/>,
        
      },
      {
        path: 'treatments/fibroid-removal-laparoscopic-surgery',
        element: <FibroidRemoval/>,
        
      },
      {
        path: 'treatments/endometriosis-treatment',
        element: <EndometriosisTreatment/>,
        
      },
      // ..................................................................................
      {
        path: 'treatments/abnormal-uterine-bleeding',
        element: <AbnormalUterineBleeding/>,
        
      },
      {
        path: 'treatments/adhesions-removal',
        element: <AdhesionsRemoval/>,
        
      },
      {
        path: 'treatments/',
        element: <DiagnosticHysteroscopyEvaluation/>,
        
      },
      {
        path: 'treatments/pre-ivf-hysteroscopy-evaluation',
        element: <PreIVFHysteroscopyEvaluation/>,
        
      },
      {
        path: 'treatments/uterine-polyp-removal',
        element: <UterinePolypRemoval/>,
        
      },
      {
        path: 'treatments/uterine-septum-resection',
        element: <UterineSeptumResection/>,
        
      },
      // ...................................................................................
      {
        path: 'treatments/pap-smear-screening',
        element: <PapSmearScreening/>,
        
      },
      {
        path: 'treatments/breast-health-checkup',
        element: <BreastHealthCheckup/>,
        
      },
      {
        path: 'treatments/hpv-vaccination',
        element: <HPVVaccination/>,
        
      },
      {
        path: 'treatments/bone-health-screening',
        element: <BoneHealthScreening/>,
        
      },
      {
        path: 'treatments/mammography',
        element: <Mammography/>,
        
      },
      // ......................................................................................
      {
        path: '*',
        element: <NotFound />,
        
      },
    ]
  },
  {
    path: 'all-links',
    element: <> <NavigationB /> <Linktree /></>,
    
  },
])

// ReactDOM.hydrateRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <HelmetProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </HelmetProvider>

  </React.StrictMode>
)
