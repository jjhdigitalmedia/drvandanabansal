import React from 'react'

const Cataract = () => {
  return (
    <div className=' w-4/5 pt-32 m-auto'>
    <h1 className='text-3xl font-bold my-10'>
      Cataracts: Understanding the Clouding of the Lens
    </h1>
    <div>
      <p className='text-left my-10'>
        Cataracts are a common eye condition where the lens of the eye becomes progressively opaque, leading to blurred vision. The lens, which is normally clear, focuses light onto the retina at the back of the eye, allowing for clear vision. When a cataract forms, the lens clouds and scatters light, resulting in vision impairment.
      </p>
      <h3 className='text-2xl font-bold my-8'>Causes of Cataracts</h3>
      <ul type='A' className='text-left'>
        <li type='A'className='m-3'>
          Aging:
          <p className='m-3'>The most common cause, as proteins in the lens begin to break down and clump together with age.</p>
        </li>
        <li type='A'className='m-3'>
          Genetics:
          <p className='m-3'>Family history of cataracts can increase the risk.</p>
        </li>
        <li type='A'className='m-3'>
          Trauma:
          <p className='m-3'>Injury to the eye can result in the development of cataracts.</p>
        </li>
        <li type='A' className='m-3'>
          Symptoms
          <ul type='circle' className='m-3'>
            <li type='circle'>Difficulty with night vision</li>
            <li type='circle'>Sensitivity to light and glare</li>
            <li type='circle'>Seeing "halos" around lights</li>
            <li type='circle'>Frequent changes in eyeglass or contact lens prescriptions</li>
            <li type='circle'>Fading or yellowing of colors</li>
            <li type='circle'>Double vision in a single eye</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Cataract