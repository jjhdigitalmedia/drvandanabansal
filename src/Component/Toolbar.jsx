import {
  Home,
  Phone,
  CalendarPlus2,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MobileBottomBar() {
  const menu = [
    {
      name: "Home",
      icon: Home,
      path: "/",
    },
    {
      name: "Call",
      icon: Phone,
      path: "tel:+919999999999",
      external: true,
    },
    {
      name: "Chat",
      icon: MessageCircle,
      path: "/chat",
    },
    {
      name: "Profile",
      icon: UserRound,
      path: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-2 left-1/2 z-50 w-[95%] max-w-md -translate-x-1/2 lg:hidden">

      {/* Background */}
      <div className="relative flex h-20 items-center justify-around rounded-full border border-pink-200 bg-[#f1f1f1]/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,.18)]">

        {menu.slice(0, 2).map((item) => {
          const Icon = item.icon;

          return item.external ? (
            <a
              key={item.name}
              href={item.path}
              className="flex flex-col items-center gap-1 text-pink-900"
            >
              <Icon size={22} />
              <span className="text-[11px] font-medium">
                {item.name}
              </span>
            </a>
          ) : (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive ? "text-pink-800" : "text-gray-500"
                }`
              }
            >
              <Icon size={22} />
              <span className="text-[11px] font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}

        {/* Floating Appointment Button */}

        <NavLink
          to="/appointment"
          className="absolute -top-8 flex h-20 w-20 items-center justify-center rounded-full bg-pink-800 shadow-2xl ring-4 ring-[#f1f1f1] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-700">
            <CalendarPlus2 className="text-white" size={30} />
          </div>
        </NavLink>

        {menu.slice(2).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive ? "text-pink-800" : "text-gray-500"
                }`
              }
            >
              <Icon size={22} />
              <span className="text-[11px] font-medium">
                {item.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}