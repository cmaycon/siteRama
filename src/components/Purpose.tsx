import React from 'react'
import './Purpose.css'
import { Target, Eye, Heart } from 'lucide-react'

const Purpose: React.FC = () => {
  return (
    <section id="proposito" className="purpose reveal">
      <h2 className="section-title">Nosso Propósito</h2>
      <div className="purpose-grid">
        <div className="purpose-card">
          <Target size={48} className="purpose-icon" />
          <h3>Missão</h3>
          <p>Evangelizar a todos, levando as boas novas de salvação e edificando vidas através da Palavra.</p>
        </div>
        <div className="purpose-card">
          <Eye size={48} className="purpose-icon" />
          <h3>Visão</h3>
          <p>Ganhar almas para Deus e formar discípulos que impactem a sociedade com o amor de Cristo.</p>
        </div>
        <div className="purpose-card">
          <Heart size={48} className="purpose-icon" />
          <h3>Valores</h3>
          <p>Adoração ao único Deus Pai, integridade, comunhão e serviço ao próximo.</p>
        </div>
      </div>
    </section>
  )
}

export default Purpose
