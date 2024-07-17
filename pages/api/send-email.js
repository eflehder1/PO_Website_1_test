// /api/send-email.js
const nodemailer = require('nodemailer');

const sendEmailHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      // SMTP settings
      host: 'smtp.123-reg.co.uk',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'info@pipelineorganics.co.uk',
        subject: `${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res
        .status(500)
        .json({ error: 'Error sending email', details: error.toString() });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default sendEmailHandler;
