import '../styles/comic.css';
export const Comic = () => {
  return (
    <>
        <section className="comic-container py-5">
      <div className="container text-center">
        
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="comic-main-title display-5 fw-bold">Cómic interactivo</h2>
            <p className="comic-subtitle mx-auto" style={{ maxWidth: '700px' }}>
              Lee el cómic página por página o explora escenas con sonido y mini-juegos (prototipo interactivo).
            </p>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="row g-4 justify-content-center">
          
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="comic-card p-4 h-100 d-flex flex-column align-items-center">
              <div className="comic-img-container mb-4">
                <img src="./img.webp" alt="Inicios de Joe" className="img-fluid rounded-4 shadow-sm" />
              </div>
              <p className="comic-text mb-4">
                Explora los inicios de Joe, su niñez y relatos de los que lo vieron crecer
              </p>
              {/* Botones: Se apilan en móvil, se ponen en fila en pantallas grandes si deseas, 
                  pero según tu imagen, en móvil van uno al lado del otro */}
              <div className="d-flex gap-2 mt-auto">
                <button className="btn btn-comic-outline px-4">Escena</button>
                <button className="btn btn-comic-dark px-4">Explorar</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="comic-card p-4 h-100 d-flex flex-column align-items-center">
              <div className="comic-img-container mb-4">
              <img src="./img.webp" alt="Reinado de Joe" className="img-fluid rounded-4 shadow-sm" />
              </div>
              <p className="comic-text mb-4">
                El inicio del reinado de Joe, como exploro e innovo creando un nuevo Son, conoceremos sus canciones mas exitosas
              </p>
              <div className="d-flex gap-2 mt-auto">
                <button className="btn btn-comic-outline px-4">Escena</button>
                <button className="btn btn-comic-dark px-4">Explorar</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="comic-card p-4 h-100 d-flex flex-column align-items-center">
              <div className="comic-img-container mb-4">
                <img src="./img.webp" alt="Leyenda de Joe" className="img-fluid rounded-4 shadow-sm" />
              </div>
              <p className="comic-text mb-4">
                El final de una leyenda, acompañalo en sus ultimos momentos de vida, ya que su reinado es eterno
              </p>
              <div className="d-flex gap-2 mt-auto">
                <button className="btn btn-comic-outline px-4">Escena</button>
                <button className="btn btn-comic-dark px-4">Explorar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
