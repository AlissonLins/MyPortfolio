import {About} from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import {Services} from './components/Services'
import {Projects} from './components/Projects'
import {Skills} from './components/Skills'
//import { Testimonials } from './components/Testimonials'
// Abaixo do skills vai a seção de depoimento, no momento ficara vazio. lembrar de coloca-lá novamente
import './Input.css'

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
