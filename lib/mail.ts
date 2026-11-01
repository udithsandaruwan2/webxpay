import nodemailer from 'nodemailer';

/**
 * Escapes HTML characters to prevent HTML template injection in email bodies.
 */
export function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

/**
 * Creates and verifies the shared Nodemailer transport instance.
 * Note: Credentials should be configured in production via EMAIL_USER and EMAIL_PASS environment variables.
 */
export async function createMailTransporter() {
    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
        throw new Error('EMAIL_USER and EMAIL_PASS environment variables are required for email delivery.');
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.office365.com',
        port: Number(process.env.EMAIL_PORT) || 587,
        secure: false,
        auth: {
            user,
            pass,
        },
        tls: {
            ciphers: 'TLSv1.2',
            rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED !== 'false',
        },
    });

    await transporter.verify();
    return { transporter, defaultFrom: user, defaultTo: user };
}
