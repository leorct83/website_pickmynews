import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fundName, firstName, email, position, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required' }, { status: 400 });
    }

    const response = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`
        ).toString('base64')}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: {
              Email: 'leopolddelarochere@gmail.com',
              Name: 'PickMyNews Contact',
            },
            To: [
              {
                Email: 'contact@pickmynews.com',
                Name: 'PickMyNews',
              },
            ],
            ReplyTo: {
              Email: email,
              Name: firstName || email,
            },
            Subject: `Contact${fundName ? ` - ${fundName}` : ''}${firstName ? ` - ${firstName}` : ''}`,
            TextPart: `${fundName ? `Fonds : ${fundName}\n` : ''}${firstName ? `Prénom : ${firstName}\n` : ''}Email : ${email}\n${position ? `Poste : ${position}\n` : ''}\nMessage :\n${message}`,
            HTMLPart: `
              <h3>Nouveau message de contact</h3>
              ${fundName ? `<p><strong>Fonds :</strong> ${fundName}</p>` : ''}
              ${firstName ? `<p><strong>Prénom :</strong> ${firstName}</p>` : ''}
              <p><strong>Email :</strong> ${email}</p>
              ${position ? `<p><strong>Poste :</strong> ${position}</p>` : ''}
              <hr/>
              <p><strong>Message :</strong></p>
              <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Mailjet error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
