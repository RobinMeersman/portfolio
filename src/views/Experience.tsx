import type { JSX } from "react";

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
        </section>
    );
}
