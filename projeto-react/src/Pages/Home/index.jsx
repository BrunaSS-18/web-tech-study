import React from 'react'
import Box from "../../Components/Box"
import img1 from "../../assets/img/montanha.jpg"
import img2 from "../../assets/img/marCinza.jpg"

export default function index() {
  return (
    <main className='container'>
      <section className='d-flex secao'>
        <Box
          title="Titulo do componente"
          description="Este é um paragrafo de exemplo para o componente"
          img={img1}
        />

        <Box
          title="Titulo do componente dois"
          description="Este é um paragrafo de exemplo"
          img={img2}
        />
      </section>
    </main>
  )
}
