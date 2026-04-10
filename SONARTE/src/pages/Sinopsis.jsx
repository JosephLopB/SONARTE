import React from 'react'
import '../styles/sinopsis.css';

export const Sinopsis = () => {
  return (
    <>
    <section className="sinopsis-section py-5">
      <div className="container">
        
        <div className="sinopsis-card p-4 p-md-5 rounded-5 shadow-sm">
          
          <div className="row justify-content-center">
            <div className="col-lg-10 text-start">
              <h2 className="sinopsis-title fw-bold mb-4">Sinopsis</h2>
              
              <p className="sinopsis-text mb-5">
                Desde las calles polvorientas del barrio Nariño en Cartagena, un niño llamado Álvaro José Arroyo descubre que su voz es su mayor tesoro. Entre el canto en burdeles para sobrevivir y su paso por un coro de iglesia, Joe forja su carácter y su estilo único, culminando con su primer gran salto: unirse a la orquesta que lo catapultará a la fama.
              </p>

             
              <div className="sinopsis-img-wrapper">
             
                <img src="image7.png" alt="Familia de Joe Arroyo" className="img-fluid w-100  object-fit-cover rounded-4 "/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
