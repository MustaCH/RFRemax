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
    smtpEmail.to = [{email: "romyfrola@gmail.com", name: name}]
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
                    <td style="padding: 20px; text-align: left; background-color: #E8E7E5;">
                    <h3 style="font-size: 24px; color: #333333; margin: 0;">Hola ${name}!</h3>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style="position: relative; border: 2px solid #4088e3;">
                            <p style="position: absolute; top: 40; left: 50; font-size: 25px; color: white; line-height: 1.5; margin: 0; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
                                <strong>Éstas son las últimas noticias del mercado inmobiliario y cómo impactan las nuevas medidas económicas:</strong>
                            </p>
                            <img src="https://res.cloudinary.com/dfuru6l6d/image/upload/v1732551317/Dise%C3%B1o_sin_t%C3%ADtulo_anjpdp.jpg" alt="Header Image" style="width: 100%; max-height: 200px; display: block; object-fit: cover;">
                        </div>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 20px; text-align: left; background-color: #E8E7E5;">
                    ${content}
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #E8E7E5; ">
                        <table>
                            <tr>
                                <td>
                                    <div style="border: 2px solid #4088e3; margin: 10px; width: 80px; height:80px; border-radius: 100%; background-position: center; background-size: 100%; background-repeat: no-repeat; background-image: url('https://res.cloudinary.com/dfuru6l6d/image/upload/v1732918231/Imagen_de_WhatsApp_2024-11-29_a_las_17.05.38_8b722284_q3utql.jpg');">
                                    </div>
                                </td>
                                <td style="color: #333333;">
                                    <h4 style="margin: 0; font-size: 14px;">Romina Frola</h4>
                                    <p style="margin: 0; font-size: 12px; margin-top: 4px;">Agente inmobiliario</p>
                                    <p style="margin: 0; font-size: 12px; margin-top: 4px;">Email: <a style="color: #333333; font-size: 12px; margin-top: 4px;" href="mailto:rfrola@remax.com.ar">rfrola@remax.com.ar</a></p>
                                    <p style="margin: 0; font-size: 12px; margin-top: 4px;">Tel.: <a style="color: #333333; font-size: 12px; margin-top: 4px;" href="">+54 9 11 5894-2180</a></p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="background-color: #E8E7E5;">
                        <p style="font-size: 12px; color: #555555; line-height: 1.5; margin: 10px;">
                            El objetivo de esta información es mantenerte informado y acercarte herramientas y conocimientos para que puedas aprovechar las oportunidades que ofrece el mercado. Mi compromiso es acompañarte en cada paso, ya sea como comprador, vendedor o inversor.
                        </p>
                    </td>
                </tr>
                </table>
            </body>
            </html>`;

    await apiInstance.sendTransacEmail(smtpEmail)
}