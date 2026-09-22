import { NextRequest, NextResponse } from 'next/server';
import { createMailTransporter, escapeHtml } from '@/lib/mail';

export const POST = async (request: NextRequest) => {
    try {
        const { name, email, phone, company, message } = await request.json();

        // Validate required fields
        if (!name || !email || !phone || !company) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { transporter, defaultFrom, defaultTo } = await createMailTransporter();

        const safeName = escapeHtml(String(name));
        const safeEmail = escapeHtml(String(email));
        const safePhone = escapeHtml(String(phone));
        const safeCompany = escapeHtml(String(company));
        const safeMessage = message ? escapeHtml(String(message)) : 'No message provided';

        const emailContent = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Message: ${message || 'No message provided'}
        `.trim();

        const mailOptions = {
            from: defaultFrom,
            to: defaultTo,
            subject: 'Contact Us Form Submission',
            text: emailContent,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Contact Us Form Submission</h2>
                    <table style="border-collapse: collapse; width: 100%;">
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Name:</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${safeName}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email:</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${safeEmail}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Phone:</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${safePhone}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Company:</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${safeCompany}</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Message:</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${safeMessage}</td>
                        </tr>
                    </table>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);

        return NextResponse.json(
            {
                success: true,
                message: 'Email sent successfully',
                messageId: info.messageId
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email sending error:', error);

        return NextResponse.json(
            {
                error: 'Failed to send email'
            },
            { status: 500 }
        );
    }
};
