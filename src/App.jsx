// import './App.css'
import { Link, Outlet }
  from 'react-router-dom'
import NavigationB from './Component/NavigationB.jsx'
import Footer from './Component/Footer.jsx'
// import Logo from "./assets/ArpitPic.png";
// import ArpitPic from "./assets/ArpitPic.png";
// import DesktopMenu from "./component/DesktopMenu.jsx";

function App() {
  {/* ca377e color theme for website */}
  {/* font-family: Asap Condensed, sans-serif */}

  return (
    <>
      <NavigationB />
      {/* <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181A] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={ArpitPic} alt="" className="size-8" />
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center hidden">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header> */}
      <div className=" fixed top-52 -rotate-90 -ml-16 z-50">
        <Link to="book-appointment">
          <button className="bg-red-700 hover:bg-red-800 text-white py-2 px-6 rounded-3xl">
            Book Appointment
          </button>
        </Link>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
export default App