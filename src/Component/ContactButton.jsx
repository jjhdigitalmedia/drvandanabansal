import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";

const ContactButton = () => {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      icon: <FaEnvelope size={18} />,
      label: "Email",
      href: "mailto:drvandanabansal921@gmail.com?subject=Inquiry",
      bg: "bg-white",
      x: -0,
      y: -80,
    },
    {
      icon: <FaWhatsapp size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/message/JG2WQ7ZXYWU6B1",
      bg: "bg-white",
      x: -70,
      y: -75,
    },
    {
      icon: <FaPhone size={18} />,
      label: "Call",
      href: "tel:+919151037784",
      bg: "bg-white",
      x: -80,
      y: -0,
    },
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-[999]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative w-16 h-16">
        {/* Pulse Ring */}
        <div
          className={`absolute bottom-0 right-0 h-14 w-14 rounded-full bg-pink-400 transition-opacity duration-300 ${
            open ? "animate-ping opacity-30" : "opacity-0"
          }`}
        />

        {/* Floating Buttons */}
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`absolute bottom-1 right-1 flex h-12 w-12 items-center justify-center rounded-full text-pink-800 shadow-xl
            ${btn.bg}
            transition-all duration-500 ease-out hover:scale-110 active:scale-95
            ${
              open
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 pointer-events-none"
            }`}
            style={{
              transform: open
                ? `translate(${btn.x}px, ${btn.y}px)`
                : "translate(0px,0px)",
              transitionDelay: `${index * 80}ms`,
            }}
          >
            {btn.icon}

            {/* Tooltip */}
            {/* <span
              className={`absolute right-14 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1 text-xs text-white shadow-md transition-all duration-300
              ${
                open
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-2"
              }`}
            >
              {btn.label}
            </span> */}
          </a>
        ))}

        {/* Main FAB */}
        <button
          onClick={() => setOpen(!open)}
          className={`absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full border- border-white
          bg-gradient-to-br from-pink-700 to-pink-800
          text-white shadow-2xl transition-all duration-500
          hover:scale-110 active:scale-95
          ${open ? "rotate-90" : "rotate-0"}`}
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ContactButton;