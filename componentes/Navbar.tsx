'use client' //this a client component
import React from "react"
import {useState} from 'react'
import { Button, Link } from 'react-scroll'
import { useTheme } from 'next-themes'
import {RiMoonFill,RiSunLine} from 'react-icons/ri'
import {IoMdMenu,IoMdClose} from 'react-icons/io'

interface NavItem{
    label:string
    page:string
}
const NAV_ITEMS: Array<NavItem>=[
    {
        label:'Home',
        page:'home',
    },
    {
        label:'About',
        page:'about',
    },
    {
        label:'Proyectos',
        page:'proyectos',
    },
]

export const Navbar = () => {
    const {systemTheme,theme,setTheme}=useTheme()
    const currentTheme=theme==='system'?systemTheme:theme
    const [navbar,setNavBar]=useState(false)

  return (
  <header className="w-full mx-auto px-4 bg-gray-300 shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
    <div className='justify-between md:items-center md:flex'>
        <div>
            <div className="flex items-center justify-between py-3">
                <div className='md:py-5 md:block'>
                    <h2 className='text-3xl font-bold'>Emir Huaroc</h2>
                </div>
                <div className="md:hidden">
                    <button onClick={()=>setNavBar(!navbar)}>
                        {navbar?<IoMdClose size={30}/>:<IoMdMenu size={30}/>}
                    </button>
                </div>
            </div>
        </div>
        <div>
            <div className={`flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ?"block":"hidden"}`}>
                <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                    {NAV_ITEMS.map((item,idx)=>{
                        return <Link
                        key={idx}
                        to={item.page}
                        className={
                          "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                        }
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={() => setNavBar(!navbar)}
                      >
                        {item.label}
                      </Link>
                    })}
                    {currentTheme==='dark'?(
                        <button onClick={()=>setTheme('light')} className='bg-slate-400 p-2 rounded-xl'>
                            <RiSunLine size={25} color="black"/>
                        </button>
                    ):(
                        <button onClick={()=>setTheme('dark')} className='bg-slate-400 p-2 rounded-xl'>
                            <RiMoonFill size={25}/>
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>
  </header>
  )
  
}
