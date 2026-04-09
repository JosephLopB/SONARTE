
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Capitulos } from './pages/Capitulos'
import { Comic } from './pages/Comic'
import { Home } from './pages/Home'
import { Personajes } from './pages/Personajes'

function App() {

  return (
    <>
        <Header />
          
          <Home />
          <Comic />
          <Personajes />
          <Capitulos />

        <Footer />
    </>
  )
}

export default App
