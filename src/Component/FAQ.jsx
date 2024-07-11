import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import '../Style/Style.css'
import 'aos/dist/aos.css'
import '../Style/Style.css'

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function FAQ() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="">
                <h1 className="text-left ml-32 font-bold text-5xl text-slate-700">FAQs</h1>
                <div className=" text-center m-auto rounded-3xl faq" >
                    <Accordion className="border-2 hover:bg-rose-200 border-none my-2 rounded-2xl px-3 border-b-slate-600 bg-gradient-to-r from-rose-200" data-aos='fade-up' open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)}>What are the qualifications and specializations of the doctors available for consultation on this platform?</AccordionHeader>
                        <AccordionBody>
                        All doctors on our platform are highly qualified professionals with valid medical degrees and relevant certifications. They specialize in various fields, including general medicine, pediatrics, cardiology, dermatology, mental health, and more. Detailed profiles of each doctor, including their qualifications, experience, and areas of expertise, are available for you to review.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className=" border-2 hover:bg-rose-200 border-none my-2 rounded-2xl px-3 border-b-slate-600 bg-gradient-to-r from-rose-200" data-aos='fade-up' open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                        How do I book an appointment with a doctor through the website?
                        </AccordionHeader>
                        <AccordionBody>
                        Booking an appointment is easy and convenient. Simply create an account or log in to your existing account, browse through the list of available doctors, select your preferred doctor and available time slot, and confirm your appointment. You will receive a confirmation email or notification with the appointment details.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className=" border-2 hover:bg-rose-200 border-none my-2 rounded-2xl px-3 border-b-slate-600 bg-gradient-to-r from-rose-200" data-aos='fade-up' open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                        What is the process for obtaining a prescription after an online consultation?
                        </AccordionHeader>
                        <AccordionBody>
                        After your consultation, if the doctor determines that a prescription is necessary, they will electronically send a prescription to your account. You can download or print the prescription directly from the website. Some pharmacies also accept electronic prescriptions, allowing you to fill your prescription without a physical copy.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className=" border-2 hover:bg-rose-200 border-none my-2 rounded-2xl bg-gradient-to-r from-rose-200 px-3 border-b-slate-600" open={open === 4} data-aos='fade-up' icon={<Icon id={4} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                        Are there any privacy measures in place to protect my personal and medical information?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, we prioritize your privacy and have implemented robust security measures to protect your personal and medical information. Our website uses encryption protocols to secure data transmission, and we comply with all relevant data protection regulations. Only authorized personnel and your consulting doctor have access to your medical records.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className=" border-2 hover:bg-rose-200 border-none my-2 rounded-2xl bg-gradient-to-r from-rose-200 px-3 border-b-slate-600" data-aos='fade-up' open={open === 5} icon={<Icon id={5} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(5)}>
                        What types of consultations are offered (e.g., specialist consultations in Opthanmology / Eye, Dibetic Ratinopathy)?
                        </AccordionHeader>
                        <AccordionBody>
                        Our platform offers a wide range of consultation types, including Eye Specialist consultations (such as Opthanmology / Eye, Dibetic Ratinopathy ), nutritional counseling, and more. You can choose the type of consultation based on your needs and the available specialties.
                        </AccordionBody>
                    </Accordion>
                    <Accordion className=" border-2 hover:bg-rose-100 border-none my-2 rounded-2xl px-3 border-b-slate-600 bg-gradient-to-r from-rose-200" data-aos='fade-up' open={open === 6} icon={<Icon id={6} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(6)}>
                        Is it possible to consult with a doctor outside of regular business hours or on weekends?
                        </AccordionHeader>
                        <AccordionBody>
                        Yes, we offer flexible consultation hours to accommodate your schedule. Many doctors on our platform provide evening and weekend appointments. You can check the availability of doctors and book appointments that fit your timetable.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </>
    );
}