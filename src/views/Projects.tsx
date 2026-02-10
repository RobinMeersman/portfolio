import type { JSX } from "react";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { projects, type ProjectElement } from "../lib/projects_data";
import { ItemListing, type Item } from "@/views/components/ItemListing.tsx";

function ProjectItem(props: { project: ProjectElement }): JSX.Element {
    const mappedTechnologies: Item[] = props.project.technologies.map((tech) => {
        return { text: tech };
    });
    return (
        <div className="w-2/3 h-1/5 mx-auto grid grid-cols-[200px_1fr_40px] gap-2 items-center">
            <div className="colstart-1 max-w-7/8">
                {props.project.thumbnail && (
                    <img src={props.project.thumbnail} alt="props.project thumbnail" />
                )}
            </div>
            <div className="colstart-2">
                <h2 className="font-bold text-primary-200">{props.project.title}</h2>
                <p className="text-gray-400">{props.project.desc}</p>
                <ItemListing items={mappedTechnologies} />
            </div>
            <div className="colstart-3 content-center">
                <a href={props.project.repoUrl} target="_blank">
                    {props.project.repoUrl.includes("github") ? (
                        <FaGithub className="text-primary-200 scale-150" />
                    ) : (
                        <FaGitlab className="text-primary-200 scale-150" />
                    )}
                </a>
            </div>
            <hr className="col-span-3 w-[95%] mx-auto" />
        </div>
    );
}

export default function Projects(): JSX.Element {
    return (
        <section
            id="projects"
            className="
            w-full h-screen gradient-primary
            "
        >
            <div className="h-[10vh]"></div>
            <header className="w-full flex flex-row justify-center pt-4">
                <h1 className="text-primary-950 dark:text-primary-200 text-3xl">Projects</h1>
            </header>
            <div className="w-4/5 h-4/5 max-h-4/5 overflow-y-auto mx-auto mt-4">
                {projects.map((project) => {
                    return <ProjectItem project={project} key={project.repoUrl} />;
                })}
            </div>
        </section>
    );
}
