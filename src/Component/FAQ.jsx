import React from "react";
import '../Style/Style.css'
import 'aos/dist/aos.css'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

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

    const qna = [
        {
            i: 1,
            q: 'What treatments does Dr. Vandana Bansal offer?',
            ana: 'Dr. Vandana Bansal provides comprehensive women’s healthcare including IVF & infertility treatment, laparoscopic and hysteroscopic surgery, high-risk pregnancy care, menopause management and preventive women’s health.'
        },
        {
            i: 2,
            q: 'When should I consult an infertility specialist?',
            ana: 'If you have been trying to conceive without success, have irregular periods, PCOS, endometriosis, low ovarian reserve, recurrent pregnancy loss or previous IVF failure, a fertility consultation may be helpful.'
        },
        {
            i: 3,
            q: 'What is the difference between IVF and ICSI?',
            ana: 'oth are assisted reproductive treatments. In ICSI, a single sperm is directly injected into the egg and may be recommended in certain cases of male-factor infertility or previous fertilisation problems.'
        },
        {
            i: 4,
            q: 'What conditions can be treated with laparoscopic surgery?',
            ana: 'Laparoscopic surgery may be used for conditions such as fibroids, endometriosis, ovarian cysts, pelvic adhesions, tubal disease and selected gynaecological procedures.'
        },
        {
            i: 5,
            q: 'What is hysteroscopy used for?',
            ana: 'steroscopy allows evaluation and treatment of problems inside the uterus, including polyps, submucous fibroids, adhesions and certain uterine abnormalities.'
        },
        {
            i: 6,
            q: 'When is a pregnancy considered high-risk?',
            ana: 'Pregnancy may require specialised monitoring in situations such as advanced maternal age, hypertension, diabetes, multiple pregnancy, previous pregnancy complications or pregnancy following IVF.'
        },
        {
            i: 7,
            q: 'What happens during a menopause consultation?',
            ana: 'Menopause care may include assessment of symptoms, bone health, cardiovascular and metabolic risk, sleep, mood, vaginal health and overall long-term wellbeing.'
        },
        {
            i: 8,
            q: 'What is in vitro fertilization (IVF) or Test Tube baby?',
            ana: 'It is one of the many treatment options available to infertile couples. In Vitro means "in glass" and refers to the fact that fertilization takes place outside of the womans body. IVF makes it possible to combine sperm and eggs in a laboratory for a baby that is genetically related to one or both partners. The fertilization of eggs and sperms are done in the laboratory resulting in an embryo.'
        },
        {
            i: 9,
            q: 'How can I book an appointment with Dr. Vandana Bansal?',
            ana: 'You can book an appointment by contacting the clinic or using the appointment option on the website.'
        },
        {
            i: 10,
            q: 'Where can I consult Dr. Vandana Bansal?',
            ana: 'Consultations are available at Jeevan Jyoti Hospital, Prayagraj, with appointments available for fertility, gynaecological surgery, high-risk pregnancy and menopause care.'
        },
    ]

    return (
        <>
            <h1 className="text-center font-cambria font-cormorant font-semibold my-10 text-5xl text-pink-700">Frequently Asked Questions</h1>
            <div className="text-center m-auto rounded-3xl faq" >
                {qna.map((ind, k) => (
                    <Accordion key={k} className="text-justify px-4 hover:bg-[#f2f2f2] borderb-2 border-separate border-b-slate-100" daa-aos='fade-up' open={open === ind.i} icon={<Icon id={ind.i} open={open} />}>
                        <AccordionHeader className="text-sm md:text-md py-3" onClick={() => handleOpen(ind.i)}>{ind.q}</AccordionHeader>
                        <AccordionBody >
                            {ind.ana}
                        </AccordionBody>
                    </Accordion>
                ))
                }
            </div>
        </>
    );
}
