export interface ExperienceProps {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
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

export interface SkillGroupProps {
    category: string;
    items: string[];
}