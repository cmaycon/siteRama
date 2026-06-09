import React from 'react'
import './Offers.css'
import { Landmark, QrCode } from 'lucide-react'
import img_qr-code from '../../assets/images/qr_code.jpg'

const Offers: React.FC = () => {
  return (
    <section id="ofertas" className="offers reveal">
      <h2 className="section-title">Dízimos e Ofertas</h2>
      <div className="offers-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ color: 'var(--primary-yellow)', fontSize: '1.8rem', marginBottom: '10px' }}>Oferte Com Alegria!</h3>
        <p style={{ fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          "Cada um contribua segundo propôs no seu coração; não com tristeza, ou por necessidade; porque Deus ama ao que dá com alegria." - 2 Coríntios 9:7
        </p>
      </div>
      <div className="offers-container">
        <div className="offers-card">
          <Landmark size={48} className="offers-icon" />
          <h3>Transferência Bancária</h3>
          <p><strong>Banco:</strong> Bradesco</p>
          <p><strong>Agência:</strong> 1911</p>
          <p><strong>Conta:</strong> 42.707-1</p>
        </div>
        <div className="offers-card qr-section">
          <QrCode size={48} className="offers-icon" />
          <h3>PIX</h3>
          <div className="qr-placeholder" style={{ marginTop: '20px' }}>
            <img src={img_qr-code} alt="QR Code PIX" style={{ width: '200px', height: '200px', borderRadius: '10px', border: '4px solid var(--primary-yellow)' }} />
          </div>
          <p className="pix-key" style={{ marginTop: '15px' }}><strong>CNPJ:</strong> 01.212.631/0001-37</p>
        </div>
      </div>
    </section>
  )
}

export default Offers
