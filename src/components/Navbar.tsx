import React, { useState, useEffect } from 'react'
import './Navbar.css'
import '../../assets/images/logo_rama.svg'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detects section when it's in the middle of the viewport
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src="../../assets/images/logo_rama.svg" alt="Ministério Apostólico Ramá" />
        </div>
        <ul className="nav-links">
          <li><a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>Início</a></li>
          <li><a href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>Sobre nós</a></li>
          <li><a href="#proposito" className={activeSection === 'proposito' ? 'active' : ''}>Propósito</a></li>
          <li><a href="#programacao" className={activeSection === 'programacao' ? 'active' : ''}>Programação</a></li>
          <li><a href="#localizacao" className={activeSection === 'localizacao' ? 'active' : ''}>Localização</a></li>
          <li><a href="#ofertas" className={activeSection === 'ofertas' ? 'active' : ''}>Ofertas</a></li>
          <li><a href="#contato" className={activeSection === 'contato' ? 'active' : ''}>Contato</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
