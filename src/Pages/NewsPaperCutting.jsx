import React from 'react'
import A from '../assets/NewsPapers/A.jpg'
import B from '../assets/NewsPapers/B.jpg'
import C from '../assets/NewsPapers/C.jpg'
import D from '../assets/NewsPapers/D.jpg'
import E from '../assets/NewsPapers/E.jpg'
import F from '../assets/NewsPapers/F.jpg'
import G from '../assets/NewsPapers/G.jpg'
import H from '../assets/NewsPapers/H.jpg'
import I from '../assets/NewsPapers/I.jpg'
import J from '../assets/NewsPapers/J.jpg'
import K from '../assets/NewsPapers/K.jpg'
import L from '../assets/NewsPapers/L.jpg'
import M from '../assets/NewsPapers/M.jpg'
import N from '../assets/NewsPapers/N.jpg'
import O from '../assets/NewsPapers/O.jpg'

import { Helmet } from 'react-helmet'
const NewsPaperCutting = () => {
    const data = [
        {
            imageLink: A,
        },
        {
            imageLink: B,
        },
        {
            imageLink: C,
        },
        {
            imageLink: D,
        },
        {
            imageLink: E,
        },
        {
            imageLink: F,
        },
        {
            imageLink: G,
        },
        {
            imageLink: H,
        },
        {
            imageLink: I,
        },
        {
            imageLink: J,
        },
        {
            imageLink: K,
        },
        {
            imageLink: L,
        },
        {
            imageLink: M,
        },
        {
            imageLink:
                N,
        },
        {
            imageLink:
                O,
        },
    ];

    return (
        <>
            <Helmet>
                <title>In News | Dr. Vandana Bansal</title>
                <meta name="description" content="Get expert gynecology consultations and women's health care services." />
                <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
                <meta property="og:title" content="Best Gynecology Services" />
                <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
            </Helmet>
            <h1 className='mx-40 text-xl md:text-3xl my-3 font-semibold text-gray-700'>RECOGNITION</h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mx-auto w-4/5">
                {data.map(({ imageLink }, index) => (
                    <div key={index}>
                        <img
                            className="h- border-2 shadow-md w-full max-w-full rounded-lg object-cover object-center"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewsPaperCutting