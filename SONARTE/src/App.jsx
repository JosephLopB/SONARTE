
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Capitulos } from './pages/Capitulos'
import { Comic } from './pages/Comic'
import { Personajes } from './pages/Personajes'

function App() {

  return (
    <>
        <Header />

          <Comic />
          <Personajes />
          <Capitulos />

        <Footer />
    </>
  )
}

export default App
