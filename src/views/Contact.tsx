import type { JSX } from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaLocationDot, FaLinkedinIn, FaGithub, FaGitlab } from "react-icons/fa6";

export default function Contact(): JSX.Element {
    const email = "robinmeersman2@gmail.com";
    return (
        <section id="contact" className="w-full h-[90vh] bg-primary-950">
            <div className="h-[10vh]"></div>
            <header className="w-full flex flex-row justify-center py-4">
                <h1 className="text-primary-200 text-3xl">Contact</h1>
            </header>
            <div className="flex flex-row w-full h-4/5 mx-auto items-center justify-evenly">
                <div className="w-2/5 h-2/5 bg-gray-700 grid grid-rows-2" id="contact-info">
                    <h2 className="text-2xl text-center text-primary-200 p-4 h-4 row-start-1">Contact information</h2>
                    <div className="flex flex-col h-full items-start justify-start row-start-2">
                        <div className="flex flex-row justify-left items-center px-4">
                            <BiEnvelopeOpen className="mx-1" />
                            <label htmlFor="email" className="mx-2">Email:</label>
                            <p id="email">
                                <a href={`mailto:${email}`}>
                                    {email}
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-row w-full justify-left items-center px-4">
                            <FaLocationDot className="mx-1" />
                            <label htmlFor="location" className="mx-2">Location:</label>
                            <p id="location">Beveren-Kruibeke-Zwijndrecht, Belgium</p>
                        </div>
                    </div>
                </div>
                <div id="follow" className="w-2/5 h-2/5 bg-gray-700 grid grid-rows-2">
                    <h2 className="text-2xl text-center text-primary-200 p-4 h-4 row-start-1">Follow me</h2>
                    <div className="flex flex-row w-full h-full items-start justify-center row-start-2">
                        <a href="https://www.linkedin.com/in/robin-meersman-bb79772b7/" target="_blank" className="mx-2"><FaLinkedinIn className="text-2xl" /></a>
                        <a href="https://github.com/RobinMeersman" target="_blank" className="mx-2"><FaGithub className="text-2xl" /></a>
                        <a href="https://gitlab.com/RobinMeersman" target="_blank" className="mx-2"><FaGitlab className="text-2xl" /></a>
                    </div>
                </div>
            </div>
        </section >
    );
}
