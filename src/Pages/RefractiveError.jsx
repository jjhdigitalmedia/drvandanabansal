import React from 'react'

const RefractiveError = () => {
  return (
    <div className=' w-4/5 pt-32 m-auto'>
    <h1 className='text-3xl font-bold my-10'>
        Refractive Errors
    </h1>
    <div>
        <p className='text-left my-10'>
            Refractive errors are vision problems that occur when the shape of the eye prevents light from focusing directly on the retina. These errors result in blurred vision, which is the most common vision impairment.
        </p>
        <h3 className='text-2xl font-bold my-8'>Types of Refractive Errors</h3>
        <ul type='A' className='text-left'>
            <li type='A'>
                Myopia (Nearsightedness):
                <ol type='1' className='text-left m-3'>
                    <li type='1'>
                        Description: Objects nearby are seen clearly, while objects farther away appear blurred.
                    </li>
                    <li type='1'>
                        Cause: The eyeball is too long, or the cornea is too curved, causing light to focus in front of the retina.
                    </li>
                    <li type='1'>
                        Prevalence: Common among children and young adults.
                    </li>
                </ol>
            </li>
            <li type='A'>
                Hyperopia (Farsightedness):
                <ol type='1' className='text-left m-3'>
                    <li type='1'>
                        Description: Objects in the distance are seen more clearly than those that are close.
                    </li>
                    <li type='1'>
                        Cause: The eyeball is too short, or the cornea is not curved enough, causing light to focus behind the retina.
                    </li>
                    <li type='1'>
                        Prevalence: Can be present from birth, often affecting adults as they age.
                    </li>
                </ol>
            </li>
            <li type='A'>
                Astigmatism:
                <ol type='1' className='text-left m-3'>
                    <li type='1'>
                        Description: Distorted or blurred vision at any distance.
                    </li>
                    <li type='1'>
                        Cause: The cornea or lens is irregularly shaped, causing light to focus on multiple points in the eye rather than on a single point on the retina.
                    </li>
                    <li type='1'>
                        Prevalence: Often occurs with myopia or hyperopia.
                    </li>
                </ol>
            </li>
            <li type='A'>
                Presbyopia:
                <ol type='1' className='text-left m-3'>
                    <li type='1'>
                        Description: Difficulty in reading or seeing objects up close, commonly occurring with aging.
                    </li>
                    <li type='1'>
                        Cause: The lens of the eye becomes less flexible, making it harder to focus on close objects.
                    </li>
                    <li type='1'>
                        Prevalence: Affects most people over the age of 40.
                    </li>
                </ol>
            </li>
        </ul>
    </div>
</div>
  )
}

export default RefractiveError