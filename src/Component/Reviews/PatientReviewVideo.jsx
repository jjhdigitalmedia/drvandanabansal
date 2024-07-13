import React from 'react'
import GoogleReview from '../GoogleReview'

export const PatientReviewVideo = () => {
  return (
    <div className='w-full m-auto py-32  bg-gradient-to-r from-rose-50'>
        <h1 className='text-3xl text-center mb-5'>Patient's Review</h1>
        <video class="h-1/2 w-1/2 text-center rounded-md m-auto " controls>
        <source
          src="src\assets\videos\Ptient's reiview.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* <GoogleReview/> */}
    </div>
  )
}
