
export const Personajes = () => {
  return (
    <>
    <section className="personajes-section py-5">
      <div className="container">
        <h2 className="section-title mb-5">Personajes</h2>

        <div className="row g-4 align-items-start">
          
                   <div className="col-12 col-lg-4 order-1 order-lg-2">
            <div className="character-list-container p-4 rounded-5">
              
              
              <div className="character-item selected d-flex align-items-center p-2 mb-3 rounded-4">
                <img src="ruta/a/joe-mini.jpg" alt="Joe Arroyo" className="mini-avatar rounded-circle me-3" />
                <div className="text-start">
                  <h6 className="mb-0 text-white fw-bold">Joe Arroyo</h6>
                  <small className="text-white-50">Protagonista</small>
                </div>
              </div>

            
              <div className="character-item d-flex align-items-center p-2 mb-3 rounded-4">
                <div className="mini-avatar-empty rounded-circle me-3"></div>
                <div className="text-start">
                  <h6 className="mb-0 text-white fw-bold">...</h6>
                  <small className="text-white-50">....</small>
                </div>
              </div>

              <div className="character-item d-flex align-items-center p-2 rounded-4">
                <div className="mini-avatar-empty rounded-circle me-3"></div>
                <div className="text-start">
                  <h6 className="mb-0 text-white fw-bold">...</h6>
                  <small className="text-white-50">....</small>
                </div>
              </div>

            </div>
          </div>


          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <div className="character-detail-card p-4 rounded-5 shadow-sm">
              <div className="detail-img-container mb-4">
              
                <img src="" alt="Joe Arroyo" className="img-fluid rounded-4 shadow" />
              </div>
              
              <div className="detail-info text-start">
                <h3 className="fw-bold mb-1">Joe Arroyo • <span className="text-muted fs-5">10 años</span></h3>
                <p className="text-secondary fw-bold mb-3">Protagonista</p>
                <p className="detail-description">
                  Un cantante caribeño enérgico que convierte su voz en símbolo de resistencia y leyenda del folclore colombiano.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
  )
}
