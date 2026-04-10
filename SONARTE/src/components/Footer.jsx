
import '../styles/footer.css'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.5/font/bootstrap-icons.css" />

export const Footer = () => {
  return (
    <footer className="footer-section text-white">
      <div className="container">
        <div className="row align-items-center gy-4 footer-content">
          <div className="col-md-4">
            <h2 className="footer-title">SonArte</h2>
            <p className="footer-text">Proyecto transmedia · Cómic y archivo sonoro del folclore colombiano</p>
          </div>

          <div className="col-md-4 text-center">
            <p className="footer-subtitle mb-3">Síguenos y sé parte de la comunidad SonArte</p>
            <div className="footer-socials d-flex justify-content-center gap-3 mb-3">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="TikTok">
                <i className="bi bi-music-note-beamed"></i>
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
            <div className="footer-logo">
              <img src="/Logo.png" alt="SonArte logo" className="footer-logo-image" />
            </div>
          </div>

          <div className="col-md-4 text-md-end">
            <h2 className="footer-title">Contacto</h2>
            <p className="footer-text mb-1">Correo@sonarte.example</p>
            <p className="footer-text">@sonarte.oficial</p>
          </div>
        </div>

        <div className="footer-bottom text-center mt-4 pt-3">
          <p className="mb-0 small">© 2025 SonArte - Creado por Yurany/Joseph. Proyecto SENA inspirado en la música de Joe Arroyo</p>
        </div>
      </div>
    </footer>
  )
}
