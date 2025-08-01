import { project } from "@/data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Project = () => {
    return (
        <section className="flex flex-col items-center justify-center py-20" id="Projects">
            <p className="text-center text-4xl font-extrabold text-amber-100 mb-12">Projetos</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 w-full max-w-7xl">
                {project.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between border border-amber-50 rounded-2xl p-8 gap-6 min-h-[450px] shadow-lg bg-white/5 backdrop-blur"
                    >
                        <div className="flex justify-between items-center">
                            <p className="text-2xl font-bold text-white">{project.name}</p>
                            <div className="flex gap-3">
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className="text-amber-50 hover:text-amber-300 transition-colors h-9" />
                                    </a>
                                )}
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-amber-50 hover:text-amber-300 transition-colors h-9" />
                                </a>
                            </div>
                        </div>

                        <p className="text-white/90 text-base flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tec, index) => (
                                <p
                                    key={index}
                                    className="text-sm text-white bg-blue-500/80 px-3 py-1 rounded-full font-medium shadow-sm"
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