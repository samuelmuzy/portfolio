import { project } from "@/data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Project = () => {
    return (
        <section className="h-screen" id="Projects">
            <p className="text-center text-4xl font-bold mb-16">Projetos</p>
            <div className="flex items-center justify-center flex-wrap gap-4">
                {project.map((project,index) => (
                    <div key={index} className="flex flex-col items-center justify-center border-2 border-amber-50 rounded-lg p-4 gap-4">
                        <div>
                            <FaExternalLinkAlt className="text-amber-50" />
                            <FaGithub className="text-amber-50" />
                        </div>
                        <p>{project.name}</p>
                        <p>{project.description}</p>
                        <div className="flex gap-2 ">
                        {project.technologies.map((tec, index) =>
                                <p key={index} className="text-blue-500 border-2 border-blue-400 bg-blue-300 p-1 rounded">{tec}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}