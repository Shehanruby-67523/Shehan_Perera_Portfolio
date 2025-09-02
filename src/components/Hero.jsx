import My_profile from "../assets/My_profile.jpg";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            {My_profile}
            <img
                src={profilePic}
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-5xl font-bold">Hi, I'm Shehan Perera👋</h1>
            <p className="mt-4 text-xl">Aspiring Full Stack Developer | React | Python | DevOps</p>
            <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
                View My Work
            </a>
        </section>
    )
}