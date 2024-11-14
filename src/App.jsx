import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Lights } from './components/ui/Lights'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center px-4 relative bg-grid-white/[0.03]">
        <div className="w-full h-full flex flex-col sm:items-center items-start justify-center relative z-[1] animate-moveUp">
          <div className="relative w-full">
            <div className="bg-gradient-to-br from-green-950/[0.8] to-blue-950/[0.7] border border-green-900 rounded-lg p-1 aspect-square overflow-hidden absolute left-0 sm:left-1/2 sm:-translate-x-1/2 -top-12">
              <span
                className={twMerge(
                  'text-xl',
                  'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-yellow-400 '
                )}
              >
                🐲
              </span>
            </div>
          </div>
          <div
            className={
              'text-transparent sm:text-center text-start font-bold sm:text-5xl text-4xl bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6]'
            }
          >
            Transforme Seus Documentos
          </div>
          <div className="text-white/[0.7] sm:text-center text-start">
          Criado para Quem Exige Simplicidade e Eficiência
          </div>
          <div className="mt-5 w-full flex sm:flex-row max-sm:flex-col justify-center sm:gap-10 gap-4 text-white">
            <Link to="/usuario" className="group h-10 sm:h-8 w-full sm:w-36 bg-gradient-to-br from-green-950 to-blue-950 border border-green-900 rounded-lg flex items-center justify-center gap-1.5">
              <span>Começar Agora</span>
              <span className="group-hover:translate-x-0.5 transition-all">&rarr;</span>
            </Link>
            <button className="h-8 flex items-center justify-center underline">
              <span>entre em contato</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0">
          <Lights />
        </div>
      </div>
    </div>
  )
}

export default App
