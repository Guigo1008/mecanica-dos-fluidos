"use client"
import "../../../app/globals.css"
import Image from "next/image";
import { MathComponent } from "../../../components/MathComponent";
import { Header } from "../../../components/Header";

export default function Capitulo1() {
  const matrixString = `\\underline{\\underline{G}} = \\begin{bmatrix} w_{11} & w_{12} & w_{13} 
  \\\\ w_{21} & w_{22} & w_{23} \\\\ w_{31} & w_{32} & w_{33} \\end{bmatrix} = 
  \\sum_{i=1}^{3} \\sum_{i=1}^{3}  G_{ij} \\vec{e_i} \\vec{e_j}`;


  return (
    <main className="font-serif text-purple-950 bg-white min-h-screen overflow-scroll">
      <Header />
      <div className="mx-20">
        <h1 className="text-center text-4xl">Capítulo 2: Conceitos Fundamentais e Cinemática</h1>
        <p className="text-center text-xs my-2 italic">
            &quot;Eita, agora vai começar a mecflu de verdade...&quot;
        </p>


        <h2 className="text-2xl my-8">Mecanismos de Transporte:</h2>
        <h3 className="text-xl my-8">Transporte de Propriedade:</h3>
        <ul className="list-decimal">

          <li className="list-decimal">
            <h3 className="mt-8 text-justify text-xl">Convecção:</h3>
            <p className="mb-8text-justify">
                Está associado a movimentação do fluido, captura uma ideia macroscópia, de movimento 
                de várias moléculas em conjunto. Pode ocorrer de forma natural ou forçada.
            </p>
          </li>

          <li>
            <h3 className="mt-8 text-justify text-xl">Difusão/condução:</h3>
            <p className="mb-8text-justify">
                Ocorre mesmo com o fluido parado, está associado ao movimento microscópico das partículas, mas um 
                gradiente de propriedade deve existir.
            </p>
          </li>

          <li>
            <h3 className="mt-8 text-justify text-xl">Radiação:</h3>
            <p className="mb-8 text-justify">
                Ocorre através de ondas eletromagnéticas, não necessita de meio material para se propagar.
            </p>
          </li>

        </ul>


        <h2 className="text-2xl mt-8 my-2">Formação da Camada Limite (C.L.):</h2>
        <p className="text-justify mb-8 my-2">
            Uma região perto da parede do tubo onde essa superfície possui muita influência sobre o escoamento do fluido.
            Dessa forma, têm-se que a velocidade do fluido é zero na parede e aumenta até a velocidade do fluido livre.
            O nome dessa região é <span className="font-semibold">Camada Limite</span>.
        </p>
        <ol className="list-decimal">

          <li>
            <h3 className="text-xl mt-8">Camada limite laminar</h3>
            <p className="text-justify mb-8">
                O fluido se move lentamente, bem tranquilo, é bem perto da superfície e quem domina o escoamento é 
                basicamente ela, portanto a velocidade é praticamente zero.
            </p>
          </li>
          
          <li>
            <h3 className="text-xl mt-8">Região de transição</h3>
            <p className="text-justify mb-8">
                A velocidade do fluido começa a aumentar, mas ainda não é a velocidade do fluido livre. Começa-se a 
                sofrer efeito relacionados a camada limite turbulenta, a camada limite laminar começa a se desfazer.
            </p>
          </li>

          <li>
            <h3 className="text-xl mt-8">Camada limite turbulenta</h3>
            <p className="text-justify mb-8">
                O fluido está em alta velocidade, a começa a ter comportamento turbulento, gerando vórtices e 
                instabilidades.
            </p>
          </li>

        </ol>


        <h2 className="text-2xl my-8 mb-4">Conceito de Taxa de Fluxo de Propriedade:</h2>
        <p className="mb-8 text-justify">
          
        </p>

      </div>
    </main>
  );
}
