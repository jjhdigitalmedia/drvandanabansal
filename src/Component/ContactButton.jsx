import { useState } from "react";
import { FaBars, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-20 flex items-end">
      <div 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)}
        className="relative"
      >
        {hover && (
          <div className="absolute bottom-0 right-12 px-4 flex gap-2 transition-all duration-300 ease-in-out">
            <button className="bg-rose-500 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-all">
            <a href="mailto:drvandanabansal921@gmail.com?subject=Inquiry&body=Hello, I have a question about..." target="_blank"> <FaEnvelope size={20} /></a>
            </button>
            <button className="bg-rose-500 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-all">
            <a href="https://wa.me/message/JG2WQ7ZXYWU6B1" target="_blank"><FaWhatsapp size={20} /></a>
            </button>
            <button className="bg-rose-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-all">
             <a href="tel:9151037784"> <FaPhone  size={20} /></a>
            </button>
          </div>
        )}
        <button
          className="bg-rose-400 text-white p-3 rounded-full shadow-lg hover:bg-rose-800 transition-all"
        >
          <FaBars size={20} />
        </button>
      </div>
    </div>
  );
};

export default ContactButton;
