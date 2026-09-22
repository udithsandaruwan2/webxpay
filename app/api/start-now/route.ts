import { NextRequest, NextResponse } from 'next/server';
import { createMailTransporter, escapeHtml } from '@/lib/mail';

export const POST = async (request: NextRequest) => {
    try {
        const { email } = await request.json();

        // Validate required fields
        if (!email) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { transporter, defaultFrom, defaultTo } = await createMailTransporter();

        const safeEmail = escapeHtml(String(email));

        const emailContent = `
Email: ${email}
        `.trim();

        const mailOptions = {
            from: defaultFrom,
            to: defaultTo,
            subject: 'New Lead',
            text: emailContent,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Lead Submission</h2>
                    <table style="border-collapse: collapse; width: 100%;">
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email:</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">${safeEmail}</td>
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
