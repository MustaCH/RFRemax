'use server'

import { sendEmail } from "./lib/brevo"

export async function handleForm(formData: FormData) {

    const email = formData.get('email')
    const name = formData.get('to_name')
    const phone = formData.get('phone')
    const subject = formData.get('subject')
    const content = formData.get('content')

    await sendEmail({
      name: name as string, 
      phone: phone as string,
      email: email as string, 
      content: content as string, 
      subject: subject as string
    })
  }