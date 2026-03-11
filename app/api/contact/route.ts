import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fundName, firstName, lastName, position, message } = await request.json();

    if (!fundName || !firstName || !lastName || !position || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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
              Email: 'contact@pickmynews.com',
              Name: 'PickMyNews Contact',
            },
            To: [
              {
                Email: 'contact@pickmynews.com',
                Name: 'PickMyNews',
              },
            ],
            Subject: `Contact - ${fundName} - ${firstName} ${lastName}`,
            TextPart: `Nom du fonds : ${fundName}\nPrénom : ${firstName}\nNom : ${lastName}\nPoste : ${position}\n\nMessage :\n${message}`,
            HTMLPart: `
              <h3>Nouveau message de contact</h3>
              <p><strong>Fonds :</strong> ${fundName}</p>
              <p><strong>Contact :</strong> ${firstName} ${lastName}</p>
              <p><strong>Poste :</strong> ${position}</p>
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
