import nodemailer from 'nodemailer';

const required = ['AGENTMAIL_API_KEY', 'AGENTMAIL_SMTP_USER', 'AGENTMAIL_SMTP_HOST', 'AGENTMAIL_SMTP_PORT'];

function missingEnv() {
  return required.filter((k) => !process.env[k]);
}

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return json(res, 405, { ok: false, error: 'Method not allowed' });
  }

  const missing = missingEnv();
  if (missing.length) {
    return json(res, 500, { ok: false, error: `Missing env: ${missing.join(', ')}` });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return json(res, 400, { ok: false, error: 'Invalid JSON payload' });
    }
  }

  const fullName = String(body?.fullName || '').trim();
  const email = String(body?.email || '').trim();
  const company = String(body?.company || '').trim();
  const message = String(body?.message || '').trim();

  if (!fullName) return json(res, 400, { ok: false, error: 'Please enter your full name.' });
  if (!email.includes('@')) return json(res, 400, { ok: false, error: 'Please enter a valid email address.' });
  if (message.length < 20) return json(res, 400, { ok: false, error: 'Please provide at least 20 characters in your message.' });

  const smtpPort = Number(process.env.AGENTMAIL_SMTP_PORT || 465);
  const secure = smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.AGENTMAIL_SMTP_HOST,
    port: smtpPort,
    secure,
    auth: {
      user: process.env.AGENTMAIL_SMTP_USER,
      pass: process.env.AGENTMAIL_API_KEY,
    },
  });

  const to = process.env.AGENTMAIL_TO || process.env.AGENTMAIL_SMTP_USER;

  const text = [
    'New DropX Agent contact request',
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Company: ${company || 'N/A'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    await transporter.sendMail({
      from: `DropX Agent <${process.env.AGENTMAIL_SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `DropX Lead: ${fullName}${company ? ` (${company})` : ''}`,
      text,
    });

    return json(res, 200, { ok: true, message: 'Thanks! Your request has been received. We will contact you shortly.' });
  } catch (err) {
    const detail = err?.message ? String(err.message) : 'Failed to send message';
    return json(res, 502, { ok: false, error: detail });
  }
}
