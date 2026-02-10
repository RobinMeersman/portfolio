import type { JSX } from "react";
import { skills } from "../lib/about_skills";
import { ItemListing } from "./components/ItemListing";

export default function About(): JSX.Element {
    return (
        <section
            id="about"
            className="
            w-full h-screen
            gradient-primary
            "
        >
            <div className="h-[10vh]"></div>
            <header className="w-full flex flex-row justify-center pt-4">
                <h1 className="text-primary-950 dark:text-primary-200 text-3xl">About me</h1>
            </header>
            <div
                className="
                h-full
                grid grid-cols-2
                items-center justify-items-center
                "
            >
                {/* Image col */}
                <div
                    className="
                col-start-1 h-3/5 max-h-4/5
                w-2/5 max-w-2/5
                bg-gray-700
                rounded-md
                "
                >
                    <img src={undefined} alt="image of me" />
                </div>

                {/* Text col */}
                <div
                    className="
                col-start-2 h-3/5 max-h-4/5
                w-4/5 max-w-4/5
                p-2 text-primary-950 dark:text-primary-200
                "
                >
                    <div>
                        <h3 className="text-2xl">
                            Hi, I am <span className="gradient-text">Robin Meersman</span>
                        </h3>
                        <p className="mt-5 max-w-2/3 wrap-break-word">
                            I am a student @ University of Ghent completing my masters degree in
                            informatics. With a deep interest in machine learning and statistics, I
                            enjoy working with data. Furthermore, I am passionate about ray tracing
                            and computer graphics, mobile/desktop development, or working on a
                            backend web applications.
                        </p>
                        <p className="mt-5 max-w-2/3 wrap-break-word">
                            Outside of software development, you can find me reading books, playing
                            a game with my friends, or being active in a gym/swimming pool.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-xl">Skills</h3>
                        <ItemListing items={skills} />
                    </div>
                </div>
            </div>
        </section>
    );
}
