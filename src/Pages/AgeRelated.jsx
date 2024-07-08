import React from 'react'

const AgeRelated = () => {
    return (
        <div className=' w-4/5 pt-32 m-auto'>
            <h1 className='text-3xl font-bold my-10'>
                Age-Related Macular Degeneration (AMD): Understanding Vision Loss in Aging
            </h1>
            <div>
                <p className='text-left my-10'>
                    Age-related macular degeneration (AMD) is a common eye condition that affects the macula, the central part of the retina responsible for sharp, straight-ahead vision. AMD is a leading cause of vision loss in people over 50, and while it doesn’t lead to complete blindness, it can severely impair central vision, making activities like reading and driving difficult.
                </p>
                <h3 className='text-2xl font-bold my-8'>Types of AMD</h3>
                <ul className='text-left'>
                    <li type='circle'>
                        Dry AMD (Atrophic):
                    </li>
                    <li type='circle'>
                        Wet AMD (Neovascular or Exudative):
                    </li>
                    <li type='circle'>
                        Causes and Risk Factors
                    </li>
                </ul>
                <h3 className='text-2xl font-bold my-8'>Causes and Risk Factors</h3>
                <ul className='m-8'>
                    <li type='circle'>
                        Age: Risk increases significantly after age 50.
                    </li>
                    <li type='circle'>
                        Genetics: Family history of AMD increases risk.
                    </li>
                    <li type='circle'>
                        Race: More common in Caucasians.
                    </li>
                    <li type='circle'>
                        Smoking: Doubles the risk of AMD.
                    </li>
                    <li type='circle'>
                        Obesity: Associated with the progression of early and intermediate stages of AMD.
                    </li>
                    <li type='circle'>
                        High Blood Pressure: Increases risk of developing AMD.
                    </li>
                    <li type='circle'>
                        Diet: Poor diet lacking in fruits and vegetables.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AgeRelated