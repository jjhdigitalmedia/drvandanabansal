// import { useLocation, Link } from "react-router-dom";
// import { IoMdHome } from "react-icons/io";
// import BreadCrumb1 from '../assets/BreadCrumb1.jpg'
// const CurrentRoute = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split("/").filter(Boolean); // removes empty string from split
//   if (location.pathname === "/") {
//     return null;
//   }
//   return (
//     <div className="text-sm bg- text-white pt-20 pb-10 bg-ray-400 bg-gradint-to-t from-stne-300 to-stoe-100 md:pb-20 md:pt-40 px-8 md:px-40  mx-auto bg-cover bg-center h-auto w-full"
//     style={{ backgroundImage: `url(${BreadCrumb1})` }}
//     >
//       <nav className="flex flex-wrap items-center space-x-1">
//         <IoMdHome className="md:text-2xl text-white" />
//         <Link to="/" className="text-white text-shadow-md md:text-2xl hover:underline">
//          Home
//         </Link>

//         {pathnames.map((segment, index) => {
//           const path = `/${pathnames.slice(0, index + 1).join("/")}`;
//           const isLast = index === pathnames.length - 1;
//           const name = segment.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

//           return (
//             <span key={path} className="flex items-center md:text-2xl space-x-1 " >
//               {/* <img src={BreadCrumb} alt="" className='' /> */}
//               <span>/</span>
//               {isLast ? (
//                 <span className="">{name}</span>

//               ) : (
//                 <Link to={path} className="text-pink-700 hover:underline">
//                   {name}
//                 </Link>
//               )}
//             </span>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default CurrentRoute;




import { useLocation, Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import BreadCrumb1 from "../assets/BreadCrumb1.jpg";

const CurrentRoute = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean); // removes empty string from split

  if (location.pathname === "/") {
    return null;
  }

  const currentLabel = pathnames.length
    ? pathnames[pathnames.length - 1].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "";

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BreadCrumb1})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-pink-950/85 via-pink-900/60 to-pink-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      <div className="relative mx-auto px-6 pb-8 pt-16 sm:px-10 md:px-16 md:pb-12 md:pt-24 lg:px-24 lg:pb-14 lg:pt-28">
        <h1 className="mb-3 text-2xl font-semibold text-[#f1f1f1] sm:text-3xl md:text-4xl">
          {currentLabel}
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex w-fit max-w-full flex-wrap items-center gap-x-2 gap-y-1 overflow-x-auto rounded-full border border-[#f1f1f1]/20 bg-pink-950/30 px-4 py-2 text-sm text-[#f1f1f1]/90 backdrop-blur-sm sm:text-base">
            <li className="flex shrink-0 items-center">
              <Link
                to="/"
                className="flex items-center gap-1.5 rounded-sm font-medium text-[#f1f1f1]/90 transition-colors hover:text-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-950"
              >
                <IoMdHome className="text-base sm:text-lg" />
                Home
              </Link>
            </li>

            {pathnames.map((segment, index) => {
              const path = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const name = segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

              return (
                <li key={path} className="flex shrink-0 items-center gap-2">
                  <span className="text-pink-700/70">/</span>
                  {isLast ? (
                    <span className="font-semibold text-[#f1f1f1]" aria-current="page">
                      {name}
                    </span>
                  ) : (
                    <Link
                      to={path}
                      className="rounded-sm font-medium text-[#f1f1f1]/80 transition-colors hover:text-pink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-950"
                    >
                      {name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default CurrentRoute;
