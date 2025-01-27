'use client'

import { Eye, EyeSlash } from 'phosphor-react'

import VertigoLogo from "@/assets/Vertigo_Logo.svg"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  const handleInputType = () => {
    return setInputType(oldValue => oldValue === 'password' ? 'text' : 'password')
  }

  return (
    <main className='grid grid-cols-2 h-dvh bg-[#F8FAFC]'>
      <div className='p-10'>
        <div>
          <Image src={VertigoLogo} alt="" />
        </div>
        <form className='mt-14 min-w-[360px] max-w-[480px]'>
          <h1 className='font-bold text-4xl text-[#1E293B]'>Acesse a plataforma</h1>
          <p className='font-normal text-base text-[#475569] py-3'>
            Faça login ou registre-se para começar a construir <br /> seus projetos ainda hoje.
          </p>

          <div className='mb-3'>
            <label className='block font-semibold text-sm py-2'>E-mail</label>
            <input type="email" placeholder='Digite seu e-mail' className='w-full p-3 outline-none bg-[#fff] border border-[#E2E8F0] rounded' />
          </div>

          <div className='mb-3'>
            <label className='flex justify-between font-semibold text-sm py-2'>
              <span>Senha</span>
              <a href="#" className='text-[#7C3AED] hover:brightness-125 transition ease-in-out duration-150'>Esqueceu a senha ?</a>
            </label>
            <div className='w-full p-3 outline-none bg-[#fff] border border-[#E2E8F0] rounded flex items-center justify-between'>
              <input
                type={inputType}
                placeholder='Digite sua senha'
                className='outline-none border-none w-full'
              />
              <div className='cursor-pointer' onClick={handleInputType}>
                {inputType === 'password' && <EyeSlash size={25} color="#94A3B8" />}
                {inputType === 'text' && <Eye size={25} color="#94A3B8" />}
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <button className='w-full bg-[#7C3AED] p-3.5 rounded font-bold text-white font-lg hover:brightness-125 transition ease-in-out duration-150'>
              Entrar
            </button>
            <p className='font-normal text-zinc-500 block mt-3'>Ainda não tem uma conta ?
              <a href="#" className='text-[#7C3AED] font-bold ml-1 hover:brightness-125 transition ease-in-out duration-150'>Inscreva-se</a>
            </p>
          </div>
        </form>
      </div>
      <div className='background-image' />
    </main>
  )
}
