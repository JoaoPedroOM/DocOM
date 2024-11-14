import { FaGithub } from 'react-icons/fa';
import { IconBrandGoogleFilled } from '@tabler/icons-react'
import { Account } from '../components/ui/Account'

const Usuario = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black text-white">
      <Account firstTab={<Tab1 />} secondTab={<Tab2 />} defaultTab={0} />
    </div>
  )
}

const Tab1 = () => (
  <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl p-3 pb-4 bg-black border-neutral-700">
    <div>
      <h1 className="font-font text-lg">Acessar sua conta</h1>
    </div>
    <div className="w-full">
      <label htmlFor="username" className="text-sm">
        Nome de usuário
      </label>
      <input
        name="username"
        placeholder="Nome"
        type="text"
        className="mt-1 h-10 w-full rounded-md border bg-[#121212] px-1 outline-none focus:ring-2 focus:ring-neutral-800 border-neutral-800 placeholder-neutral-500"
      />
    </div>
    <div className="w-full">
      <label htmlFor="password" className="text-sm">
        Senha
      </label>
      <input
        name="password"
        type="password"
        placeholder="Senha"
        className="mt-1 h-10 w-full rounded-md border px-1 bg-[#121212] outline-none focus:ring-2 focus:ring-neutral-800 border-neutral-800 placeholder-neutral-500"
      />
    </div>
    <div className="mt-2.5 w-full">
      <button className="h-10 w-full rounded-md bg-neutral-900 font-medium text-white dark:bg-neutral-100 dark:text-neutral-950">
        Entrar
      </button>
    </div>

    <div className="relative mt-6 w-full">
      <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-neutral-400 dark:bg-black dark:text-neutral-500">
        Ou
      </div>
      <div className="border-b border-neutral-300 dark:border-neutral-800"></div>
    </div>
    <div className="mt-6 flex w-full flex-col gap-4">
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950">
        <IconBrandGoogleFilled /> <div>Continue com o Google</div>
      </button>
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950">
        <FaGithub size={23} /> <div>Continue com o GitHub</div>
      </button>
    </div>
  </div>
)

const Tab2 = () => (
  <div className="flex w-full flex-col items-start justify-start gap-4 rounded-xl p-3 pb-4 bg-black border-neutral-700">
    <div>
      <h1 className="font-font text-lg">Criar uma conta</h1>
    </div>
    <div className="w-full">
      <label htmlFor="username" className="text-sm">
        Nome de usuário
      </label>
      <input
        name="username"
        placeholder="Nome"
        type="text"
        className="mt-1 h-10 w-full rounded-md border px-1 bg-[#121212] outline-none focus:ring-2 focus:ring-neutral-800 border-neutral-800 placeholder-neutral-500"
      />
    </div>
    <div className="w-full">
      <label htmlFor="password" className="text-sm">
        Senha
      </label>
      <input
        name="password"
        type="password"
        placeholder="Senha"
        className="mt-1 h-10 w-full rounded-md border px-1 bg-[#121212] outline-none focus:ring-2 focus:ring-neutral-800 border-neutral-800 placeholder-neutral-500"
      />
    </div>
    <div className="mt-2.5 w-full">
      <button className="h-10 w-full rounded-md bg-neutral-900 font-medium text-white dark:bg-neutral-100 dark:text-neutral-950">
        Criar conta
      </button>
    </div>

    <div className="relative mt-6 w-full">
      <div className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-neutral-400 dark:bg-black dark:text-neutral-500">
        Ou
      </div>
      <div className="border-b border-neutral-300 dark:border-neutral-800"></div>
    </div>
    <div className="mt-6 flex w-full flex-col gap-4">
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950">
        <IconBrandGoogleFilled /> <div>Continue com o Google</div>
      </button>
      <button className="font-regular flex h-10 w-full items-center justify-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950">
        <FaGithub  size={23} /> <div>Continue com o GitHub</div>
      </button>
    </div>
  </div>
)

export default Usuario;
