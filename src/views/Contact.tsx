import type { JSX } from "react";

export default function Contact(): JSX.Element {
    return (
        <section id="contact" className="w-full h-[90vh] bg-primary-950">
            <div className="h-[10vh]"></div>
            <header className="w-full flex flex-row justify-center py-4">
                <h1 className="text-primary-950 dark:text-primary-200 text-3xl">Contact</h1>
            </header>
            <div className="flex flex-row w-full h-4/5 mx-auto items-center justify-evenly">
                <div className="w-2/5 h-full bg-gray-700" id="contact-info bg-green-500"></div>
                <div id="follow" className="w-2/5 h-2/5 bg-red-500"></div>
            </div>
        </section>
    );
}
