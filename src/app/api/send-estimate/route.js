import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, vehicle, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Honeypot check for bots
    if (body.website_url) {
      // Return a fake success if the honeypot is filled
      return NextResponse.json(
        { success: true, message: 'Estimate request sent successfully!' },
        { status: 200 }
      );
    }

    // Build the email HTML
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); padding: 32px 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
            ⭐ New Free Estimate Request
          </h1>
          <p style="margin: 8px 0 0; font-size: 14px; opacity: 0.9;">
            Texas Five Star Paint &amp; Body
          </p>
        </div>
        
        <div style="padding: 32px 24px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #a3a3a3; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 140px;">
                Name
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #a3a3a3; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                <a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-size: 15px;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #a3a3a3; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Phone
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08);">
                <a href="tel:${phone}" style="color: #dc2626; text-decoration: none; font-size: 15px;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #a3a3a3; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Vehicle
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">
                ${vehicle || 'Not specified'}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #a3a3a3; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Service
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 15px;">
                ${service}
              </td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #a3a3a3; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">
                Message
              </td>
              <td style="padding: 12px 0; color: #ffffff; font-size: 15px; line-height: 1.6;">
                ${message}
              </td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="padding: 16px 24px 24px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #525252;">
            This estimate request was submitted via texasfivestarpaintandbody.com
          </p>
        </div>
      </div>
    `;

    // Initialize Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.mail.yahoo.com',
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Texas Five Star Website" <${process.env.SMTP_USER}>`, 
      to: 'texasfivestarpaintandbody@yahoo.com', // Recipient
      subject: `New Free Estimate Request from ${name}`,
      html: emailHtml,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email successfully sent to Gmail server. Info:", info.messageId);

    return NextResponse.json(
      { success: true, message: 'Estimate request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: error.message || 'Something went wrong. Please call us at (469) 583-7377.' },
      { status: 500 }
    );
  }
}
