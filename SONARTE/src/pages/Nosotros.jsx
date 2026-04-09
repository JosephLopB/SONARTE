import React from 'react'
import '../styles/nosotros.css';

export const Nosotros = () => {
  return (
    <>
    <section className="equipo-section py-5">
      <div className="container">
        <h2 className="equipo-title mb-5">Equipo SonArte</h2>
        
        <div className="row g-4 justify-content-center">
        
  {/* Tarjeta Yurany */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="team-card p-4 text-center">
              <div className="member-img-container mb-3">
                <img src="./img.webp" alt="Yurany" className="img-fluid rounded-5"/>
              </div>
              <h3 className="member-name fw-bold">Yurany</h3>
              <p className="member-role">Illustracion • Diseño</p>
            </div>
          </div>

          {/* Tarjeta Joseph */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="team-card p-4 text-center">
              <div className="member-img-container mb-3">
                <img src="./img.webp" alt="Joseph"  className="img-fluid rounded-5"/>
              </div>
              <h3 className="member-name fw-bold">Joseph</h3>
              <p className="member-role">Historia • Diseño</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
