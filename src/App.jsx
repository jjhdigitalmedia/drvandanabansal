import { Link, Outlet } from 'react-router-dom'
import NavigationB from './Component/NavigationB.jsx'
import CurrentRoute from './Component/CurrentRoute.jsx'
import Toolbar from './Component/Toolbar.jsx'
import Footer from './Component/Footer.jsx'
// import PageLoader from './Component/PageLoader.jsx'
function App() {
  return (
    <>
    {/* <PageLoader /> */}
      <NavigationB />
       <div className="">
        <CurrentRoute />
      </div>
      <div className=" fixed top-80 -rotate-90 -ml-16 z-50">
        <Link to="book-appointment">
          <button className="bg-pink-800 hover:bg-pink-900 text-white py-2 mb-3 bg-opacity-90 px-6 rounded-b-2xl">
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