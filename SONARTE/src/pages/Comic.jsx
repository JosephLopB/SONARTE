import React from 'react';
import '../styles/comic.css';

export const Comic = () => {
  return (
    <section className="comic-container py-5">
      <div className="container">
        
  
        <div className="text-start mb-5 ms-lg-4">
          <h2 className="comic-main-title">Cómic interactivo</h2>
          <p className="comic-subtitle">
            Lee el cómic página por página o explora escenas con sonido y mini-juegos (prototipo interactivo).
          </p>
        </div>

        
        <div className="row g-4 justify-content-center">
          
          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="comic-card">
              <img src="./image4.png" alt="Inicios de Joe" className="comic-img" />
              <p className="comic-description">
                Explora los inicios de Joe, su niñez y relatos de los que lo vieron crecer
              </p>
              <div className="comic-buttons">
                <button className="btn btn-scene">Escena</button>
                <button className="btn btn-explore">Explorar</button>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="comic-card">
              <img src="./image2.png" alt="Reinado de Joe" className="comic-img" />
              <p className="comic-description">
                El inicio del reinado de Joe, como exploro e innovo creando un nuevo Son, conoceremos sus canciones mas exitosas
              </p>
              <div className="comic-buttons">
                <button className="btn btn-scene">Escena</button>
                <button className="btn btn-explore">Explorar</button>
              </div>
            </div>
          </div>

          
          <div className="col-12 col-md-6 col-lg-4">
            <div className="comic-card">
              <img src="./image1.png" alt="Leyenda de Joe" className="comic-img" />
              <p className="comic-description">
                El final de una leyenda, acompañalo en sus ultimos momentos de vida, ya que su reinado es eterno
              </p>
              <div className="comic-buttons">
                <button className="btn btn-scene">Escena</button>
                <button className="btn btn-explore">Explorar</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};