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
        <h1 className="text-center text-4xl">Capítulo 1: Revisão Álgebra Tensorial</h1>
        <p className="text-center text-xs my-2 italic">&quot;Esse tal de tensor tem um nome complicado, mas
        será que é tudo isso mesmo??&quot;</p>
        <h2 className="text-2xl m-4">Tensores contextualizados com a física:</h2>
        <ul className="list-decimal">
          <li><span className="text-xl">Escalares (Tensor ordem 0)</span>: Possuem apenas magnitude, não indicam direção de nada, são apenas
            um número em si. Ex.: Temperatura, pressão, densidade, etc.
            <MathComponent equation={"T = 20"} className="text-center my-8" />
            </li>
          <li><span className="text-xl">Vetores (Tensor ordem 1)</span>: Possuem magnitude e uma direção, já possuem um sentido mais amplo, 
            indicando um local que essa magnitude atua. Ex.: Força, velocidade, aceleração, etc.
            <MathComponent equation={"\\vec{v} = (3, 2, 1) =  \\begin{bmatrix} 3 \\\\ 2 \\\\ 1 \\end{bmatrix}"} className="w-full text-center my-2 mb-4" />
            <h3 className="text-lg">Notação de variáveis vetoriais:</h3>
            <MathComponent 
            equation={"\\vec{w} = \\begin{bmatrix} w_1 \\\\ w_2 \\\\ w_3 \\end{bmatrix} = \\sum_{i=1}^{3} w_i \\vec{e_i} = w_1 \\vec{e_1} + w_2 \\vec{e_2} + w_3 \\vec{e_3}"}
            className="text-center my-8"
            />
          </li>
          <p className="text-right text-xs my-8">
            *Onde <MathComponent equation={"\\vec{e_i}"} type="span" /> representa o vetor unitário na direção <MathComponent equation={"i"} type="span" />.
          </p>

          <li>
            <span className="text-xl">Tensores (Tensor ordem 2 ou Mais)</span>: Possuem magnitude e várias direções embutidas,
            são de mais complexo entendimento, mas sua representação na matemática é bem importante. 
            <MathComponent 
            equation={"\\underline{\\underline{M}} = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}"}
            className="text-center my-8" />
            <h3 className="text-lg">Notação de variáveis matriciais:</h3>
            <MathComponent 
            equation={matrixString}
            className="text-center my-8"/>
          </li>

        </ul>

        <h2 className="text-2xl">Álgebra Vetorial:</h2>

        <ol className="list-decimal">

          <li>
            <h3 className="text-xl my-8">Produto escalar:</h3>
            <MathComponent 
            equation={"\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 = |a||b|cos(\\theta)"} 
            className="text-center my-8" />
            <p className="text-right text-xs my-8">
              *O produto escalar de dois vetores perpendiculares é zero.
            </p>
          </li>
          
          <li>
            <h3 className="text-xl my-8">Produto vetorial:</h3>
            <MathComponent 
            equation={"\\vec{u} \\times \\vec{v} = |\\vec{u}||\\vec{v}|sin(\\theta)\\vec{k}"}
            className="text-center my-8" />
            <p className="text-right text-xs my-8">
              *O produto vetorial de dois vetores paralelos é zero.
            </p>
          </li>
        
        </ol>

        <h2 className="text-2xl my-8">Operadores Diferenciais:</h2>

        <p className="my-8 text-justify">
          Imagine que você está em um parque com vários balões de diferentes cores e tamanhos espalhados por toda parte. 
          Cada balão está se movendo suavemente com o vento. Se você quiser entender como o vento está movendo os balões, 
          você poderia usar uma &quot;lente&quot; especial que mostra a direção e a velocidade do vento em diferentes pontos do 
          parque. Essa lente é análoga aos operadores diferenciais, eles te ajudam a ver as variações de um caso geral
          de forma detalhada e precisa em diferentes locais, representados pelas coordenadas (x, y, z).
        </p>

        <ol className="list-decimal">
          
          <li>
          <h3 className="text-xl my-8">Operador Nabla <MathComponent equation={"\\nabla"} type="span" />:</h3>
          <MathComponent 
          equation={`\\nabla = \\begin{bmatrix} \\frac{\\delta}{\\delta x_1} \\\\ \\frac{\\delta}{\\delta x_2} 
          \\\\ \\frac{\\delta}{\\delta x_3} \\end{bmatrix} = \\sum_{i=1}^{3} \\vec{e_i} \\frac{\\delta}{\\delta x_i}`}
          className="text-center my-8" />
          </li>

        </ol>

      </div>
    </main>
  );
}
