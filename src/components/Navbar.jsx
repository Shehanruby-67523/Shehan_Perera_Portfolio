import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
            <h1 className="text-xl font-bold">Shehan Perera - Portfolio</h1>
            <ul className="flex space-x-6">
                <li><Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Contact</Link></li>
            </ul>
        </nav>
    )
}