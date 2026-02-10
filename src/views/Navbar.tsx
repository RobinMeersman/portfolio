import type { JSX } from "react";

export default function Navbar(): JSX.Element {
    return (
        <nav
            className="
            w-full h-[10vh] grid grid-cols-3
            items-center px-4
            bg-primary-50 dark:bg-primary-950
            text-primary-800 dark:text-primary-200
            border-b-2 border-solid border-b-border-light dark:border-b-border-dark
            absolute top-0 z-50
        "
        >
            <div className="col-start-1 w-fit m-4">
                <h2 className="text-2xl">Robin</h2>
            </div>

            <ul className="list-none inline-flex space-x-4 col-start-3 justify-end">
                {/*<li className="px-2">*/}
                {/*    <a href="/">Home</a>*/}
                {/*</li>*/}
                <li className="px-2">
                    <a href="#about" className="hover:opacity-80 transition-opacity">
                        About
                    </a>
                </li>
                <li className="px-2">
                    <a href="#experience" className="hover:opacity-80 transition-opacity">
                        Experience
                    </a>
                </li>
                <li className="px-2">
                    <a href="#projects" className="hover:opacity-80 transition-opacity">
                        Projects
                    </a>
                </li>
                <li className="px-2">
                    <a href="#contact" className="hover:opacity-80 transition-opacity">
                        Contact
                    </a>
                </li>
                {/*<li className="px-2">Resume</li>*/}
            </ul>
        </nav>
    );
}
