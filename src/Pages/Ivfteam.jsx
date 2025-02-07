import React from 'react'
import { useState, useEffect } from 'react';
import DrBANSAL from '../assets//DrBANSAL.jpg';
import aboutvandana from '../assets/aboutvandana.jpg';
import DrBansalPic from '../assets/IVFTeamPic/DrBansalPic.jpg';
import DrVandanaPic from '../assets/IVFTeamPic/DrVandanaPic.jpg';
import DrArpitPic from '../assets/IVFTeamPic/DrArpitPic.png';
import DrAnjulaPic from '../assets/IVFTeamPic/DrAnjulaPic.png';
import DrHarshitPic from '../assets/IVFTeamPic/DrHarshitPic.jpg';
import DrSakshiPic from '../assets/IVFTeamPic/DrSakshiPic.jpg';
import DrMoolNarayanPic from '../assets/IVFTeamPic/DrMoolNarayanPic.jpg';
import BosePic from '../assets/IVFTeamPic/BosePic.png';
import MrsMamtaPic from '../assets/IVFTeamPic/MrsMamtaPic.jpg';
import DrShipraPic from '../assets/IVFTeamPic/DrShipraPic.jpg';
import gallery01 from '../assets/Gallery/gallery01.jpg';
import qqq1 from '../assets/Banners/qqq1.jpg';

const pics = [
    {
        photo: DrBANSAL,
        name: 'Late Dr. AK Bansal',
        qualification: 'M.B.B.S., MS, FAIS, FCGP, FIAGES',
        desg: 'Founder',

    },
    {
        photo: aboutvandana,
        name: 'Dr Vandan Bansal',
        qualification: 'MS, D.Phil (Gold Medalist), DGO, FCGP',
        desg: 'Director',

    },
    {
        photo: DrArpitPic,
        name: 'Dr Arpit Bansal',
        qualification: 'MBBS, MS, FMAS, FCS',
        desg: 'Director',

    },
    {
        photo: DrAnjulaPic,
        name: 'Dr Anjula Sahay',
        qualification: 'MBBS, DGO, FCPS',
        desg: 'IVF Counselor',

    },
    {
        photo: gallery01,
        name: 'Mrs. Mamta Tiwari',
        qualification: 'M.Sc. (Medical Micro Biology)',
        desg: 'IVF Counselor',

    },
    {
        photo: BosePic,
        name: 'Mr Saugat Bose',
        qualification: 'M.Sc. (Biochemistry)',
        desg: 'Embryologist',

    },
    {
        photo: gallery01,
        name: 'Dr Harshit Bansal',
        qualification: 'Photo booth  jianbing microdosing tousled waistcoat',
        desg: 'slk',

    },
    {
        photo: gallery01,
        name: 'Dr Sakshi Bansal',
        qualification: 'slkg',
        desg: 'slk',

    },
    {
        photo: gallery01,
        name: 'Dr Zainab',
        qualification: 'slkg',
        desg: 'slk',

    }
]

const IVFteam = () => {
    return (
        <section class="text-gray-600 body-font">
            <CardDemo />
        </section>
    )
}

export default IVFteam;

const CardDemo = () => {
    // Example card data
    const cardData = [
        { id: 6, photo: DrBansalPic, title: 'Late Dr. Ashwini Kumar Bansal', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 1, photo: DrVandanaPic, title: 'Dr. Vandana Bansal', description: 'This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 3, photo: DrArpitPic, title: 'Dr. Arpit Bansal', description: 'This is card 3This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 2, photo: MrsMamtaPic, title: 'Mrs. Mamta Tiwari', description: 'This is card 2This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 4, photo: DrAnjulaPic, title: 'Dr. Anjula Sahay', description: 'This is card 4This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 5, photo: BosePic, title: 'Mr. Saugat Bose', description: 'This is card 5This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 5, photo: DrMoolNarayanPic, title: 'Dr. Mool Narayan Verma', description: 'This is card 5This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: DrHarshitPic, title: 'Dr Harshit Bansal', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: DrSakshiPic, title: 'Dr Sakshi Bansal', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: DrShipraPic, title: 'Dr Shipra', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: DrArpitPic, title: 'Dr Zainab', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
        { id: 6, photo: DrArpitPic, title: 'Ms. Jyoti', description: 'This is card 6This lorem is card 1This lorem is card 1This lorem is card 1This lorem isThis lorem is card 1This lorem is card 1Th card 1', Knowmore: 'Know more...' },
    ];

    // State to control the current index of the cards
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardData.length - 3 : prevIndex - 1));
    };

    const slideRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex === cardData.length - 3 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            slideRight(); // Automatically slide to the right
        }, 5000); // 3000ms = 3 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs only once when the component mounts



    return (
        <>
            <img
                src={qqq1}
                alt='ghfhfg'
                className="w-full h-auto object-cover rounded-lg sm:-mb-72"
            />
            <div className="container mx-auto -mt-20 py-8">
                <div className="flex overflow-hidden">
                    {/* Cards */}
                    <div
                        className="flex transition-transform duration-500 mb-20"

                        style={{
                            transform: `translateX(-${currentIndex * 100 / Math.min(cardData.length, 3)}%)`, // Adjust based on card count or max 3 cards
                            width: `${Math.min(cardData.length, 3) * 100}%`, // Ensure max 3 cards displayed on large screens
                        }}
                    >
                        {cardData.map((card) => (
                            <div className="relative w-80 bg-white mx-2 shadow-md rounded-2xl p-6 flex justify-center items-center z-50 min-h-fit mt-28">
                                {/* Circle Image */}
                                <div className="absolute -top-28 left-1/2 transform -translate-x-1/2">
                                    <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-md">
                                        <img
                                            src={card.photo}
                                            alt="Profile"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>
                                <div className="mt-20 text-center">
                                    <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                                    <p className="text-gray-600 mt-2">
                                        This is a description for the card. You can use this space to provide details.
                                    </p>
                                    <button className="mt-4 px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Left and Right Buttons */}
                    <button
                        onClick={slideLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full sm:hidden"
                    >
                        &lt;
                    </button>
                    <button
                        onClick={slideRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full sm:hidden"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </>
    );
}
// export default CardDemo;
