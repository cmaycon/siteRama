import React from 'react'
import './Footer.css'
import { Instagram, Facebook, Youtube } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo_rama.svg" alt="Ministério Apostólico Ramá" className="footer-logo" />
        </div>
        <div className="footer-content">
          <p className="verse">"Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele eternamente. Amém." - Romanos 11:36</p>
        </div>
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://instagram.com/ministerioapostolicorama" target="_blank"><Instagram size={24} /></a>
            <a href="https://facebook.com/ministeriorama" target="_blank"><Facebook size={24} /></a>
            <a href="https://youtube.com/@ministeriorama" target="_blank"><Youtube size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ministério Apostólico Ramá. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
