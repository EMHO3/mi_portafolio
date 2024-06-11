import { HeroSection } from "@/componentes/HeroSection"
import { AboutSection } from "@/componentes/AboutSection"
import { ProjectsSection } from "@/componentes/ProjectsSection"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </main>
  )
}
