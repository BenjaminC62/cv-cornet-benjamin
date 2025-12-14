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