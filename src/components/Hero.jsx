import { useState, useEffect } from "react";
import My_profile from "../assets/My_profile.jpeg";
import { FaLaptopCode, FaReact, FaPython, FaRocket } from 'react-icons/fa';

export default function Hero() {
    const roles = [
        <p className="flex items-center gap-2">Full Stack Developer<FaLaptopCode /></p>,
        <p className="flex items-center gap-2">React Developer<FaReact /></p>,
        <p className="flex items-center gap-2">Python Enthusiast<FaPython /></p>,
        <p className="flex items-center gap-2">DevOps Learner<FaRocket /></p>
    ];
        
    const [currentRole, setCurrentRole] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000); 

        return () => clearInterval(interval); 
    }, [roles.length]);
    
    return (
        <section 
            className="h-screen flex flex-col justify-center items-center text-center 
            bg-gradient-to-r from-blue-900 to-indigo-900 text-white 
            dark:from-gray-900 dark:to-gray-800 dark:text-gray-100"
        >
            <img
                src={My_profile}
                alt="Profile"
                className="w-60 h-60 rounded-full border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-5xl font-bold flex items-center gap-2">
                Hi, I'm Shehan Perera
                <span className="wave">👋</span>
            </h1>
            {/* <p className="mt-4 text-xl">Aspiring Full Stack Developer | React | Python | DevOps</p> */}
            <p className="mt-4 text-xl">{roles[currentRole]}</p>
            <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                View My Work
            </a>
        </section>
    )
}