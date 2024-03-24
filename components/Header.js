"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full flex flex-row p-3 items-center justify-between border-purple-400 border-b mb-3">
      <Link href="/">
        <img 
          src={"/fluid-mech-icon.png"} 
          width={25}
          alt="Simbolo de representação da mecânica dos fluidos."
          className="mx-3" 
        />
      </Link>
      <nav className="flex gap-5 text-purple-950 mx-10">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <Link href="/resumos" className="hover:text-yellow-300">Resumos</Link>
        <Link href="/exercicios" className="hover:text-yellow-300">Exercícios</Link>
        <Link href="/sobre" className="hover:text-yellow-300">Sobre</Link>
      </nav>
    </header>
)};