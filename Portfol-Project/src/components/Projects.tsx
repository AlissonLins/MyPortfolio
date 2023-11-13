import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export function Projects() {
    const projects = [
        {
            title: "Starbucks-Lading-Page",
            description: "Landing Page da Starbucks usando Html CSS & Javascript",
            image: "#",
            link: "https://alissonlins.github.io/Starbucks-Lading-Page/#",
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            title: "OpenWeather",
            description: "Uma aplicação que por meio da open weather api permite ver a situação climatica de um determinado estado.",
            image: "#",
            link: "https://github.com/AlissonLins/OpenWeather",
            colSpan: "col-span-1 ",
        },
        {
            title: "Programing-Student",
            description: "Bot de discord criado para auxiliar nos estudos de programação",
            image: "https://images.unsplash.com/photo-1684369176170-463e84248b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=968&q=80",
            link: "https://github.com/AlissonLins/Programing-Student",
            colSpan: "col-span-1 ",
        },
        {
            title: "Lading-Page-Bot",
            description: "Lading-page de um bot para discord, projeto criado baseado em uma aula.",
            image: "#",
            link: "https://alissonlins.github.io/Lading-Page/",
            colSpan: "col-span-1 md:col-span-2",
        }
    ] 
    return (
        <>
            <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900
            text-white md:rounded-tl-[180px]">
                <div className="container mx-auto max-w-4xl p-4 py-12">
                    <div className="relative p-4 text-center">
                        <h2 className="relative z-50 mb-2 text-white">
                            <span className="mr-2 font-headline text-3xl font-semibold ">
                                Projetos &
                            </span>
                            <span className="font-handwriting text-4xl">Portfólio</span>
                        </h2>
                        <p className="relative text-sm text-gray-400">
                            Alguns do projetos pessoais que já realizei ao longo da minha trajetória como um programador.
                        </p>
                        <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <div
                                key={`project-${index}`}
                                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                                style={{ backgroundImage: `url('${project.image}')` }}
                            >
                                <div className="absolute inset-0 flex h-full w-full flex-col
                                items-center justify-center rounded-lg bg-blue-600 text-white
                                opacity-0 transition-opacity group-hover:opacity-100">
                                    <h4 className="font-headline text-lg font-semibold">
                                        {project.title}
                                    </h4>
                                    <p className="mb-4 text-sm"> {project.description}</p>
                                    <a href={project.link} target="_blank">
                                        <HiArrowTopRightOnSquare className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </>
    )

}