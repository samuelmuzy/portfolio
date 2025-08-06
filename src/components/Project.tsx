import { project } from "@/data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Project = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300" id="Projects">
            <p className="text-center text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-12 drop-shadow">Projetos</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 w-full max-w-7xl">
                {project.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between border border-blue-200 dark:border-blue-700 rounded-2xl p-8 gap-6 min-h-[450px] shadow-lg bg-white/60 dark:bg-gray-900/60 backdrop-blur transition-colors duration-300"
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{project.name}</p>
                            <div className="flex gap-3">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors h-9" />
                                    </a>
                                )}
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition-colors h-9" />
                                </a>
                            </div>
                        </div>

                        <p className="text-blue-900/90 dark:text-blue-100 text-base flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tec, index) => (
                                <p
                                    key={index}
                                    className="text-sm text-white bg-blue-600/80 dark:bg-blue-500/80 px-3 py-1 rounded-full font-medium shadow-sm"
                                >
                                    {tec}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}