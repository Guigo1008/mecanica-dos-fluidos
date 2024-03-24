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
        <h1 className="text-center text-4xl">Capítulo 1: Revisão Álgebra</h1>
        <p></p>
      </div>
    </main>
  );
}
