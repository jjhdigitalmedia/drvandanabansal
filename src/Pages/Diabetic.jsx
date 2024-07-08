import React from 'react'

const Diabetic = () => {
  return (
    <div className=' w-4/5 pt-32 m-auto'>
    <h1 className='text-3xl font-bold my-10'>
    Diabetic Retinopathy: Understanding Diabetes-Related Vision Loss
    </h1>
    <div>
        <p className='text-left my-10'>
        Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina). In the early stages, diabetic retinopathy may cause no symptoms or only mild vision problems, but it can lead to blindness if left untreated.
        </p>
        <h3 className='text-2xl font-bold my-8'>Types of Diabetic Retinopathy</h3>
        <ul className='text-left'>
            <li type='circle'>
            Non-Proliferative Diabetic Retinopathy (NPDR):
            </li>
            <li type='circle'>
            Proliferative Diabetic Retinopathy (PDR):
            </li>
        </ul>
        <h3 className='text-2xl font-bold my-8'>Causes and Risk Factors</h3>
        <ul className='m-8'>
            <li type='circle'>
            High Blood Sugar Levels: Prolonged high blood sugar can damage the tiny blood vessels that supply the retina.
            </li>
            <li type='circle'>
            Duration of Diabetes: The longer you have diabetes, the greater the risk of developing diabetic retinopathy.
            </li>
            <li type='circle'>
            Poor Diabetes Management: Inconsistent blood sugar control increases the risk.
            </li>
            <li type='circle'>
            Other Medical Conditions: High blood pressure, high cholesterol, and cardiovascular disease.
            </li>
            <li type='circle'>
            Pregnancy: Can exacerbate the condition.
            </li>
            <li type='circle'>
            Tobacco Use: Smoking can increase the risk of diabetic retinopathy.
            </li>
        </ul>
    </div>
</div>
  )
}

export default Diabetic