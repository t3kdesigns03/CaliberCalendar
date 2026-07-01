import { NextRequest, NextResponse } from 'next/server'

const PROFILE_LABELS = [
  '', // index 0 unused
  'Conservative',
  'Moderately Conservative',
  'Moderate',
  'Moderately Aggressive',
  'Aggressive',
]

function getProfileIndex(score: number): number {
  if (score <= 18) return 1
  if (score <= 26) return 2
  if (score <= 34) return 3
  if (score <= 42) return 4
  return 5
}

const QUESTION_LABELS = [
  'Comfort with portfolio ups and downs',
  'Reaction to a 20% drop',
  'How important is stability to you?',
  'Your investment experience',
  'Stability vs. growth priority',
  'Time until retirement',
  'Comfort with market uncertainty',
  'How you would invest a windfall',
  'Gut reaction to market news',
  'Overall investing philosophy',
]

const ANSWER_LABELS: Record<number, string[]> = {
  1: ['Very uneasy — steady is better', 'Can tolerate a little', "OK with moderate swings", "Generally comfortable", "Completely fine with it"],
  2: ['Move to safety', 'Reduce some risk', 'Stay the course (anxiously)', 'Hold firm', 'Buy more'],
  3: ['Very important — peace of mind first', 'Fairly important', 'A balanced mix', 'Not that important', 'Not important at all — growth first'],
  4: ['Very little experience', 'Some basics', 'Moderate knowledge', 'Fairly experienced', 'Very experienced'],
  5: ['Protect my money above all', 'Mostly protection, some growth', 'A balanced mix', 'Mostly growth', 'Maximize growth'],
  6: ['Within 1–2 years', '2–5 years', '5–10 years', '10–15 years', '15+ years'],
  7: ['Very uncomfortable', 'A bit uneasy', 'Somewhat comfortable', 'Generally comfortable', 'Very comfortable'],
  8: ['All safe (CDs / bonds)', 'Mostly safe, little stocks', 'Balanced mix', 'Mostly stocks', 'All in stocks/growth'],
  9: ['Anxious — want to protect now', 'Worried, but hold back', 'Notice it, stay calm', 'Calm — I know cycles happen', 'See it as opportunity'],
  10: ['Preserve what I have', 'Grow slowly and carefully', 'Balanced growth', 'Grow confidently', 'Maximize growth'],
}

function buildHtmlEmail(
  name: string,
  email: string,
  phone: string,
  score: number,
  answers: number[],
): string {
  const idx = getProfileIndex(score)
  const profile = PROFILE_LABELS[idx]

  const PROFILE_COLORS: Record<number, { bg: string; border: string; text: string }> = {
    1: { bg: '#F1F4F8', border: '#94A3B8', text: '#334155' },
    2: { bg: '#EFF6FF', border: '#60A5FA', text: '#1E40AF' },
    3: { bg: '#F0F9FF', border: '#38BDF8', text: '#0369A1' },
    4: { bg: '#FFFBEB', border: '#FCD34D', text: '#92400E' },
    5: { bg: '#FFF7ED', border: '#C5A46E', text: '#92400E' },
  }

  const colors = PROFILE_COLORS[idx]

  const answersHtml = answers
    .map((a, i) => {
      const label = ANSWER_LABELS[i + 1]?.[a - 1] ?? `Option ${a}`
      return `
        <tr>
          <td style="padding:8px 12px; border-bottom:1px solid #F1F4F8; color:#6B7280; font-size:13px; width:55%">${QUESTION_LABELS[i]}</td>
          <td style="padding:8px 12px; border-bottom:1px solid #F1F4F8; color:#1A2B4A; font-size:13px; font-weight:500">${label} <span style="color:#9CA3AF;">(${a}/5)</span></td>
        </tr>`
    })
    .join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F4F6F8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F6F8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#0F2C5A;border-radius:12px 12px 0 0;padding:32px 36px;">
          <div style="color:#C5A46E;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:8px;">JBAdvantage</div>
          <div style="color:#FFFFFF;font-size:22px;font-weight:700;line-height:1.3;">New Risk Profile Submission</div>
          <div style="color:#94A3B8;font-size:14px;margin-top:6px;">Retirement Risk Profile Quiz Result</div>
        </td></tr>

        <!-- Contact Info -->
        <tr><td style="background:#FFFFFF;padding:28px 36px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:8px;"><span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Name</span><br>
                <span style="color:#0F2C5A;font-size:15px;font-weight:600;">${name}</span></td>
              <td style="padding-bottom:8px;"><span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Email</span><br>
                <span style="color:#0F2C5A;font-size:15px;font-weight:600;">${email}</span></td>
            </tr>
            <tr>
              <td colspan="2" style="padding-bottom:24px;">
                <span style="color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Phone</span><br>
                <span style="color:#0F2C5A;font-size:15px;font-weight:600;">${phone || 'Not provided'}</span>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Profile Card -->
        <tr><td style="background:#FFFFFF;padding:0 36px 28px;">
          <div style="background:${colors.bg};border:2px solid ${colors.border};border-radius:10px;padding:20px 24px;">
            <div style="color:#6B7280;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;">Risk Profile Result</div>
            <div style="color:${colors.text};font-size:24px;font-weight:800;margin-bottom:4px;">${profile}</div>
            <div style="color:#6B7280;font-size:13px;">Score: <strong style="color:#0F2C5A;">${score} / 50</strong></div>
          </div>
        </td></tr>

        <!-- Answer Summary -->
        <tr><td style="background:#FFFFFF;padding:0 36px 28px;border-radius:0 0 12px 12px;">
          <div style="color:#0F2C5A;font-size:14px;font-weight:700;margin-bottom:12px;">Answer Summary</div>
          <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;">
            <thead>
              <tr>
                <th style="padding:8px 12px;background:#F8FAFC;color:#6B7280;font-size:11px;font-weight:700;text-align:left;text-transform:uppercase;letter-spacing:0.06em;">Question</th>
                <th style="padding:8px 12px;background:#F8FAFC;color:#6B7280;font-size:11px;font-weight:700;text-align:left;text-transform:uppercase;letter-spacing:0.06em;">Answer</th>
              </tr>
            </thead>
            <tbody>${answersHtml}</tbody>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:20px 0;text-align:center;">
          <div style="color:#9CA3AF;font-size:11px;line-height:1.6;">
            JBAdvantage · Free retirement reviews. Clear guidance. No pressure.<br>
            This submission was received via the JBAdvantage Risk Profile Quiz.
          </div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, score, answers } = body as {
      name: string
      email: string
      phone: string
      score: number
      answers: number[]
    }

    if (!name || !email || typeof score !== 'number' || !Array.isArray(answers)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'onboarding@resend.dev'
    const toEmail = process.env.NOTIFY_EMAIL ?? email

    const profileIndex = getProfileIndex(score)
    const profile = PROFILE_LABELS[profileIndex]

    if (!apiKey) {
      // Dev mode: log and return success so the UI still works
      console.warn('[risk-profile] RESEND_API_KEY not set — skipping email send')
      console.log('[risk-profile] Would send:', { name, email, phone, score, profile })
      return NextResponse.json({ ok: true, dev: true })
    }

    const html = buildHtmlEmail(name, email, phone, score, answers)

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Risk Profile: ${name} — ${profile} (${score}/50)`,
        html,
      }),
    })

    if (!res.ok) {
      const errBody = await res.text()
      console.error('[risk-profile] Resend error:', res.status, errBody)
      return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[risk-profile] Unexpected error:', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
