import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="font-serif text-purple-950 w-full min-h-screen inset-0">
      <Header />
      <div className="flex mx-6">
      <aside className="flex flex-col gap-4 px-10 pr-40 items-center justify-start min-h-screen">
          <h3 className="text-yellow-300 text-2xl font-serif">Capítulos</h3>
          <Link href="/capitulos/capitulo1" className="text-white text-lg font-thin hover:text-yellow-300">
            Capítulo 1
          </Link>
          <Link href="/capitulos/capitulo2" className="text-white text-lg font-thin hover:text-yellow-300">
            Capítulo 2
          </Link>
          {/* <Link href="/capitulos/capitulo3" className="text-white text-lg font-thin hover:text-yellow-300">
            Capítulo 3
          </Link>
          <Link href="/capitulos/capitulo4" className="text-white text-lg font-thin hover:text-yellow-300">
            Capítulo 4
          </Link>
          <Link href="/capitulos/capitulo5" className="text-white text-lg font-thin hover:text-yellow-300">
            Capítulo 5
          </Link>
          <Link href="/capitulos/capitulo6" className="text-white text-lg font-thin hover:text-yellow-300">
            Capítulo 6
          </Link> */}
        </aside>
        <div className="flex flex-col w-full min-h-screen items-center justify-center gap-5">
          <h1 className="text-center border-2 border-purple-400 rounded-lg p-4 text-4xl hover:text-yellow-300">
            Mecânica dos Fluidos
          </h1>
          <p className="hover:text-yellow-300">Professor: Luíz Fernando Lopes</p>
          <video
            src="/video-background.mp4"
            autoPlay
            loop
            muted
            className="fixed top-0 left-0 w-full min-h-screen object-cover z-[-1]"
          />
        </div>
      </div>
    </main>
  );
}
