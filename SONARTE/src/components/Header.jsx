import '../styles/header.css'

export const Header = () => {
  return (
    <header className="site-header py-3">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container align-items-center">
          <a className="navbar-brand" href="#home">
            <img src="/Logo.png" alt="SonArte logo" className="header-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center header-nav">
              <li className="nav-item mx-1">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#comic">
                  Comic
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#proyecto">
                  Proyecto
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#nosotros">
                  Nosotros
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#sinopsis">
                  Sinopsis
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#personajes">
                  Personajes
                </a>
              </li>
              <li className="nav-item mx-1">
                <a className="nav-link" href="#capitulos">
                  Capitulos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
