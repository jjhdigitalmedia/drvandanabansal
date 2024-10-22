// components/FAQ.js
import { useState } from 'react';

const Faq = () => {
    // Sample FAQ data
    const faqs = [
        {
            question: 'What is infertility?',
            answer: 'Infertility is defined as the inability to conceive a child despite trying for one year.',
        },
        {
            question: 'Is infertility a womans problem?',
            answer: 'It is a myth that infertility is always a "womans problem." In 50% of all infertility case male is directly or indirectly responsible (referred to as male factors).',
        },
        {
            question: 'What causes infertility in men?',
            answer: 'Lifestyle can influence the number and quality of a mans sperm.Alcohol and drugs--including marijuana, nicotine, and certain medications--can temporarily reduce sperm quality.Also, environmental toxins, including pesticides and lead, may be to blame for some cases of infertility. The causes of sperm production problems can exist from birth or develop later as a result of severe medical illnesses, including mumps and some sexually transmitted diseases, or from a severe testicle injury, tumor, or other problem.Inability to ejaculate normally can prevent conception, too, and can be caused by many factors, including diabetes, surgery of the prostate gland or urethra, blood pressure medication, or impotence.',
},
    {
        question: 'What causes infertility in women?',
        answer: 'The other half of explained infertility cases are linked to female problems (called female factors), most commonly ovulation disorders. Without ovulation, eggs are not available for fertilization. Problems with ovulation are signaled by irregular menstrual periods or a lack of periods altogether (called amenorrhea). Simple lifestyle factors--including stress, diet, or athletic training--can affect a womans hormonal balance.',
    },
    {
        question: 'What is endometriosis?',
        answer: 'Endometriosis is a condition in which tissue similar to that normally lining the uterus is found outside of the uterus, usually in the ovaries, fallopian tubes, and other pelvic structures. Endometriosis has no single symptom that is diagnostic. Patients with endometriosis may have painful periods, pelvic pain and backache during menses, painful intercourse and infertility.',
    },
    {
        question: 'What are uterine fibroids?',
        answer: 'Uterine fibroids are growth that develop from the cells that make up the muscle of the uterus. Thay are also called leiomyomas or myomas. Uterine fibroids are common, benign growths that occur quite often in women. About one in every four or five women has them. Fibroids are most common in women aged 30 - 40, but can occur at any age. Many women who have fibroids are not aware of them because the growth can remain small and not cause a problem. Some symptoms that may occur include bleeding, irregular periods, menstrual pain, abdominal pain, painful intercourse, constipation, miscarriage and infertility.',
    },
    {
        question: 'What is artificial insemination or IUI?',
        answer: 'IUI or intra uterine insemination is an in-office procedure that is used to treat a variety of fertility conditions that may include cervical mucus problems, diminished sperm motility and ovulation dysfunction. The procedure involves ovulation monitoring by ultrasound examination, sperm washing and insemination. Sperm washing is done by using protein enhanced mediums and centrifuging - procedures to obtain the best possible motile sperms. The washed sperms are then placed in the uterine cavity for fertilization to occur within the body.',
    },
    {
        question: 'What is in vitro fertilization (IVF) or Test Tube baby?',
        answer: 'It is one of the many treatment options available to infertile couples. In Vitro means "in glass" and refers to the fact that fertilization takes place outside of the womans body. IVF makes it possible to combine sperm and eggs in a laboratory for a baby that is genetically related to one or both partners. The fertilization of eggs and sperms are done in the laboratory resulting in an embryo.',
    },
    {
        question: 'Can the IVF cycle be cancelled during a treatment cycle?',
        answer: 'The aim of incentive monitoring program is to obtain a good number of healthy mature eggs. Thus if the cycle is unsatisfactory, it may be cancelled at any stage.',
    },
    {
        question: 'What is the time required for IUI/IVF treatment?',
        answer: 'IUI treatment is short and requires 2-5 visits during the follicular monitoring prior to IUI, after IUI patient can go home and take a 14 days general rest before a pregnancy test is done.,'
    },
  ];

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
};

return (
    <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="space-y-">
            {faqs.map((faq, index) => (
                <div key={index} className="border- border-gray-300 pb-1">
                    <div
                        className="flex justify-between items-center cursor-pointer p-4 bg-rose-50 hover:bg-gray-200 rounded-md"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="font-semibold">{faq.question}</span>
                        <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
                    </div>
                    {openIndex === index && (
                        <div className="p-4 text-gray-700 bg-gray-50 rounded-md">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);
};

export default Faq;
