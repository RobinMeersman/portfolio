import type { JSX } from "react";

import { experiences, type ExperienceElement } from "../lib/experience_data";
import { ItemListing } from "./components/ItemListing";

function ExperienceItem(props: { experience: ExperienceElement }) {
    const experience = props.experience;
    return (
        <div className="w-2/3 h-1/5 mx-auto grid grid-cols-[200px_1fr] gap-2 items-center">
            <div className="colstart-1">
                <h2 className="font-bold text-primary-200">{experience.duration}</h2>
            </div>
            <div className="colstart-2 content-center">
                <h2 className="font-bold text-primary-200">{experience.company} - {experience.title}</h2>
                <p className="text-gray-400">{experience.description}</p>
                <ItemListing items={experience.technologies?.map((tech) => ({ text: tech })) || []} />
            </div>
            <hr className="col-span-3 w-[95%] mx-auto" />
        </div>
    );
}

function ExperienceTimeline(props: { experiences: ExperienceElement[] }) {
    return (
        <div className="w-4/5 h-4/5 max-h-4/5 overflow-y-auto mx-auto mt-4">
            {
                props.experiences.map((experience) => <ExperienceItem experience={experience} />)
            }
        </div>
    );
}

export default function Experience(): JSX.Element {
    return (
        <section
            id="experience"
            className="
            w-full h-screen bg-primary-950
            "
        >
            <div className="h-[10vh]"></div>
            <header className="w-full flex flex-row justify-center pt-4">
                <h1 className="text-primary-950 dark:text-primary-200 text-3xl">Experience</h1>
            </header>
            <ExperienceTimeline experiences={experiences} />
        </section>
    );
}
