import type { JSX } from "react";
import { skills } from "../lib/about_skills";
import { ItemListing } from "./components/ItemListing";
import me from "../img/me.png";

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
                col-start-1 h-3/5 max-h-3/5
                w-3/5 max-w-3/5
                rounded-full
                overflow-hidden
                "
                >
                    <img 
                        src={me} 
                        alt="image of me" 
                        className="w-full h-full object-cover"
                    />
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
                            and computer graphics, mobile/desktop development, bio-informatics, and working on
                            backend web applications.
                        </p>
                        <p className="mt-5 max-w-2/3 wrap-break-word">
                            Outside of software development, you can find me reading books, playing
                            a game with my friends, or being active in a swimming pool. I am also a coach
                            at my local gymnastics club.
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
