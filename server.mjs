import express from 'express'
import { Resend } from 'resend'

const app = express()
const port = 3001

app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const resend = new Resend(process.env.RESEND_API_KEY)

  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).json({ error: 'Campos obrigatórios' })
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Site Ramá <onboarding@resend.dev>',
      to: 'ministerioapostolicorama1996@gmail.com',
      subject: `Nova mensagem de ${req.body.name} - Site Ramá`,
      html: `
        <h2>Contato pelo Site</h2>
        <p><strong>Nome:</strong> ${req.body.name}</p>
        <p><strong>E-mail:</strong> ${req.body.email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${req.body.message}</p>
      `,
    })

    if (error) {
      return res.status(500).json({ error: 'Erro ao enviar e-mail' })
    }

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Erro interno do servidor' })
  }
})

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`)
})
