import * as brevo from "@getbrevo/brevo"

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.NEXT_BREVO_API_KEY as string
)

const smtpEmail = new brevo.SendSmtpEmail()

interface Params {
    subject: string;
    name: string;
    phone: string;
    email: string;
    content: string;
}

export async function sendEmail({name, phone, email, content, subject}: Params) {
    smtpEmail.subject = subject
    smtpEmail.to = [{email: "flaneros25@gmail.com", name: name}]
    smtpEmail.htmlContent = `<html><body><h4>${subject}</h4><p>${content}</p><br/><p>Nombre: ${name}<br/>Teléfono: ${phone}<br/>Correo: ${email}</p></body></html>`
    smtpEmail.sender = {name: name, email: "polettiignacio7@gmail.com"}

    await apiInstance.sendTransacEmail(smtpEmail)
}