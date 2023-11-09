export function About() {
    return (
        <section className="container mx-auto my-4 max-2-5xl p-4">
            <div className="relative p-4 text-center">
                <h2 className=" relative text-blue-900 font-bold z-10">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p>
                    Minha jornada é moldada por mais de 10 projetos bem-sucedidos. Agora, estou pronto para fazer a diferença no seu próximo desafio.
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-e-lg bg-blue-100/40" />
            </div>

            <div className="relative mx-auto mt-20 max-w-lg">
                <div className="relative  w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold">Olá</p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">
                                Alisson Lins
                            </span>
                        </p>
                        <table  className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        idade:
                                    </td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Celular:
                                    </td>
                                    <td>
                                        <a href="tel:+5571999788805"
                                        className="underline hover:text-blue-800"
                                        >
                                            +55 71 9.9978-8805
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Email:
                                    </td>
                                    <td>
                                        <a href="mailto:alissonlinsbispo@gmail.com"
                                        className="underline hover:text-blue-800" 
                                        >
                                            alissonlinsbispo@gmail.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Endereço:
                                    </td>
                                    <td>
                                        <a href="https://goo.gl/maps/4yacADQtLB8jz8zn9?coh=178573&entry=tt"
                                            target="_blank"
                                        >
                                            Salvador - BA 
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-headline font-bold uppercase text-blue-900">
                                        Disponível:
                                    </td>
                                    <td>
                                        <span className="relative flex h-3 w-3">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600
                    bg-[url(https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80)] bg-cover bg-center md:-left-12
                    md:-top-12 md:h-72 md:w-56"></div>
                </div>
            </div>
        </section>
    )
}