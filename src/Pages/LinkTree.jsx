import { Mail, Instagram, Facebook, Youtube, Globe, Linkedin } from "lucide-react";
import DrVandanaBansalPhoto from '../assets/DrVandanaBansalPhoto.jpg';

const links = [
  {
    name: "Instagram",
    icon: <Instagram className="mr-2 h-5 w-5" />,
    url: "https://instagram.com/yourprofile",
  },
  {
    name: "Facebook",
    icon: <Facebook className="mr-2 h-5 w-5" />,
    url: "https://facebook.com/yourprofile",
  },
  {
    name: "YouTube",
    icon: <Youtube className="mr-2 h-5 w-5" />,
    url: "https://youtube.com/yourchannel",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="mr-2 h-5 w-5" />,
    url: "https://linkedin.com/in/yourprofile",
  },
  {
    name: "Website",
    icon: <Globe className="mr-2 h-5 w-5" />,
    url: "https://yourwebsite.com",
  },
  {
    name: "Email Me",
    icon: <Mail className="mr-2 h-5 w-5" />,
    url: "mailto:yourname@example.com",
  },
];

function LinkTree() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-blue-100 px-4 py-10">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-gray-200">
        <div className="text-center mb-6">
          <img
            src={DrVandanaBansalPhoto}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border-4 border-pink-300 shadow-md"
          />
          <h2 className="text-2xl font-bold mt-4">Dr. Your Name</h2>
          <p className="text-sm text-gray-600">Gynecologist | IVF Expert | Surgeon</p>
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