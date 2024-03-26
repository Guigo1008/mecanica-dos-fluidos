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
        será que é tudo isso mesmo?&quot;</p>

        <h2 className="text-2xl my-4 mt-8">Tensores contextualizados com a física:</h2>
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

        <h2 className="text-2xl my-8 mb-4">Operadores Diferenciais:</h2>

        <p className="mb-8 text-justify">
          Imagine que você está em um parque com vários balões de diferentes cores e tamanhos espalhados por toda parte. 
          Cada balão está se movendo suavemente com o vento. Se você quiser entender como o vento está movendo os balões, 
          você poderia usar uma &quot;lente&quot; especial que mostra a direção e a velocidade do vento em diferentes pontos do 
          parque. Essa lente é análoga aos operadores diferenciais, eles te ajudam a ver as variações de um caso geral
          de forma detalhada e precisa em diferentes locais, representados pelas coordenadas (x, y, z).
        </p>

        <ol className="list-decimal">
          
          <li>
          <h3 className="text-xl my-8 mb-2">Operador nabla <MathComponent equation={"\\nabla"} type="span" />:</h3>
          <p className="text-justify">
            Matematicamente, o operador nabla é representado por um símbolo que parece um triângulo invertido (∇). 
            Em coordenadas cartesianas (x, y, z), é expresso como:
          </p>
          <MathComponent 
          equation={`\\nabla = \\begin{bmatrix} \\frac{\\delta}{\\delta x_1} \\\\ \\frac{\\delta}{\\delta x_2} 
          \\\\ \\frac{\\delta}{\\delta x_3} \\end{bmatrix} = \\sum_{i=1}^{3} \\vec{e_i} \\frac{\\delta}{\\delta x_i}`}
          className="text-center my-8"/>
          <p className="my-8 text-justify">
            Aqui, cada <MathComponent equation={"\\frac{\\delta}{\\delta x_i}"} type="span" /> representa uma derivada 
            parcial em relação a uma coordenada específica (x, y, ou z), e cada <MathComponent equation={"\\vec{e_i}"} type="span" /> representa 
            um vetor unitário na direção correspondente. Esse operadores pode ser utilizado sob forma do
            gradiente (<MathComponent equation={"\\nabla F"} type="span" />), divergente (<MathComponent equation={"\\nabla \\cdot F"} type="span" />) 
            ou rotacional (<MathComponent equation={"\\nabla\\times F"} type="span" />).
          </p>
