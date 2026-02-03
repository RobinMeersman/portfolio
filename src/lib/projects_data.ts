export interface ProjectElement {
    title: string;
    desc: string;
    repoUrl: string;
    technologies: string[];
    thumbnail?: string;
}

export const projects: ProjectElement[] = [
    {
        title: "Writand",
        desc: "Code editor for Android",
        repoUrl: "https://gitlab.com/emrodev/writand",
        technologies: ["Kotlin", "JetpackCompose", "Android"],
    },
    {
        title: "GPU Ray tracer",
        desc: "GPU accelerated ray tracer",
        repoUrl: "https://gitlab.com/RobinMeersman/gpu-raytracing",
        technologies: ["OpenGL", "C++", "GLSL"],
    },
    {
        title: "AI/ML mini projects",
        desc: "Various AI/ML projects to improve understanding of AI/ML pipelines, ...",
        repoUrl: "https://gitlab.com/RobinMeersman/pestering-my-gpu",
        technologies: ["Python", "tensorflow", "pytorch"],
    },
    {
        title: "Calendar app",
        desc: "Small desktop app focussing on task scheduling and planning",
        repoUrl: "https://gitlab.com/RobinMeersman/calendar-app",
        technologies: ["Kotlin", "JetpackCompose desktop", "MVVM", "SQLite"],
    },
];
