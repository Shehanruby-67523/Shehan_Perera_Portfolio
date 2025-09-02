export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-blue-400">About</a></li>
                <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
        </nav>
    )
}