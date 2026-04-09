
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Capitulos } from './pages/Capitulos'
import { Comic } from './pages/Comic'
import { Home } from './pages/Home'
import { Nosotros } from './pages/Nosotros'
import { Personajes } from './pages/Personajes'
import { Proyecto } from './pages/Proyecto'
import { Sinopsis } from './pages/Sinopsis'

function App() {

  return (
    <>
        <Header />
          
          <Home />
          <Comic />
          <Proyecto />
          <Nosotros />
          <Sinopsis />
          <Personajes />
          <Capitulos />

        <Footer />
    </>
  )
}

export default App
