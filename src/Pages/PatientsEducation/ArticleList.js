import BreastFeedingTips from "./Articles/BreastFeedingTips";
import ExerciseDuringPregnancy from "./Articles/ExerciseDuringPregnancy";
import GynecologicalCheckups from "./Articles/GynecologicalCheckups";
import GynecologistPrayagraj from "./Articles/GynecologistPrayagraj";
import HealthPregnancy from "./Articles/HealthPregnancy";
import InfertilityMyths from "./Articles/InfertilityMyths";
// import MenstrualHealth from "./Articles/MenstrualHealth";
import NormalDeliver from "./Articles/NormalDeliver";
import PCOSSymptoms from "./Articles/PCOSSymptoms";
// import PostPregnancyCare from "./Articles/PostPregnancyCare";
import BannerMainWebsite1 from "../../assets/Banners/BannerMainWebsite1.png"
import OPD from '../../assets/Treatments/OPD.png'
import IUIPic from "../../assets/Treatments/IUIPic.jpg"
import PCOSAdnPCOD from "../../assets/Treatments/PCOSAdnPCOD.png"

export const Articles = [
    {
        id: 1,
        title: "Healthy Pregnancy Diet: Foods Every Mother Should Eat",
        description:
            "Discover the best nutrition tips and foods that support a healthy pregnancy for both mother and baby.",
        image:
            OPD,
        category: "Pregnancy",
        date: "12 Mar 2026",
        slug: 'healthy-pregnancy',
        component: HealthPregnancy
    },
    {
        id: 2,
        title: "Best Gynecologist in Prayagraj - Dr Vandana Bansal",
        description:
            "Comprehensive gynecology and women's healthcare in Prayagraj, including PCOS, infertility, IVF, pregnancy care, surgery and menopause management.",
        image:
            BannerMainWebsite1,
        category: "Pregnancy",
        date: "12 Sep 2026",
        slug: 'gynecologist-prayagraj',
        component: GynecologistPrayagraj
    },
    {
        id: 3,
        title: "PCOS Symptoms Every Woman Should Know",
        description:
            "Understand the early signs of PCOS, treatment options, and lifestyle changes for better health.",
        image:
            PCOSAdnPCOD,
        category: "Women's Health",
        date: "18 Mar 2026",
        slug: 'pcos-symptoms',
        component: PCOSSymptoms
    },
    {
        id: 4,
        title: "Preparing Yourself for a Normal Delivery",
        description:
            "Simple exercises, healthy habits, and preparation tips to make childbirth easier.",
        image:
            PCOSAdnPCOD,
        category: "Delivery",
        date: "22 Mar 2026",
        slug: 'normal-delivery',
        component: NormalDeliver
    },
    {
        id: 5,
        title: "Importance of Regular Gynecological Checkups",
        description:
            "Routine gynecological visits help detect health issues early and ensure overall wellness.",
        image:
            PCOSAdnPCOD,
        category: "Gynecology",
        date: "26 Mar 2026",
        slug: 'gynecological-checkup',
        component: GynecologicalCheckups
    },
    {
        id: 6,
        title: "Common Infertility Myths You Should Stop Believing",
        description:
            "Separate myths from facts and understand the real causes of infertility.",
        image:
            IUIPic,
        category: "IVF",
        date: "30 Mar 2026",
        slug: 'infertility-myths',
        component: InfertilityMyths
    },

  
];
