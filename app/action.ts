'use server'

import { exclusiveContent } from "./constants"
import { sendEmail, sendTemplate } from "./lib/brevo"

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

  export async function handleTemplate(formData: FormData) {

    const email = formData.get('email')
    const name = formData.get('to_name')

    await sendTemplate({
      name: name as string, 
      email: email as string, 
      content: exclusiveContent
    })
  }