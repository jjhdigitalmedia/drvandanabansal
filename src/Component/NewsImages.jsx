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
const NewsImages = () => {
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
            <h1 className='mx-40 text-5xl my-3 font-semibold text-gray-700'>Media</h1>

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

export default NewsImages