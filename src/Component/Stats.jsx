// import React, { useEffect, useState, useRef } from 'react'
// import familyDoctors1 from "../assets/familyDoctors1.png";
// const Stats = () => {


//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           } else {
//             setIsVisible(false);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//       }
//     );

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, []);


//   const [patients, setPatients] = useState(0);

//   useEffect(() => {

//       if (patients < 10000) {
//         const timer = setTimeout(() => {
//           setPatients(patients + 10);
//         }, 1);
//         return () => clearTimeout(timer);
//       }
    
//   }, [patients, 10000]);

//   return (
//     <>
//       <div>
//         <img className='md:w-4/5 -mt-10 mx-auto' src={familyDoctors1} alt="" />
//       </div>
//     <div className="bg-pink-800 flex flex-wrap p-16 w-full m-auto ">
//       <div ref={elementRef} className="lg:w-1/4 md:border-r-2 text-center md:w-1/2 w-full px-10">
//         <h1 className='mb-8 text-2xl font-bold text-white'>Happy Patients</h1>
//         <span className='text-3xl text-white font-extrabold'>{patients}+</span>
//       </div>

//       <div className="lg:w-1/4 md:border-r-2 text-center md:w-1/2 w-full px-4">
//         <h1 className='mb-8 text-2xl font-bold text-white'>Years of Experience</h1>
//         <span className='text-3xl text-white font-extrabold'>38+</span>
//       </div>

//       <div className="lg:w-1/4 md:border-r-2 text-center md:w-1/2 w-full px-4">
//         <h1 className='mb-8 text-2xl font-bold text-white'>Success Rate</h1>
//         <span className='text-3xl text-white font-extrabold'>65%+</span>
//       </div>

//       <div className="lg:w-1/4 text-center md:w-1/2 w-full px-1">
//         <h1 className='mb-8 text-2xl font-bold text-white'>Happy Patients</h1>
//         <span className='text-3xl text-white font-extrabold'>{patients}+</span>
//       </div>

//     </div>
//     </>
//   )
// }

// export default Stats;

import { useRef, useEffect, useState } from "react";


function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={ref} className="bg-white py-16">
      <div className="bg-pink-800 text-white py-5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Counter label="Successful Pregnancies" value={40000} visible={visible} />
          <Counter label="Years of Dedication" value={38} visible={visible} />
          <Counter label="High Risk Cases Managed" value={5000} visible={visible} />
          <Counter label="Trusted by Families" value={40000} visible={visible} />
        </div>
      </div>

      {/* <div className="max-w-6xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-8">
        <AchievementCard />
        <AchievementCard />
        <AchievementCard />
      </div> */}
    </section>
  );
}
export default Stats;

function Counter({ label, value, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div>
      <h4 className="text-3xl font-bold">{count}+</h4>
      <p className="text-sm mt-1">{label}</p>
    </div>
  );
}
