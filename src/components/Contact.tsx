import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contato" className="contact reveal">
      <h2 className="section-title">Contato</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome Completo</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
              disabled={status === 'loading'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
              disabled={status === 'loading'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              disabled={status === 'loading'}
            ></textarea>
          </div>
          <button type="submit" className="btn-submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          {status === 'success' && (
            <p className="feedback success">Mensagem enviada com sucesso!</p>
          )}
          {status === 'error' && (
            <p className="feedback error">Erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
