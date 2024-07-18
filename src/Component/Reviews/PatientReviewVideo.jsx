import React from 'react'
import GoogleReview from '../GoogleReview'

export const PatientReviewVideo = () => {
  return (
    <div className='w-11/12 m-auto text-center py-32 '>
      <h1 className='text-3xl text-center mb-5'>Patient's Review</h1>
      <video class="h-96 w-96 m-1 inline-block rounded-md border-8 border-rose-100 round-2xl" controls>
        <source
          src="src\assets\videos\Ptient'sreiview.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video class="h-96 w-96 m-1 inline-block rounded-md border-8 border-rose-100 round-2xl" controls>
        <source
          src="src\assets\videos\2patient.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <video class="h-96 w-96 m-1 inline-block rounded-md border-8 border-rose-100 round-2xl" controls>
        <source
          src="src\assets\videos\reviewVideo_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
