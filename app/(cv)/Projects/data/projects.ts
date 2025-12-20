import { ProjectProps } from "@/app/types/types";

export const projectsData: ProjectProps[] = [
    {
        id: 1,
        title: "QuickPoll",
        status: "En cours",
        icon: "📊",
        description: "Mini application de sondages en temps réel. Permet de créer des sondages, de voter et de consulter les résultats instantanément.",
        tech: ["React", "Express", "Prisma"],
        url: "https://github.com/benjamincornet/quickpoll"
    },
    {
        id: 2,
        title: "MaskCar",
        status: "2025",
        icon: "🚗",
        description: "Application full-stack de location de voitures. API complète (auth, PDF, mails) et interface client (recherches, filtres).",
        tech: ["Laravel", "AngularJS", "API REST", "MySQL"],
        url: "https://github.com/benjamincornet/maskcar"
    },
    {
        id: 3,
        title: "Avantura",
        status: "2024",
        icon: "🌍",
        description: "Carnet de voyage collaboratif développé en 36h (Hackathon). Gestion des souvenirs et partage d'expériences.",
        tech: ["Laravel", "MySQL", "Travail d'équipe"],
        url: "https://github.com/benjamincornet/avantura"
    }
];