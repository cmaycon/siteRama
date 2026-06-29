import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obrigatórios' })
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Site Ramá <onboarding@resend.dev>',
      to: 'ministerioapostolicorama1996@gmail.com',
      subject: `Nova mensagem de ${name} - Site Ramá`,
      html: `
        <h2>Contato pelo Site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return res.status(500).json({ error: 'Erro ao enviar e-mail' })
    }

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Erro interno do servidor' })
  }
}
