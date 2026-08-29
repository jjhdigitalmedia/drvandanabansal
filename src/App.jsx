import { Link, Outlet } from 'react-router-dom'
import NavigationB from './Component/NavigationB.jsx'
import Footer from './Component/Footer.jsx'
import CurrentRoute from './Component/CurrentRoute.jsx'
import Toolbar from './Component/Toolbar.jsx'


function App() {

  return (
    <>
      <NavigationB />
       <div className="">
        <CurrentRoute />
        {/* <img src={BreadCrumb} alt="" className='bg-black/50 h-auto' /> */}
      </div>
      <div className=" fixed top-80 -rotate-90 -ml-16 z-50">
        <Link to="book-appointment">
          <button className="bg-pink-800 hover:bg-red-800 text-white py-2 mb-3 bg-opacity-90 px-6 rounded-b-2xl">
            Book Appointment
          </button>
        </Link>
      </div>
      <main id='main-content'>
      <Outlet />
      <Toolbar/>
      </main>
      <Footer />
    </>
  )
}
export default App

// name: Deploy React to Hostinger

// on:
//   push:
//     branches:
//       - master

// jobs:
//   build-and-deploy:
//     runs-on: ubuntu-latest

//     steps:
//       - name: 🚀 Checkout Repository
//         uses: actions/checkout@v3

//       - name: 🔧 Set up Node.js
//         uses: actions/setup-node@v3
//         with:
//           node-version: 18

//       - name: 📦 Install Dependencies
//         run: npm install

//       - name: 🏗️ Build React App
//         run: npm run build

//       - name: 🔍 Check Build Output
//         run: ls -l dist  


//       - name: 📤 Deploy via FTP
//         uses: SamKirkland/FTP-Deploy-Action@4.3.1 
//         with:
//           server: ${{ secrets.FTP_HOST }}
//           username: ${{ secrets.FTP_USER }}
//           password: ${{ secrets.FTP_PASS }}
//           local-dir: dist/
//           server-dir: /domains/drvandanabansal.in/public_html/