import Navbar from "./views/Navbar";
import About from "./views/About";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import Footer from "./views/Footer";

import { BrowserRouter, Route, Routes } from "react-router";

import "./index.css";

function Main() {
    return (
        <div className="w-screen h-screen overflow-y-auto">
            <Navbar />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
