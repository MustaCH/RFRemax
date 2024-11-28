import * as brevo from "@getbrevo/brevo"

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.NEXT_BREVO_API_KEY as string
)

const smtpEmail = new brevo.SendSmtpEmail()

interface EmailParams {
    subject: string;
    name: string;
    phone: string;
    email: string;
    content: string;
}

interface TemplateParams {
    name: string;
    email: string;
}

export async function sendEmail({name, phone, email, content, subject}: EmailParams) {
    smtpEmail.subject = subject
    smtpEmail.to = [{email: "flaneros25@gmail.com", name: name}]
    smtpEmail.htmlContent = `<html><body><h4>${subject}</h4><p>${content}</p><br/><p>Nombre: ${name}<br/>Teléfono: ${phone}<br/>Correo: ${email}</p></body></html>`
    smtpEmail.sender = {name: name, email: "polettiignacio7@gmail.com"}

    await apiInstance.sendTransacEmail(smtpEmail)
}

export async function sendTemplate({name, email,}: TemplateParams) {
    smtpEmail.subject = 'Información exclusiva'
    smtpEmail.to = [{email: email, name: name}]
    smtpEmail.htmlContent = `<html><body><h1>Hola ${name}</h1><p>sdklfhskldfhslkdfhskdlf</p></body></html>`
    smtpEmail.sender = {name: 'Romina Frola', email: "polettiignacio7@gmail.com"}

    await apiInstance.sendTransacEmail(smtpEmail)
}