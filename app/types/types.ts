export interface SkillsProps {
    name: string;
    icon: string;
    color: string;
    colorDot: string;
}

export interface ExperienceProps {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
    isCurrent?: boolean;
}

export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    tech: string[];
    status: string;
    icon: string;
    url?: string;
}