​
          </li>

          <li>
            <h3 className="text-xl mb-8">Operador gradiente aplicado a função escalar, <MathComponent equation={"\\nabla \\phi"} type="span" />:</h3>
            <p className="text-justify">
              Imagine que você está diante de um monte com vários caminhos que levam ao topo. Seu objetivo é encontrar o 
              caminho que o leva ao topo da maneira mais rápida possível, ou seja, o caminho mais íngreme. Aqui, o monte 
              representa uma função escalar — uma função que associa um único valor a cada ponto no espaço a altura do 
              monte em relação ao nível do mar. O gradiente de uma função escalar é como um guia que aponta para a direção 
              da subida mais íngreme em qualquer ponto do monte. Se você seguir o gradiente, você estará escolhendo o 
              caminho que aumenta sua altura o mais rapidamente possível a partir de onde você está. 
              Matematicamente, o gradiente de uma função escalar <MathComponent equation={"f(x,y,z)"} type="span" /> em 
              coordenadas cartesianas é um vetor que pode ser expresso como:
            </p>
            <MathComponent 
            equation={`\\nabla\\phi = \\begin{bmatrix} \\frac{\\delta\\phi}{\\delta x_1} \\\\ \\frac{\\delta\\phi}{\\delta x_2} 
            \\\\ \\frac{\\delta\\phi}{\\delta x_3} \\end{bmatrix} = \\sum_{i=1}^{3} \\vec{e_i} \\frac{\\delta\\phi}{\\delta x_i}`}
            className="text-center my-8" />
            <p className="my-8 text-justify">
              Cada componente deste vetor diz respeito a quão rapidamente o valor da função muda na direção de cada 
              coordenada. Como dito, o vetor gradiente sempre aponta na direção do aumento mais rápido da função escalar,
              já a magnitude, indica o quão rápida é essa mudança.
            </p>
            <p className="text-right text-xs my-8">*O operador gradiente sempre aumenta a ordem da função. Por exemplo, 
            se aplicado a um escalar, gera como resposta um vetor.</p>
          </li>

          <li>
            <h3 className="text-xl my-8">Operador divergente, <MathComponent equation={"\\nabla\\cdot\\vec{v}"} type="span" />:</h3>
            <p className="text-justify">
              Representa fisicamente se o ponto em questão é uma fonte ou sumidouro do campo vetorial, ou seja, se o campo está 
              &quot;puxando&quot; ou &quot;empurrando&quot; o campo vetorial em um ponto específico.
            </p>
            <MathComponent 
            equation={`\\nabla\\phi = \\begin{bmatrix} \\frac{\\delta\\phi}{\\delta x_1} \\\\ \\frac{\\delta\\phi}{\\delta x_2} 
            \\\\ \\frac{\\delta\\phi}{\\delta x_3} \\end{bmatrix} = \\sum_{i=1}^{3} \\vec{e_i} \\frac{\\delta\\phi}{\\delta x_i}`}
            className="text-center my-8" />
            <p className="my-8 text-justify">
            Este cálculo nos dá uma única quantidade escalar que descreve se, e o quão rapidamente, o campo vetorial 
            está se expandindo ou se contraindo em um ponto.
            </p>
            <p className="text-right text-xs my-8">*O operador divergente sempre diminui a ordem da função. Por exemplo, 
            se aplicado a um vetor, gera como resposta um escalar.</p>
          </li>

          <li>
            <h3 className="text-xl my-8">Operador rotacional, <MathComponent equation={"\\nabla\\times\\vec{F}"} type="span" />:</h3>
            <p className="text-justify">
              O rotacional de um campo vetorial em um ponto fornece a magnitude e a direção do eixo de rotação que melhor caracteriza o 
              movimento do campo ao redor desse ponto. Se o campo vetorial representa, por exemplo, a velocidade de um fluido em cada 
              ponto do espaço, então o rotacional em um ponto específico descreveria como e quão rapidamente o fluido está girando em 
              torno desse ponto.
            </p>
            <MathComponent 
            equation={`\\nabla\\times\\vec{F} = (\\frac{\\delta F_z}{\\delta y} - \\frac{\\delta F_y}{\\delta z})\\vec{i} + (\\frac{\\delta F_x}{\\delta z} - \\frac{\\delta F_z}{\\delta x})\\vec{j} + (\\frac{\\delta F_y}{\\delta x} - \\frac{\\delta F_x}{\\delta y})\\vec{k}`}
            className="text-center my-8" />
          </li>

          <li>
            <h3 className="text-xl my-8">Operador Laplaciano, <MathComponent equation={"\\nabla\\cdot(\\nabla\\phi)"} type="span" />:</h3>
            <p className="text-justify">
              Fisicamente, o operador laplaciano é utilizado para descrever fenômenos de difusão, propagação de ondas, 
              fluxo de calor, campos elétricos e magnéticos, entre outros. Em essência, ele indica como uma quantidade 
              específica difere da média dos seus arredores. Um laplaciano positivo indica que a quantidade em um ponto 
              é menor do que a média ao redor, sugerindo um vale no espaço. Um laplaciano negativo indica 
              que a quantidade é maior que a média dos arredores, sugerindo um pico.
            </p>
            <MathComponent 
            equation={`\\nabla\\cdot(\\nabla\\phi) = \\nabla^2\\phi = \\frac{\\delta^2\\phi}{\\delta x_1^2} + \\frac{\\delta^2\\phi}{\\delta x_2^2} + \\frac{\\delta^2\\phi}{\\delta x_3^2}`}
            className="text-center my-8" />
            <p className="my-8 text-justify">
              Neste caso, o operador Laplaciano foi aplicado a um escalar, mas pode ser aplicado a outras ordens de tensores também.
            </p>
            <p className="text-right text-xs my-8">
              O laplaciano pode ser representado por <MathComponent equation={"\\nabla^2\\phi"} type="span"/> ou 
              por <MathComponent equation={"\\Delta\\phi"} className="text-center my-8" type="span"/>.
            </p>
          </li>

        </ol>

        <h2 className="text-2xl my-8 mb-4">Teoremas Integrais:</h2>

        <ol className="list-decimal">
        <li>
            <h3 className="text-xl my-8">Teorema de Gauss:</h3>
            <p className="text-justify">
              Aqui, o objetivo é relacionar a integral de superfície de um campo vetorial com a integral de volume da 
              divergência desse campo. Matematicamente, o teorema de Gauss é expresso como:
            </p>
            <MathComponent 
            equation={`\\iint_{S} (\\vec{F}\\cdot\\vec{n})dS = \\iiint_{V} (\\nabla\\cdot\\vec{F})dV`}
            className="text-center my-8" />
          </li>
        </ol>

        <h2 className="text-2xl my-8 text-center font-bold">FIM!</h2>

      </div>
    </main>
  );
}
