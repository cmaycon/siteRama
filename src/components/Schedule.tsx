import React from 'react'
import './Schedule.css'
import { Calendar } from 'lucide-react'

const Schedule: React.FC = () => {
  return (
    <section id="programacao" className="schedule reveal">
      <h2 className="section-title">Programação Semanal</h2>
      <div className="schedule-list">
        <div className="schedule-item">
          <Calendar className="schedule-icon" />
          <div className="schedule-details">
            <h3>Terça-feira</h3>
            <p>20:00 - Culto de Celebração</p>
          </div>
        </div>
        <div className="schedule-item">
          <Calendar className="schedule-icon" />
          <div className="schedule-details">
            <h3>Domingo</h3>
            <p>18:00 - Culto de Celebração</p>
          </div>
        </div>
        <div className="schedule-item special">
          <Calendar className="schedule-icon" />
          <div className="schedule-details">
            <h3>Último Domingo do Mês</h3>
            <p>09:30 - Culto de Celebração</p>
          </div>
        </div>
        <div className="schedule-item">
          <Calendar className="schedule-icon" />
          <div className="schedule-details">
            <h3>Sábados</h3>
            <p>Encontros de Redes <b>(Consultar programação mensal)</b></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
