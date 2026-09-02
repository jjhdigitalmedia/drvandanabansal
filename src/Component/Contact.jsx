// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     formData.append("access_key", "f5a98577-08b5-4cd3-ae37-3bb1137a0e35");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     }).then((res) => res.json());

//     if (res.success) {
//       console.log("Success", res);
//       alert('Form has bees successfully submitted, Thanks for contact me')
//       const formData = new FormData('');
//     }
//   };

//   return (
//     <section id='contact' className="text-gray-600 body-font relative">
//       <div className="container px-5 py-12 mx-auto">
//         <div className="flex flex-col text-center w-full mb-12">
//           <h1 className="text-center font-serif text-3xl md:text-5xl my-10 text-pink-700">Book Your Appointment</h1>
//           <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base font-semibold">If you're seeking treatment or have any queries, feel free to submit this form. I'll get back to you as soon as possible.</p>
//         </div>
//         <div className="lg:w-1/2 md:w-2/3 mx-auto">
//           <form onSubmit={onSubmit} className="flex flex-wrap -m-2">
//             <div className="p-2 w-1/2">
//               <div className="relative">
//                 <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
//                 <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//               </div>
//             </div>
//             <div className="p-2 w-1/2">
//               <div className="relative">
//                 <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile</label>
//                 <input type="tel" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//               </div>
//             </div>
//             <div className="p-2 w-full">
//               <div className="relative">
//                 <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
//                 <input type="tel" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-700 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//               </div>
//             </div>
//             <div className="p-2 w-full">
//               <div className="relative">
//                 <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
//                 <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-700 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//               </div>
//             </div>
//             <div className="p-2 w-full">
//               <button className="flex mx-auto text-white bg-pink-800 border-0 py-2 px-8 focus:outline-none hover:bg-pink-800 rounded text-lg">Submit</button>
//             </div>
//             <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
//               {/* <a className="text-rose-500 text-wrap">bansal.drvandana@gmail.com</a> */}
//               <a href="mailto:bansal.drvandana@gmail.com?subject=Inquiry&body=Hello, I have a question about..." className='text-pink-700' target="_blank">bansal.drvandana@gmail.com</a>
//               <p className="leading-normal my-5">162, Jeevan Jyoti Hospital, Lowther Rd, Himmat Ganj, Bai Ka Bagh, Prayagraj, Uttar Pradesh 211003
//               </p>
//               <div className="flex justify-center gap-2 md:gap-4 mt-3">
//                 {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
//                   (Icon, index) => (
//                     <div
//                       key={index}
//                       className="bg--100 shadow-md p-3 rounded-full text-pink-600 hover:bg-pink-800 hover:text-white transition duration-300 cursor-pointer"
//                     >
//                       <Icon size={18} />
//                     </div>
//                   )
//                 )}
//               </div>

//             </div>
//           </form>
//         </div>
//       </div>
//       <div>
//       </div>
//     </section>
//   )
// }

// export default Contact

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaBaby,
  FaHeartbeat,
  FaUserMd,
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

// List of problems / services treated by Dr. Vandana Bansal.
// Update / reorder freely — "Other" is always kept last.
const problemOptions = [
  "Infertility",
  "PCOS / PCOD",
  "Pregnancy Care",
  "High-Risk Pregnancy",
  "Laparoscopic Surgery",
  "Menstrual Disorders",
  "Gynecological Cancer Screening",
  "Adolescent Gynecology",
  "Menopause Management",
  "Antenatal & Postnatal Care",
  "Other",
];

// Main profile photo — replace with the real photo path/URL
const profilePhoto = "/images/dr-vandana-bansal.jpg";

// Small gallery of clinic / work photos — replace src with real images
const galleryPhotos = [
  { src: "/images/clinic-1.jpg", alt: "Clinic reception" },
  { src: "/images/clinic-2.jpg", alt: "Consultation room" },
  { src: "/images/clinic-3.jpg", alt: "With a happy patient" },
  { src: "/images/clinic-4.jpg", alt: "Hospital building" },
];

