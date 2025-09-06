import { Link } from "react-scroll";
import { useTheme } from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
            <h1 className="text-xl font-bold">Shehan Perera - Portfolio</h1>
            <ul className="flex space-x-6">
                <li><Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Contact</Link></li>
            </ul>
            <button
                onClick={toggleTheme}
                className="ml-6 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition"
            >
                {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </button>
        </nav>
    )
}