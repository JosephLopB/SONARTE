import React from 'react';
import '../styles/home.css';

export const Home = () => {
  return (
    <>
    <main className="home-content">
      <div className="container-fluid p-0">
        
        <div className="row align-items-center g-0">
          <div className="col-lg-6 p-4 ps-lg-5 text-start">
            <h1 className="hero-title display-4 fw-bold">
              SonArte — Donde la música y el cómic se encuentran
            </h1>
            <p className="hero-description my-4">
              Un proyecto transmedia que rescata el folclore colombiano a través de historias, 
              personajes y ritmos que inspiran. Explora el cómic, conoce a los creadores, 
              y sumérgete en cada capítulo.
            </p>
            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-brown rounded-pill px-4 py-2">Ver cómic</button>
              <button className="btn btn-coral rounded-pill px-4 py-2">Conocer personajes</button>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-image-full">
              <img  src="./image3.png"  alt="Joe sonriendo"  className="img-fluid w-100 h-100 object-fit-cover"/>
            </div>
          </div>
        </div>
 
 <div className='container py-5'>
  <div className='row g-4 justify-content-center'>
        
        <div className="row g-4 mt-4">
          <div className="col-12 col-md-4">
            <div className="card-custom">
              <img src="./image5.png" alt="Arte y Música" className="card-img-custom" />
              <div className="card-text-overlay">
                <h5 className='text-center w-100'>Arte • Musica</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-custom">
              <img src="./image7.png" alt="Historias y Raíces" className="card-img-custom" />
              <div className="card-text-overlay">
                <h5 className='text-center w-100'>Historias • Raices</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-custom">
              <img src="./image8.png" alt="Interacción" className="card-img-custom" />
              <div className="card-text-overlay">
                <h5 className='text-center w-100'>Interacción</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

      </div>
    </main>
    </>
  );
};