import React from 'react'

const Glaucoma = () => {
    return (
        <div className=' w-4/5 pt-32 m-auto'>
            <h1 className='text-3xl font-bold my-10'>
            Glaucoma: A Silent Threat to Vision
            </h1>
            <div>
                <p className='text-left my-10'>
                Glaucoma is a group of eye diseases that damage the optic nerve, which is crucial for vision. This damage is often caused by abnormally high pressure in the eye (intraocular pressure, or IOP). If untreated, glaucoma can lead to permanent vision loss and blindness. It is one of the leading causes of blindness worldwide.
                </p>
                <h3 className='text-2xl font-bold my-8'>Causes and Risk Factors</h3>
                <ul className='text-left'>
                    <li type='circle'>
                    Increased Intraocular Pressure: The primary cause of optic nerve damage in glaucoma.
                    </li>
                    <li type='circle'>
                    Age: Risk increases with age, particularly after 60.
                    </li>
                    <li type='circle'>
                    Family History: Genetics play a significant role; having a family history of glaucoma increases the risk.
                    </li>
                    <li type='circle'>
                    Ethnicity: African Americans and Hispanics are at higher risk for open-angle glaucoma, while Asians are more prone to angle-closure glaucoma.
                    </li>
                    <li type='circle'>
                    Medical Conditions: Conditions such as diabetes, heart disease, and hypertension can increase risk.
                    </li>
                    <li type='circle'>
                    Eye Conditions: Severe nearsightedness or farsightedness and eye injuries.
                    </li>
                    <li type='circle'>
                    Long-term Use of Corticosteroids: Especially in eye drop form.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Glaucoma