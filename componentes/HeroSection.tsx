'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import {HiArrowDown} from 'react-icons/hi'

export const HeroSection = () => {
  return (
    <section id='home'>
        <div className='flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl' src="/foto.png" alt="" width={300} height={300}/>
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-bold text-4xl mt-6 md:text-5xl md:ml-0'>Hola, Soy Emir Huaroc Olivera</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>Soy <span className='font-semibold text-violet-600'>
                    Programador junior 
                </span>
                , Vivo en Lima-Peru he manejado y estudiado varios lenguajes y herramientas de programacion
                </p>
                <Link
                    to="proyectos"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Proyectos
                </Link>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <Link
              to='about'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}     
            >
                <HiArrowDown size={35} className='animate-bounce'/>
            </Link>
        </div>
    </section>
  )
}