// Quick stats / achievements shown as badges under the photo
const stats = [
  { icon: FaCalendarCheck, value: "15+", label: "Years Experience" },
  { icon: FaBaby, value: "5000+", label: "Successful Deliveries" },
  { icon: FaUserMd, value: "10000+", label: "Patients Treated" },
  { icon: FaHeartbeat, value: "MBBS, MS", label: "Obs & Gynae" },
];

const socialLinks = [
  { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  {
    Icon: FaWhatsapp,
    href: "https://wa.me/910000000000",
    label: "WhatsApp",
  },
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f5a98577-08b5-4cd3-ae37-3bb1137a0e35");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form has been successfully submitted, thanks for contacting me");
      event.target.reset();
    }
  };

  return (
    <section id="contact" className="text-gray-600 body-font relative bg-[#f1f1f1]">
      <div className="container px-5 py-12 mx-auto">
        {/* Heading */}
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-center font-serif text-3xl md:text-5xl my-10 text-pink-800">
            Book Your Appointment
          </h1>
          <p className="lg:w-2/3 mx-auto mt-2 leading-relaxed text-base font-semibold">
            If you're seeking treatment or have any queries, feel free to submit
            this form. I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Left: Features | Right: Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE - Photos */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 h-full">
            {/* Main profile photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src={profilePhoto}
                alt="Dr. Vandana Bansal"
                className="w-full h-72 md:h-80 object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-white font-serif text-xl">
                  Dr. Vandana Bansal
                </h2>
                <p className="text-white/90 text-sm">
                  Gynecologist & Obstetrician
                </p>
              </div>
            </div>

            {/* Stat badges */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[#f1f1f1] rounded-xl p-3"
                >
                  <div className="shrink-0 bg-pink-800 text-white p-2.5 rounded-full">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 leading-tight">
                      {value}
                    </p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo gallery */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {galleryPhotos.map(({ src, alt }, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-sm"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-28 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Quick contact info */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-pink-800 shrink-0" />
                <span>
                  162, Jeevan Jyoti Hospital, Lowther Rd, Himmat Ganj, Bai Ka
                  Bagh, Prayagraj, Uttar Pradesh 211003
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-800 shrink-0" />
                <a
                  href="mailto:bansal.drvandana@gmail.com?subject=Inquiry&body=Hello, I have a question about..."
                  className="hover:text-pink-800"
                >
                  bansal.drvandana@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-pink-800 shrink-0" />
                <a href="tel:+910000000000" className="hover:text-pink-800">
                  +91 00000 00000
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <form onSubmit={onSubmit} className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#f1f1f1] bg-opacity-50 rounded border border-gray-300 focus:border-pink-800 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    className="w-full bg-[#f1f1f1] bg-opacity-50 rounded border border-gray-300 focus:border-pink-800 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-[#f1f1f1] bg-opacity-50 rounded border border-gray-300 focus:border-pink-800 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* New: Problem / Concern dropdown */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="problem" className="leading-7 text-sm text-gray-600">
                    What problem are you facing?
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    required
                    defaultValue=""
                    className="w-full bg-[#f1f1f1] bg-opacity-50 rounded border border-gray-300 focus:border-pink-800 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="" disabled>
                      Select a concern
                    </option>
                    {problemOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-[#f1f1f1] bg-opacity-50 rounded border border-gray-300 focus:border-pink-800 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-pink-800 border-0 py-2 px-8 focus:outline-none hover:bg-pink-900 rounded text-lg transition-colors duration-200"
                >
                  Submit
                </button>
              </div>

              <div className="p-2 w-full pt-8 mt-4 border-t border-gray-200 text-center">
                <div className="flex justify-center gap-2 md:gap-4 mt-3">
                  {socialLinks.map(({ Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="bg-[#f1f1f1] shadow-md p-3 rounded-full text-pink-800 hover:bg-pink-800 hover:text-white transition duration-300 cursor-pointer"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Google Map - below both columns */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-gray-200">
          <iframe
            title="Jeevan Jyoti Hospital Location"
            src="https://www.google.com/maps?q=Jeevan+Jyoti+Hospital,+Lowther+Rd,+Himmat+Ganj,+Bai+Ka+Bagh,+Prayagraj,+Uttar+Pradesh+211003&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;

