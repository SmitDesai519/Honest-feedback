import { ApiResponse } from "@/types/ApiResponse";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  const msg = {
    to: email,
    from: "smitdesai5694@gmail.com",
    subject: "Verification Code",
    html: `<html lang="en" dir="ltr">
    <head>
      <title>Verification Code</title>
      <style>
        @font-face {
          font-family: 'Roboto';
          src: url('https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2') format('woff2');
          font-weight: 400;
          font-style: normal;
        }
        body {
          font-family: 'Roboto', Verdana, sans-serif;
        }
      </style>
    </head>
    <body>
      <div>Here's your verification code: <!-- OTP goes here --></div>
      <section>
        <div>
          <h2>Hello ${username}</h2>
        </div>
        <div>
          <p>Thank you for registering. Please use the following verification code to complete your registration:</p>
        </div>
        <div>
          <p>${verifyCode}</p>
        </div>
        <div>
          <p>If you did not request this code, please ignore this email.</p>
        </div>
        <div>
          <a href="http://localhost:3000/verify/${username}" style="color: #61dafb;">Verify here</a>
        </div>
      </section>
    </body>
  </html>`,
  };
  try {
    await sgMail.send(msg);
    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email." };
  }
}
