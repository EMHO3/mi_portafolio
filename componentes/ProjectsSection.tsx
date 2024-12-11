import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { link } from 'fs'

const projects = [
    {
      name: "Billetera Digital",
      description:
        "Un proyecto personal que es acerca de una billetera digital en el que puedes registrar tus gastos e ingresos, aqui use:PHP,LARAVEL 10,REACT y Tailwind CSS ",
      image: "/billetera .png",
      github: "https://github.com/EMHO3/billetera-laravel10.git",
      link: "https://drive.google.com/file/d/1wQvlOlYjlEwTyu93Tu4DUy2cvZKefz4v/view?usp=sharing",
    },
    {
      name: "Blog de Notas",
      description: "Un blog de notas en que puedes anotar distintas cosas y para hacerlo necesitas inicias sesion ,use:PHP,Laravel 10 y Tailwind CSS ",
      image: "/blog.png",
      github: "https://github.com/EMHO3/projecto_laravel9.git",
      link: "https://drive.google.com/file/d/1mBtgEFu1jPkkLe-LkYqus2KHWQYXZuF1/view?usp=sharing",
    },
    {
      name: "Punto de venta",
      description:
        "Proyecto Personal que simula una tienda online desde un administrador en el que puedes asignar ventas compradores proveedores crear articuos y distintos CRUDS, aqui use:PHP,Laravel 10 y Bootstrap",
      image: "/punto de venta.png",
      github: "https://github.com/EMHO3/puntoventa_laravel10.git",
      link: "https://drive.google.com/file/d/1j7cMBrO4qwb0jE1ISlcxgB3beZ8TaP-c/view?usp=sharing",
    },
    {
        name: "Registos",
        description:
          "Proyecto Personal sobre un CRUD basico en el que puedes registrar un articulo su descripcion y stock,aqui use:PHP,Laravel 10,REACT y Tailwind CSS",
        image: "/laravelReact.jpg",
        github: "https://github.com/EMHO3/Laravel10-React.git",
        link: "https://drive.google.com/file/d/1JHDCVwGKPftCjDkm2dLcxFyiRBir6_yp/view?usp=sharing",
      },
      {
        name: "WooComerce",
        description:
          "Proyecto de WooComerce usando WordPress y sus distintos plugins y temas especificos para el proyecto ",
        image: "/Wordpress.jpg",
        github: "https://github.com/EMHO3",
        link: "https://drive.google.com/file/d/1rGL78LGl2dJYs7zpO7dy6gs3pUs-elxz/view?usp=sharing",
      },
      {
       name:"Bienes raices", 
       description:"Proyecto personal sobre una pagina de bienes raices en el que puedes crear distintos tipos de cosas y tambien crear permisos y asignarlos a ciertos roles como CEO,Admin,etc, aqui use:PHP,Laravel 10,Bootstrap y plantillas",
       image:"/realstate.jpg",
       github:"https://github.com/EMHO3/RealState",
       link:"https://drive.google.com/file/d/1F5Qkt-dRpJXdmg9wLXK5sDoWDliOcEI2/view?usp=sharing",
      },
      {
       name:"Libreria", 
       description:"Proyecto personal sobre una pagina acerca de libros de programacion y otros aqui puedes registrarte como admin y poder crear modificar y eliminar libros , aqui use:PHP puro y MYSQL",
       image:"/libreria.jpg",
       github:"https://github.com/EMHO3/php-mysql",
       link:"https://drive.google.com/file/d/1VRD0H4VYNYh4-DZFhM_oWvoV1J356csr/view?usp=sharing",
      },
      {
        name:"ABM Electric Perú S.A.C", 
        description:"Proyecto de wordpress de un sitio web con el tema DIVI para una clienta, hecho durante mis practicas con Roaner Group S.A.C ",
        image:"/AbmElectricPeruSac.png",
        link:"https://drive.google.com/file/d/1ncUiHldPUHQx5XS7GbQXfR5Uv8_5Z8GE/view?usp=drive_link",
      },
      {
        name:"Web Spacio Design", 
        description:"Proyecto de wordpress de un sitio web que hize a partir de una plantilla html que me dierion la cual convertí en un tema de wordpress en el que se puede personalizar varios bloques de la pagina de inicio, tambien tiene el puglin woocommerce",
        image:"/SpacioDesign.png",
        link:"https://drive.google.com/file/d/1JDX1p6_9gM6zT3nHeofHoKwwtJECv8P2/view?usp=sharing",
      }
  ]
export const ProjectsSection = () => {
  return (
    <section id='proyectos'>
        <h1 className='text-center font-bold text-4xl'>Proyectos</h1>
        <div className='flex flex-col space-y-20'>
            {projects.map((project,idx)=>{return(
                <div key={idx}>
                    <div className='flex flex-col md:flex-row md:space-x-12'>
                        <div className="mt-8 md:w-1/2">
                        <Link href={project.link} target='_blank'>
                            <Image
                            src={project.image}
                            alt=""
                            width={800}
                            height={800}
                            className="rounded-xl shadow-xl hover:opacity-70"
                        />
                        </Link>
                        </div>
                        <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                    </div>
                </div>
            )})}
        </div>
    </section>
  )
}
