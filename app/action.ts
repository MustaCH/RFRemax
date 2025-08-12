'use server'

import { exclusiveContent } from "./constants"
import { sendEmail, sendTemplate } from "./lib/brevo"

export async function handleForm(formData: FormData) {

    const email = formData.get('email')
    const name = formData.get('to_name')
    const phone = formData.get('phone')
    const subject = formData.get('subject')
    const content = formData.get('content')

    // Enviar email (como antes)
    await sendEmail({
      name: name as string, 
      phone: phone as string,
      email: email as string, 
      content: content as string, 
      subject: subject as string
    });

    // Enviar datos al webhook de n8n
    try {
      await fetch('https://qiuadminplatform.space/webhook/894c2671-1428-4afb-846b-e3d28f263c6e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          subject,
          content,
        }),
      });
    } catch (error) {
      console.error('Error enviando datos al webhook de n8n:', error);
    }
  }

  export async function handleTemplate(formData: FormData) {

    const email = formData.get('email')
    const name = formData.get('to_name')

    await sendTemplate({
      name: name as string, 
      email: email as string, 
      content: exclusiveContent
    })
  }