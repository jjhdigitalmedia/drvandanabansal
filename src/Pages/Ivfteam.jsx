import React from 'react'
import DrBANSAL from '../assets//DrBANSAL.jpg';
import aboutvandana from '../assets/aboutvandana.jpg';
import ArpitPic from '../assets/ArpitPic.png';
import Anjula from '../assets/Anjula.jpg';
import SaugatBose from '../assets//SaugatBose.png';
import gallery01 from '../assets/Gallery/gallery01.jpg';
import gallery02 from '../assets/Gallery/gallery02.jpg';
import gallery04 from '../assets/Gallery/gallery04.jpg';

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
        photo: ArpitPic,
        name: 'Dr Arpit Bansal',
        qualification: 'MBBS, MS, FMAS, FCS',
        desg: 'Director',

    },
    {
        photo: Anjula,
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
        photo: SaugatBose,
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
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4 ">
                    {
                        pics.map((ind) => (
                            <div class="p-2 md:w-1/3">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={ind.photo} alt="blog" />
                                    <div class="p-2">
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{ind.name}</h1>
                                        <p class="leading-relaxed mb-3">{ind.qualification}</p>
                                        <p class="leading-relaxed mb-3">{ind.desg}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="flex justify-center space-x-4 p-8">
                        {pics.map((card, index) => (
                            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
                            <img src={card.photo} alt={card.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.name}</h3>
                              <p className="text-gray-600 mb-4">{card.desg}</p>
                              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
                                Learn More
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IVFteam;