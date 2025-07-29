import { text } from 'express';
import Nodemailer from 'nodemailer';

export const welcomeEmail = async (email, name) => {
    const transporter = Nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
        }
    })

    const mailOption = {
        from: process.env.EMAIL,
        to: email,
        subject: "Thank u for subscribing",
        text: "Welcome to recipe blog"
    }

    await transporter.sendMail(mailOption)
}

