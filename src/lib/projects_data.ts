import writand from "../img/writand-with-background.png";

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
        technologies: ["Kotlin", "Jetpack Compose", "Android"],
        thumbnail: writand,
    },
    {
        title: "GPU Ray tracer",
        desc: "GPU accelerated ray tracer",
        repoUrl: "https://gitlab.com/RobinMeersman/raytracer-metal",
        technologies: ["Apple Metal", "C++", "AppKit", "MetalKit", "Metal Performance Shaders"],
    },
    {
        title: "AI/ML mini projects",
        desc: "Various AI/ML projects to improve understanding of AI/ML pipelines, ...",
        repoUrl: "https://gitlab.com/RobinMeersman/pestering-my-gpu",
        technologies: ["Python", "tensorflow", "pytorch"],
    },
    {
        title: "UChess",
        desc: "Game combining chess and Uno",
        repoUrl: "https://gitlab.com/RobinMeersman/uchess",
        technologies: ["Rust", "Iced-rs UI"],
    },
];
