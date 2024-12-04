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
    content: string;
}

export async function sendEmail({name, phone, email, content, subject}: EmailParams) {
    smtpEmail.subject = subject
    smtpEmail.to = [{email: "rfrola@remax.com.ar", name: name}]
    smtpEmail.htmlContent = `<html><body><h4>${subject}</h4><p>${content}</p><br/><p>Nombre: ${name}<br/>Teléfono: ${phone}<br/>Correo: ${email}</p></body></html>`
    smtpEmail.sender = {name: name, email: process.env.NEXT_BREVO_TO_EMAIL}

    await apiInstance.sendTransacEmail(smtpEmail)
}

export async function sendTemplate({name, email, content}: TemplateParams) {
    smtpEmail.subject = 'Información exclusiva'
    smtpEmail.to = [{email: email, name: name}]
    smtpEmail.sender = {name: 'Romina Frola', email: process.env.NEXT_BREVO_TO_EMAIL}
    smtpEmail.htmlContent = `
            <html>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #E8E7E5;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-collapse: collapse;">
                <tr>
                    <td>
                    <img src="https://res.cloudinary.com/dfuru6l6d/image/upload/v1732221175/bannerwelcome_liywcy.jpg" alt="Header Image" style="width: 100%; max-height: 200px; display: block; object-fit: cover;">
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: center; background-color: #E8E7E5;">
                    <h3 style="font-size: 24px; color: #333333; margin: 0;">Hola, ${name}!</h3>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: left; background-color: #E8E7E5;">
                    ${content}
                    </td>
                </tr>
                </table>
            </body>
            </html>`;

    await apiInstance.sendTransacEmail(smtpEmail)
}