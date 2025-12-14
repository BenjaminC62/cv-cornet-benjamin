import { ExperienceProps } from "@/app/types/types";

export const experiencesData: ExperienceProps[] = [
    {
        id: 1,
        date: "2025",
        company: "Waigéo",
        role: "Stage développement web",
        description: "Développement d'une application interne avec Vue.js et Nuxt.js. Résolution de bugs sur un dashboard Symfony et tests de performance (K6) pour la boutique du RC Lens.",
        skills: ["Vue.js", "Nuxt.js", "Symfony", "K6"],
        isCurrent: false
    },
    {
        id: 2,
        date: "2024",
        company: "Herta",
        role: "Employé saisonnier",
        description: "Alimentation des chaînes de production, mise en carton et confection de produits. Développement de l'autonomie et de la rigueur.",
        skills: ["Agroalimentaire", "Production", "Rigueur"],
        isCurrent: false
    }
];