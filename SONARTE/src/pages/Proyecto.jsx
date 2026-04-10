import React from 'react'
import '../styles/proyecto.css';
export const Proyecto = () => {
  return (
    <>
    <section className="proyecto-section py-5">
      <div className="container px-md-5">
       
        <div className="info-card p-4 p-md-5 rounded-5">
          
         
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="section-title fw-bold mb-4">Sobre el proyecto SonArte</h2>
              <p className="main-description">
                SonArte es una marca creativa, artística y cultural que busca reconectar a las nuevas generaciones con el folclore colombiano a través de historias visuales e interactivas. Nos inspiramos en la fuerza de la música tradicional, en especial los ritmos tropicales y la obra de artistas como Joe Arroyo, para crear contenidos que mezclan arte, identidad y tecnología.
              </p>
            </div>
          </div>

          
          <div className="row g-4">
            {/* Nuestro Objetivo */}
            <div className="col-12 col-md-4">
              <h4 className="column-title fw-bold mb-3">Nuestro Objetivo:</h4>
              <p className="column-text">
                Un cómic digital interactivo y transmedia que busca reconectar a las nuevas generaciones (8 a 27 años) con figuras icónicas de la música colombiana, como Joe Arroyo, a través de una experiencia cultural inmersiva.
              </p>
            </div>

            {/* Misión */}
            <div className="col-12 col-md-4 text-md-center">
              <h4 className="column-title fw-bold mb-3">Mision:</h4>
              <p className="column-text text-md-center">
                Nuestra misión es preservar el folclore colombiano a través de experiencias digitales transmedia que conecten con las nuevas generaciones, integrando arte, música, educación y entretenimiento.
              </p>
            </div>

            {/* Visión */}
            <div className="col-12 col-md-4">
              <h4 className="column-title fw-bold mb-3 text-md-end">Vision:</h4>
              <p className="column-text text-md-end">
                Queremos ser un referente en la creación de contenidos digitales que mantengan vivo el folclore colombiano, uniendo tradición y nuevas generaciones mediante formatos innovadores, artísticos y educativos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
