import "../styles/header.css";
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./images/logo.svg" alt="" />
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Proyecto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Sinopsis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Personajes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Capitulos
                </a>
              </li>
            </ul>
            <button className="v" type="submit">
              Request Invite
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
