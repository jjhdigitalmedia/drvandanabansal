import React from 'react'
// import GoogleReview from '../GoogleReview'
import reviewVideo from '../../assets/videos/reviewVideo.mp4';
import Ptientsreiview from '../../assets/videos/Ptientsreiview.mp4';
import patient from '../../assets/videos/patient.mp4';

export const PatientReviewVideo = () => {
  const TestimonialsVideo = [
    {
      v1: reviewVideo,
    },
    {
      v1: Ptientsreiview,
    },
    {
      v1: patient,
    },
  ]
  return (
    <div className='w-11/12 m-auto text-center py-28 '>
      <h1 className='text-3xl font-bold text-center mb-5'>Patient's Review</h1>
      {
        TestimonialsVideo.map((ind, k) => (
          <video key={k} className="h-full w-96 m-1 inline-block rounded-3xl border-4 border-rose-100 round-2xl" controls
            src={ind.v1}>
            <source
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ))
      }
    </div>
  )
}

export default PatientReviewVideo;