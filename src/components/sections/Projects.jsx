import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center
        justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 
                         to-cyan-400 bg-clip-text text-transparent text-center"
                    > {" "}
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Ahmed Mehisen Portfolio</h3>
                            <p className="text-gray-400 mb-4">A sleek and responsive personal portfolio built with React, Vite, and TailwindCSS,
                                 featuring modern design, smooth animations, and interactive UI components. Fully optimized for performance and customization.</p>
                            <div>
                                {["React", "JavaScript", "Tailwindcss", "Vite"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center ">
                                <a href="https://github.com/ahmedmedht/Personal-Portfolio"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Blog Api</h3>
                            <p className="text-gray-400 mb-4">Developed a scalable backend for a blog application with RESTful APIs</p>
                            <div>
                                {["C#", ".NET Core", "Entity Framework", "Web Api"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center ">
                                <a href="https://github.com/ahmedmedht/BlogApi"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Movie Search</h3>
                            <p className="text-gray-400 mb-4">Developed a front-end movie search application using React,
                                integrating with a public API to fetch and display movie data.</p>
                            <div>
                                {["React", "JavaScript", "Rest Api"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center ">
                                <a href="https://github.com/ahmedmedht/Movie-Search-Web"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                            </div>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Movies Api</h3>
                            <p className="text-gray-400 mb-4">Designed and implemented a movie management application.</p>
                            <div>
                                {["C#", ".NET Core", "Entity Framework", "Web Api"].map((tech, key) => (
                                    <span key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center ">
                                <a href="https://github.com/ahmedmedht/MoviesApi"
                                    className="text-blue-400 hover:text-blue-300 transition-colors"> View Project →</a>
                            </div>
                        </div>




                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}