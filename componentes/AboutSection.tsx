import React from 'react'

const skills=[
    {skill:"HTML"},
    {skill:"JS"},
    {skill:"Python"},
    {skill:"CSS"},
    {skill:"PHP"},
    {skill:"Laravel"},
    {skill:"NODEJS"},
    {skill:"React"},
    {skill:"Github"},
    {skill:"Tailwind CSS"},
    {skill:"SQL"},
    {skill:"WordPress"},


]

export const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>Sobre Mi</h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>                    
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Conoceme mejor</h1>
                        <p>
                            Hola! ,Soy Emir Huaroc Olivera
                            <span className='font-bold'>{" desarrollador junior apasionado por la tecnología y el desarrollo de software"}</span>,
                            <span className='font-bold'>{"soy una persona curiosa y autodidacta, siempre buscando nuevas tecnologías"}</span>,
                            mi objetivo es unirme a un equipo dinámico donde pueda continuar aprendiendo y creciendo como profesional, contribuyendo con mis habilidades y entusiasmo a proyectos significativos.
                        </p>
                        <br/>
                        <p >
                            vengo mas de 1 año y medio estudiando diferentes lenguajes y herramientas de programacion de
                            forma autodidacta.
                        </p>                   
                </div>
            </div>
            <div className='md:w-1/2 lg:w-full'>

                <h1 className="text-2xl font-bold mb-6 lg:text-center md:text-left lg:justify-content-center" >Mis Habilidades</h1>
                <div className='flex flex-wrap flex-row justify-center md:justify-center lg:justify-center' >
                    {skills.map((item,idx)=>{
                        return <p key={idx }  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">{item.skill}</p>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}
