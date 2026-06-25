export interface ExperienceElement {
    company: string;
    title: string;
    duration: string;
    description: string;
    technologies?: string[];
}


export const experiences: ExperienceElement[] = [
    {
        company: "Van Moer",
        title: "IT Support (Student Job)",
        duration: "Jul 2023",
        description: "Provided support to the IT department."
    },
    {
        company: "Codefever VZW",
        title: "Software Engineer (Student Job)",
        duration: "Jul 2024",
        description: "Developed automated tests for user submissions on the FTPRF platform.",
        technologies: ["JavaScript", "Testing", "Scratch"]
    },
    {
        company: "Codefever VZW",
        title: "Full-Stack Software Engineer Intern",
        duration: "Jul 2025 - Aug 2025",
        description: "Implemented new features and fixed bugs for the teacher administration platform.",
        technologies: ["Java Spring", "React", "PostgreSQL", "Unit tests"]
    },
    {
        company: "Codefever VZW",
        title: "Full-Stack Software Engineer (Student Job)",
        duration: "Sep 2025",
        description: "Continued internship work and developed automated testing infrastructure.",
        technologies: ["Java Spring", "React", "JavaScript", "Testing", "Scratch"]
    }
];