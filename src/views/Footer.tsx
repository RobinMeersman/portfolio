import type { JSX } from "react";

export default function Footer(): JSX.Element {
    return (
        <footer className="
            w-full h-[10vh] text-gray-500 flex items-center px-4 
            bg-primary-50 dark:bg-primary-950
            border-t-2 border-solid border-t-border-light dark:border-t-border-dark
            ">
            <p>&copy; Robin Meersman 2026. All rights reserved</p>
        </footer>
    );
}
