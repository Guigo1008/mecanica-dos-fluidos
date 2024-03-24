"use client"
import "../../../app/globals.css"
import Image from "next/image";
import { MathComponent } from "../../../components/MathComponent";
import { Header } from "../../../components/Header";

export default function Capitulo1() {
  return (
    <main className="font-serif text-purple-950 bg-white h-screen">
      <Header />
      <div className="mx-20">
        <h1 className="text-center text-4xl">Capítulo 1: Revisão Álgebra Tensorial</h1>
        <p className="text-center text-lg">Esse tal de tensor é um nome complicado, mas
        será que é tudo isso mesmo??</p>
        <h3 className="text-2xl">Tensores contextualizados coma física:</h3>
        <ul className="list-decimal">
          <li>Escalares T: Possuem apenas magnitudo, não indicam direção de nada, são apenas
            um número em si. Ex.: Temperatura, pressão, densidade, etc.</li>
          <li>Vetores (Tensor 1ª Ordem): Possuem magnitude e uma direção, já possuem um sentido mais amplo, 
            indicando um local que essa magnitude atua. Ex.: Força, velocidade, aceleração, etc.</li>
          <li>Tensores (Tensor 2ª ou mais Ordem): Possuem magnitude e várias direções embutidas,
            são de mais complexo entendimento, mas sua representação na matemática é bem importante. 
          </li>
        </ul>
      </div>
    </main>
  );
}
