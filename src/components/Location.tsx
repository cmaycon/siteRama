import React from 'react'
import './Location.css'
import { MapPin } from 'lucide-react'

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="location reveal">
      <h2 className="section-title">Localização</h2>
      <div className="location-container">
        <div className="location-info">
          <MapPin size={48} className="location-icon" />
          <h3>Venha nos visitar!</h3>
          <p>Rua Manuel Arce, 100</p>
          <p>Pq. Dos Bancários - São Paulo, SP</p>
          <p>CEP: 03922-150</p>
        </div>
        <div className="map-placeholder">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2790600862527!2d-46.51896781410279!3d-23.59432280806737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6788546e8273%3A0x94e8cf73b2c98945!2sMinist%C3%A9rio%20Apost%C3%B3lico%20Rama!5e0!3m2!1spt-BR!2sbr!4v1773761453443!5m2!1spt-BR!2sbr" width="100%" height="400" style={{border:0, borderRadius: '10px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  )
}

export default Location
