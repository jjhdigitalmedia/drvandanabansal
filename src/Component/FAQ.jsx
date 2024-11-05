import React from "react";
import '../Style/Style.css'
import 'aos/dist/aos.css'
import '../Style/Style.css'
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
            q: 'What is infertility?',
            ana: 'Infertility is defined as the inability to conceive a child despite trying for one year.'
        },
        {
            i: 2,
            q: 'Is infertility a womans problem?',
            ana: 'It is a myth that infertility is always a "womans problem." In 50% of all infertility case male is directly or indirectly responsible (referred to as male factors).'
        },
        {
            i: 3,
            q: 'What causes infertility in men?',
            ana: 'Lifestyle can influence the number and quality of a mans sperm. Alcohol and drugs--including marijuana, nicotine, and certain medications--can temporarily reduce sperm quality. Also, environmental toxins, including pesticides and lead, may be to blame for some cases of infertility. The causes of sperm production problems can exist from birth or develop later as a result of severe medical illnesses, including mumps and some sexually transmitted diseases, or from a severe testicle injury, tumor, or other problem. Inability to ejaculate normally can prevent conception, too, and can be caused by many factors, including diabetes, surgery of the prostate gland or urethra, blood pressure medication, or impotence.'
        },
        {
            i: 4,
            q: 'What causes infertility in women?',
            ana: 'The other half of explained infertility cases are linked to female problems (called female factors), most commonly ovulation disorders. Without ovulation, eggs are not available for fertilization. Problems with ovulation are signaled by irregular menstrual periods or a lack of periods altogether (called amenorrhea)      Simple lifestyle factors--including stress, diet, or athletic training--can affect a womans hormonal balance.'
        },
        {
            i: 5,
            q: 'What is endometriosis?',
            ana: 'Endometriosis is a condition in which tissue similar to that normally lining the uterus is found outside of the uterus, usually in the ovaries, fallopian tubes, and other pelvic structures. Endometriosis has no single symptom that is diagnostic. Patients with endometriosis may have painful periods, pelvic pain and backache during menses, painful intercourse and infertility.'
        },
        {
            i: 6,
            q: 'What are uterine fibroids?',
            ana: 'Uterine fibroids are growth that develop from the cells that make up the muscle of the uterus. Thay are also called leiomyomas or myomas. Uterine fibroids are common, benign growths that occur quite often in women. About one in every four or five women has them. Fibroids are most common in women aged 30 - 40, but can occur at any age. Many women who have fibroids are not aware of them because the growth can remain small and not cause a problem. Some symptoms that may occur include bleeding, irregular periods, menstrual pain, abdominal pain, painful intercourse, constipation, miscarriage and infertility.'
        },
        {
            i: 7,
            q: 'What is artificial insemination or IUI?',
            ana: 'IUI or intra uterine insemination is an in-office procedure that is used to treat a variety of fertility conditions that may include cervical mucus problems, diminished sperm motility and ovulation dysfunction. The procedure involves ovulation monitoring by ultrasound examination, sperm washing and insemination. Sperm washing is done by using protein enhanced mediums and centrifuging - procedures to obtain the best possible motile sperms. The washed sperms are then placed in the uterine cavity for fertilization to occur within the body.'
        },
        {
            i: 8,
            q: 'What is in vitro fertilization (IVF) or Test Tube baby?',
            ana: 'It is one of the many treatment options available to infertile couples. In Vitro means "in glass" and refers to the fact that fertilization takes place outside of the womans body. IVF makes it possible to combine sperm and eggs in a laboratory for a baby that is genetically related to one or both partners. The fertilization of eggs and sperms are done in the laboratory resulting in an embryo.'
        },
        {
            i: 9,
            q: 'Can the IVF cycle be cancelled during a treatment cycle?',
            ana: 'The aim of incentive monitoring program is to obtain a good number of healthy mature eggs. Thus if the cycle is unsatisfactory, it may be cancelled at any stage.'
        },
        {
            i: 10,
            q: 'What is the time required for IUI/IVF treatment?',
            ana: 'IUI treatment is short and requires 2-5 visits during the follicular monitoring prior to IUI, after IUI patient can go home and take a 14 days general rest before a pregnancy test is done.'
        },
    ]

    return (
        <>
            <h1 className="text-left ml-32 font-bold text-5xl text-slate-700">FAQs</h1>
            <div className=" text-center m-auto rounded-3xl faq" >
                {qna.map((ind, k) => (
                    <Accordion key={k} className="border-2 text-justify px-4 hover:bg-rose-50 border-none my-1 rounded-xl border-b-slate-600 bg-gradient-to-r from-rose-100" data-aos='fade-up' open={open === ind.i} icon={<Icon id={ind.i} open={open} />}>
                        <AccordionHeader className="text-xs md:text-sm py-3" onClick={() => handleOpen(ind.i)}>{ind.q}</AccordionHeader>
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
