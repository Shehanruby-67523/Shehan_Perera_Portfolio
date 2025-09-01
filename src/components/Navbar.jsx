export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <ul className="flex space-x-6">
                <li href="#about" className="hover:text-blue-400"><a>About</a></li>
                <li href="#skills" className="hover:text-blue-400"><a>Skills</a></li>
                <li href="#projects" className="hover:text-blue-400"><a>Projects</a></li>
                <li href="#contact" className="hover:text-blue-400"><a>Contact</a></li>
            </ul>
        </nav>
    )
}