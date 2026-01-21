import sgMail from '@sendgrid/mail'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || ''
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || ''
const SENDGRID_FROM = process.env.SENDGRID_FROM || ADMIN_EMAIL

if (!SENDGRID_API_KEY) {
  console.warn('SENDGRID_API_KEY not set; emails will not be sent')
} else {
  sgMail.setApiKey(SENDGRID_API_KEY)
}

export async function sendInquiryEmail(payload: Record<string, any>) {
  if (!SENDGRID_API_KEY) return { ok: false, reason: 'no_api_key' }
  if (!ADMIN_EMAIL) return { ok: false, reason: 'no_admin_email' }

  const subject = `New inquiry from ${payload.name || 'unknown'}`
  const text = `New inquiry submitted:\n\n${JSON.stringify(payload, null, 2)}`

  const msg = {
    to: ADMIN_EMAIL,
    from: SENDGRID_FROM,
    subject,
    text,
    // Optionally HTML-encode nicer
    html: `<pre style="white-space:pre-wrap">${JSON.stringify(payload, null, 2)}</pre>`,
  }

  try {
    await sgMail.send(msg)
    return { ok: true }
  } catch (err) {
    console.error('SendGrid send error', err)
    return { ok: false, reason: 'send_failed', error: String(err) }
  }
}
