require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const verifier = require('email-verify');

const app = express();

const PORT = process.env.PORT;
const user = process.env.USER;
const userpassword = process.env.USERPASSWORD;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: userpassword
    },
});

app.get('/', (req, res) => {
    res.send('hello');
});

app.post('/api/post', (req, res) => {
    const { name, subject, email, phone, message } = req.body;

    if (!name || !subject || !email || !phone || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // ⭐ Step 1: Verify email exists
    verifier.verify(email, (err, info) => {
        if (err) {
            console.error("Verification error:", err);
            return res.status(500).json({ error: "Error verifying email." });
        }

        if (!info.success) {
            return res.status(400).json({ error: "Email address does not exist." });
        }

        // ⭐ Step 2: If email is real, send both emails

        const adminHtml = `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2>${subject}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          </div>
        `;

        const userHtml = `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2>Thanks for Reaching Out!</h2>
            <p>Hi ${name},</p>
            <p>Thank you for contacting me. I’ve received your message and I’ll get back to you as soon as possible.</p>
            <p>Best regards,<br/>Quekeneth</p>
          </div>
        `;

        const adminMailOptions = {
            from: email,
            to: user,
            subject: subject,
            html: adminHtml,
        };

        const userMailOptions = {
            from: user,
            to: email,
            subject: 'Thank you for contacting us!',
            html: userHtml,
        };

        // Send to admin
        transporter.sendMail(adminMailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email to admin:', error);
                return res.status(500).json({ error: 'Failed to send email to admin.' });
            }

            console.log('Admin email sent:', info.response);

            // Send auto-reply to user
            transporter.sendMail(userMailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending acknowledgment email:', error);
                    return res.status(500).json({ error: 'Failed to send acknowledgment email.' });
                }

                console.log('Acknowledgment email sent:', info.response);
                res.status(200).json({ success: true, message: 'Emails sent successfully!' });
            });
        });

    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
