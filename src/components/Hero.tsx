import React from 'react'
// @ts-ignore: allow CSS side-effect import when no declaration file is available
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <span className="hero-subtitle">Seja Bem-vindo ao</span>
        <h1>Ministério Apostólico Ramá</h1>
        <p>Um lugar de Deus para sua família!</p>
        <div className="hero-actions">
          <a href="#sobre" className="btn-primary">Conheça-nos</a>
          <a href="#programacao" className="btn-secondary">Nossos Cultos</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
