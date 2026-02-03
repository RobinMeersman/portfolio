import type { JSX } from "react";
import { FaGithub } from "react-icons/fa";
import { projects, type ProjectElement } from "../lib/projects_data";
import { Fa0 } from "react-icons/fa6";

function ProjectItem(project: ProjectElement): JSX.Element {
    return (
        <div className="w-2/3 mx-auto grid grid-cols-[200px_1fr_40px] gap-2">
            <div className="colstart-1">
                {project.thumbnail && <img src={project.thumbnail} alt="project thumbnail" />}
            </div>
            <div className="colstart-2">
                <h2 className="font-bold text-primary-200">{project.title}</h2>
                <p>{project.desc}</p>
            </div>
            <div className="colstart-3 content-center">
                <a href={project.repoUrl} target="_blank">
                    <FaGithub />
                </a>
            </div>
            {/*<hr className="col-span-3 w-[95%] mx-auto" />*/}
        </div>
    );
}

export default function Projects(): JSX.Element {
    return (
        <section
            id="about"
            className="
            w-full h-[90vh] gradient-primary
            "
        >
            <header className="w-full flex flex-row justify-center pt-4">
                <h1 className="text-primary-950 dark:text-primary-200 text-3xl">Projects</h1>
            </header>
            <div className="w-4/5 h-4/5 mx-auto mt-4">
                {projects.map((project) => {
                    return <ProjectItem {...project} key={project.repoUrl} />;
                })}
            </div>
        </section>
    );
}
