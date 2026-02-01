import type { JSX } from "react";
import { Link } from "react-router";

export default function Navbar(): JSX.Element {
    return (
        <nav
            className="
            w-full h-[10vh] grid grid-cols-3
            items-center px-4
            bg-primary-50 dark:bg-primary-950
            text-primary-800 dark:text-primary-200
            border-b-2 border-solid border-b-border-light dark:border-b-border-dark
            sticky top-0
        "
        >
            <div className="col-start-1 w-fit m-4">
                <h2 className="text-2xl">Robin</h2>
            </div>

            <ul className="list-none inline-flex space-x-4 col-start-3 justify-end">
                <li className="px-2">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-2">
                    <Link to="#about">About</Link>
                </li>
                <li className="px-2">
                    <Link to="#projects">Projects</Link>
                </li>
                <li className="px-2">
                    <Link to="#contact">Contact</Link>
                </li>
                {/*<li className="px-2">Resume</li>*/}
            </ul>
        </nav>
    );
}
