"use client"
import "../../app/globals.css"
import { Header } from "../../components/Header";

export default function Sobre() {
    return (
        <main className="font-serif text-purple-950 bg-white min-h-screen overflow-scroll">
            <Header />
            <div className="mx-20">
                <h1 className="text-center text-4xl my-2">Sobre</h1>
                <p className="text-center text-lg">
                    Este site foi criado com o intuito de ser meu caderno de anotações da matéria Mecânica
                    dos Fluidos, ministrada pelo professor Luiz Fernando. Aqui você encontrará os principais
                    conceitos da disciplina e minhas anotações. Espero que você goste!
                </p>
                <div className="flex items-center justify-around">
                    <div className="flex flex-col gap-3 my-5">
                        <h3 className="text-2xl w-full">1. Avaliações:</h3>
                        <ul className="list-disc flex flex-col text-lg gap-2 items-baseline">
                            <li>P1: 14/05/2024;</li>
                            <li>P2: 09/07/2024;</li>
                            <li>PF: 16/07/2024;</li>
                            <li>2ª Chamada: 18/07/2024;</li>
                        </ul>
                    </div>

                    <div className="flex flex-col justify-around gap-3 my-10 items-center">
                        <h3 className="text-2xl w-full">2. Referências bibliográficas:</h3>
                        <ul className="list-disc flex flex-col text-lg gap-2 items-baseline">
                            <li>Hauke: Livro foda</li>
                            <li>Fox, Mc Donald: Livro base bom pra exercícios</li>
                            <li>W.W.W.: Livro também bom pra exercícios;</li>
                            <li>Bird: Livro tradicional bem completo, biblia de MecFlu.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-around gap-3 my-10 w-full items-center">
                    <h3 className="text-2xl ml-60 w-full">3. Assuntos:</h3>
                    <ol className="list-decimal grid grid-cols-2 text-lg gap-2 items-baseline">
                        <li>Revisão de Álgebra;</li>
                        <li>Conceitos básicos fluidos e cinemática;</li>
                        <li>Estática de fluidos;</li>
                        <li>Princípios da conservação</li>
                        <li>Equações constitutivas;</li>
                        <li>Análise dimensional;</li>
                        <li>Camada limite;</li>
                        <li>Projeto de rede de tubulação;</li>
                    </ol>
                </div>
                <p className="text-center italic text-sm my-10">No mais, muito boa sorte!</p>
            </div>
        </main>
    );
}