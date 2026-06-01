import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section id="sobre" className="about reveal">
      <h2 className="section-title">Sobre Nós</h2>
      <div className="about-container">
        <div className="about-text">
          <p>
            O Ministério Apostólico Ramá nasceu com o coração voltado para a edificação da família e o fortalecimento espiritual da comunidade. Nossa história é marcada por fé, milagres e uma busca constante pela presença de Deus.
          </p>
          <p>
            Somos uma família de cristãos apaixonados pelo Reino, dedicados a ensinar a Palavra de Deus e a viver os princípios bíblicos no dia a dia.
          </p>
        </div>
        <div className="about-image-placeholder">
          {/* In a real scenario, use an image of the church */}
          <div className="image-box">IGREJA RAMÁ</div>
        </div>
      </div>
    </section>
  )
}

export default About
