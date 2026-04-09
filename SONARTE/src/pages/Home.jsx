import React from 'react';
import '../styles/home.css';

export const Home = () => {
  return (
    <>
    <section className="home-content py-5">
        <div className="container">
            <div className="container">
                <div className="col-lg-6 hero-text-col order-2 order-lg-1 mt-4 mt-lg-0">
                    <h1 className="hero-title">SonArte — Donde la música y el cómic se encuentran</h1>
                    <p className="hero-description text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (Un proyecto transmedia que rescata el folclore colombiano).
            </p>

            {/* Botones */}
            <div className="hero-buttons d-flex gap-3 justify-content-center justify-content-lg-start">
                <button className="btn btn btn-brown">Ver cómic</button>
                <button className="btn btn btn-coral">Conocer personajes</button>
            </div>
            </div>

            <div className="col-lg-6 hero-image-col order-1 order-lg-2">
                <img src="./image 3.png" alt="Joe sonriendo" className="img-fluid rounded-4 shadow"/>
                <div className="d-lg-none hero-image-overlay-text p-3">
                    <h3>SonArte — Donde la música y el cómic se encuentran</h3>
                </div>
              </div>
            </div>

            {/* Tarjetas */}
            <div className="row cards-section g-4 justify-content-center">

                <div className="col-12 col-md-4 card-item">
                    <div className="card shadow-sm h-100 border-0">
                        <div className="card-img-wrapper position-relative">
                            <img src="./img.webp" className="card-img-top rounded-top" alt="Hombre tocando congas" />
                            <div className="card-overlay-text position-absolute bottom-0 start-0 p-3">
                                <h5 className="card-title text-white">Arte • Musica</h5>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="col-12 col-md-4 card-item">
            <div className="card shadow-sm h-100 border-0">
                <div className="card-img-wrapper position-relative">
                
                  <img src="" className="card-img-top rounded-top" alt="Familia SonArte" />
                  <div className="card-overlay-text position-absolute bottom-0 start-0 p-3">
                    <h5 className="card-title text-white">Historias • Raices</h5>
                  </div>
                </div>
            </div>
          </div>

              <div className="col-12 col-md-4 card-item">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-img-wrapper position-relative">
                <img src="./img.webp" className="card-img-top rounded-top" alt="Interacción SonArte"/>
                <div className="card-overlay-text position-absolute bottom-0 start-0 p-3">
                    <h5 className="card-title text-white">Interacción</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        </div>
    </section>
    </>
  )
}