import { technologies } from "@/data/technologies"


export const Technologies = () => {
    return (
        <section className="flex flex-col justify-center items-center pt-16 pb-16" id="Technologies">
            <h2 className="text-center text-4xl font-extrabold text-blue-900 dark:text-blue-200 mb-12 drop-shadow">Tecnologias</h2>
            <div className="w-full md:w-11/12 flex flex-wrap p-8 gap-6 justify-center">
                {technologies.map((project, index) => (
                    <div className="flex items-center gap-2" key={index}>
                        <div className="text-4xl" style={{ color: project.cor }}>
                            {project.icon}
                        </div>
                        <p>{project.nome}</p>
                    </div>
                ))}
            </div>

        </section>

    )
}