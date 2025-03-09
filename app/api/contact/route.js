import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 })
    }

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email app password
      },
    })

    // Email Content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }

    // Send Email
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: "Email sent successfully!" }), { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 })
  }
}
