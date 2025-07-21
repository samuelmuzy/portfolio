import { project } from "@/data/project";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const Project = () => {
    return (
        <section className="h-screen" id="Projects">
            <p className="text-center text-4xl font-bold">Projetos</p>
            <div className="flex items-center justify-center flex-wrap gap-4">
                {project.map((project) => (
                    <div className="flex flex-col items-center justify-center border-2 border-amber-50 rounded-lg p-4 gap-4">
                        <div key={project.id}>
                            <FaExternalLinkAlt className="text-amber-50" />
                            <FaGithub className="text-amber-50" />
                        </div>
                            <p>{project.name}</p>
                            <p>{project.description}</p>
                            <p>{project.technologies.map((technology) => technology).join(", ")}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
}