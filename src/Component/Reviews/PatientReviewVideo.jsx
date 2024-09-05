import React from 'react'
// import GoogleReview from '../GoogleReview'
import reviewVideo from'../../assets/videos/reviewVideo.mp4';
import Ptientsreiview from '../../assets/videos/Ptientsreiview.mp4';
import patient from'../../assets/videos/patient.mp4';

export const PatientReviewVideo = () => {
  return (
    <div className='w-11/12 m-auto text-center py-28 '>
      <h1 className='text-3xl font-bold text-center mb-5'>Patient's Review</h1>
      <video className="h-full w-96 m-1 inline-block rounded-3xl border-4 border-rose-100 round-2xl" controls>
        <source
          src={reviewVideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video className="h-full w-96 m-1 inline-block rounded-3xl border-4 border-rose-100 round-2xl" controls>
        <source
      src={Ptientsreiview}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video className="h-full w-96 m-1 inline-block rounded-3xl border-4 border-rose-100 round-2xl" controls>
        <source
          src={patient}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
