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
import Cataract from './Pages/Cataract.jsx'
import RefractiveError from './Pages/RefractiveError.jsx'
import Glaucoma from './Pages/Glaucoma.jsx'
import AgeRelated from './Pages/AgeRelated.jsx'
import EyeDry from './Pages/EyeDry.jsx'
import Diabetic from './Pages/Diabetic.jsx'
import BookAppointment from './Component/BookAppointment.jsx'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PatientReviewVideo } from './Component/Reviews/PatientReviewVideo.jsx'


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
    path: '/advanceLaparoscopy',
    element: <Cataract />,
    children: []
  },
  {
    path: '/generalSurery',
    element: <RefractiveError />,
    children: []
  },
  {
    path: '/lasersurgery',
    element: <Glaucoma />,
    children: []
  },
  {
    path: '/bariaticweightloss',
    element: <AgeRelated />,
    children: []
  },
  {
    path: '/breastclinic',
    element: <EyeDry />,
    children: []
  },
  {
    path: '/surgicaloncology',
    element: <Diabetic />,
    children: []
  },
  {
    path: '/bookappointment',
    element: <BookAppointment/>,
    children: []
  },
  {
    path: '/achievements',
    element: <Achievements/>,
    children: []
  },
  {
    path: '/patientsreview',
    element: <PatientReviewVideo/>,
    children: []
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>

    <NavigationB/>
    <RouterProvider router={router} />
    <Footer/>
    </ParallaxProvider>
  </React.StrictMode>,
)
