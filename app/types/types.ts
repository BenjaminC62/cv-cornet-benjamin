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
    url?: string;
}

export interface FormationProps {
    id: number;
    date: string;
    school: string;
    diploma: string;
    description: string;
}