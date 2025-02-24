import nodemailer from "nodemailer"; 

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "https://sdpapeis.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Método nao permitido" });
    }

    const { to, subject, text } = req.body;

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_MAIL,
            pass: process.env.NODEMAILER_PASS,
        },
        connectionTimeout: 10000,
    });

    try {
        await transport.sendMail({
            from: `Bitmail <${process.env.NODEMAILER_MAIL}>`,
            to,
            subject,
            html: text,
        });

        return res.status(200).json({ message: "Email enviado com sucesso" });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao enviar email", error: error.message });
    }
}
