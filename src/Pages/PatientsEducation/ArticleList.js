import BreastFeedingTips from "./Articles/BreastFeedingTips";
import ExerciseDuringPregnancy from "./Articles/ExerciseDuringPregnancy";
import GynecologicalCheckups from "./Articles/GynecologicalCheckups";
import HealthPregnancy from "./Articles/HealthPregnancy";
import InfertilityMyths from "./Articles/InfertilityMyths";
import MenstrualHealth from "./Articles/MenstrualHealth";
import NormalDeliver from "./Articles/NormalDeliver";
import PCOSSymptoms from "./Articles/PCOSSymptoms";
import PostPregnancyCare from "./Articles/PostPregnancyCare";

export const Articles = [
    {
        id: 1,
        title: "Healthy Pregnancy Diet: Foods Every Mother Should Eat",
        description:
            "Discover the best nutrition tips and foods that support a healthy pregnancy for both mother and baby.",
        image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
        category: "Pregnancy",
        date: "12 Mar 2026",
        slug: 'healthy-pregnancy',
        component: HealthPregnancy
    },
    {
        id: 2,
        title: "PCOS Symptoms Every Woman Should Know",
        description:
            "Understand the early signs of PCOS, treatment options, and lifestyle changes for better health.",
        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
        category: "Women's Health",
        date: "18 Mar 2026",
        slug: 'pcos-symptoms',
        component: PCOSSymptoms
    },
    {
        id: 3,
        title: "Preparing Yourself for a Normal Delivery",
        description:
            "Simple exercises, healthy habits, and preparation tips to make childbirth easier.",
        image:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900",
        category: "Delivery",
        date: "22 Mar 2026",
        slug: 'normal-delivery',
        component: NormalDeliver
    },
    {
        id: 4,
        title: "Importance of Regular Gynecological Checkups",
        description:
            "Routine gynecological visits help detect health issues early and ensure overall wellness.",
        image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900",
        category: "Gynecology",
        date: "26 Mar 2026",
        slug: 'gynecological-checkup',
        component: GynecologicalCheckups
    },
    {
        id: 5,
        title: "Common Infertility Myths You Should Stop Believing",
        description:
            "Separate myths from facts and understand the real causes of infertility.",
        image:
            "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
        category: "IVF",
        date: "30 Mar 2026",
        slug: 'infertility-myths',
        component: InfertilityMyths
    },
    {
        id: 6,
        title: "Post Pregnancy Care Guide for New Mothers",
        description:
            "Recovery tips, nutrition advice, and emotional wellness after childbirth.",
        image:
            "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900",
        category: "Mother Care",
        date: "05 Apr 2026",
        slug: 'post-pregnancy-care',
        component: PostPregnancyCare
    },
    {
        id: 7,
        title: "Best Exercises During Pregnancy",
        description:
            "Safe workouts that improve flexibility, reduce pain, and prepare your body for delivery.",
        image:
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900",
        category: "Fitness",
        date: "08 Apr 2026",
        slug: 'exercise-during-pregnancy',
        component: ExerciseDuringPregnancy
    },
    {
        id: 8,
        title: "Breastfeeding Tips for First-Time Mothers",
        description:
            "Everything you need to know about breastfeeding and caring for your newborn.",
        image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900",
        category: "Mother Care",
        date: "12 Apr 2026",
        slug: 'breastfeeding-tips',
        component: BreastFeedingTips
    },
    {
        id: 9,
        title: "Understanding Menstrual Health",
        description:
            "Know what's normal, when to seek medical advice, and how to maintain hormonal balance.",
        image:
            "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900",
        category: "Women's Health",
        date: "16 Apr 2026",
        slug: 'menstrual-health',
        component: MenstrualHealth
    },
];
