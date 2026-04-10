import '../styles/capitulos.css';


export const Capitulos = () => {
  return (
    <>
    <section className="capitulos-section py-5">
      <div className="container">
        <h2 className="section-title mb-5">Capitulos</h2>

        <div className="row g-4">
          
          <div className="col-12 col-lg-4 order-1 order-lg-2">
            <div className="capitulos-list-container rounded-5 overflow-hidden">
              <div className="list-header p-3 text-center">
                <span className="text-white">Lista de capitulos</span>
              </div>
              
              <div className="chapter-item active p-3">
                <h5 className="mb-1">Capitulo 1</h5>
                <p className="mb-0 small opacity-75">Los inicios y niñez de Joe</p>
              </div>

              <div className="chapter-item p-3">
                <h5 className="mb-1">Capitulo 2</h5>
                <p className="mb-0 small opacity-75">...</p>
              </div>

              <div className="chapter-item p-3">
                <h5 className="mb-1">Capitulo 3</h5>
                <p className="mb-0 small opacity-75">...</p>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <div className="chapter-detail-card p-4 p-md-5 rounded-5 d-flex flex-column flex-md-row align-items-center gap-4">
              <div className="text-section text-center text-md-start">
                <h3 className="fw-bold">Capitulo 1:</h3>
                <p className="mb-4">Los inicios y niñez de Joe</p>
                <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                  <button className="btn btn-dark-custom px-4">Anterior</button>
                  <button className="btn btn-dark-custom px-4">Siguiente</button>
                </div>
              </div>
              
              <div className="image-section ms-md-auto">
                <img src="image1.png" alt="Capitulo 1" className="img-fluid rounded-4 shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
