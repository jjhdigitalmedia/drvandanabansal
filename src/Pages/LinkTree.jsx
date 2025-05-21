import { Mail, Instagram, Facebook, Youtube, Globe, Linkedin, Calendar } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Colored Google icon

import DrVandanaBansalPhoto from '../assets/DrVandanaBansalPhoto.jpg';

const links = [
  {
    name: "Instagram",
    icon: <Instagram className="mr-2 h-5 w-5" />,
    url: "https://www.instagram.com/dr.vandanabansal/",
  },
  {
    name: "Facebook",
    icon: <Facebook className="mr-2 h-5 w-5" />,
    url: "https://www.facebook.com/vandana.bansal.33/",
  },
  {
    name: "YouTube",
    icon: <Youtube className="mr-2 h-5 w-5" />,
    url: "https://youtube.com/yourchannel",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="mr-2 h-5 w-5" />,
    url: "https://www.linkedin.com/in/dr-vandana-bansal-5916279b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Website",
    icon: <Globe className="mr-2 h-5 w-5" />,
    url: "https://drvandanabansal.in",
  },
  {
    name: "Email Me",
    icon: <Mail className="mr-2 h-5 w-5" />,
    url: "mailto:bansal.drvandana@example.com",
  },
  {
    name: "Feedback",
    icon: <FcGoogle size={25} className="mr-2 text-black h-5 w-5" />,
    url: "mailto:bansal.drvandana@example.com",
  },
  {
    name: "Book Appointment",
    icon: <Calendar className="mr-2 text-black h-5 w-5" />,
    url: "mailto:bansal.drvandana@example.com",
  },

];

function LinkTree() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-blue-200 px-4 py-10">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-gray-200">
        <div className="text-center mb-6">
          <img
            src={DrVandanaBansalPhoto}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-pink-300 shadow-md"
          />
          <h2 className="text-2xl font-bold mt-4">Dr. Vandana Bansal</h2>
          <p className="text-sm text-gray-600">Gynecologist | IVF Expert | Laparoscopic & Hysteroscopic Surgeon</p>
        </div>
        <div className="space-y-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button
                className="w-full flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-pink-100 transition-all"
              >
                {link.icon} {link.name}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
export default LinkTree