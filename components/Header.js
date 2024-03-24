"use client";

export const Header = () => {
  return (
    <header className="w-full flex flex-row p-3 items-center justify-between border-purple-400 border-b mb-3">
      <a href="/">
        <img 
          src={"/fluid-mech-icon.png"} 
          width={25}
          alt="Simbolo de representação da mecânica dos fluidos."
          className="mx-3" 
        />
      </a>
      <nav className="flex gap-5 text-purple-950 mx-10">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <a href="/resumos" className="hover:text-yellow-300">Resumos</a>
        <a href="/exercicios" className="hover:text-yellow-300">Exercícios</a>
        <a href="/sobre" className="hover:text-yellow-300">Sobre</a>
      </nav>
    </header>
)};