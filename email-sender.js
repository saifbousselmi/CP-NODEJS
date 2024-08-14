const nodemailer = require('nodemailer');

// Create a transporter object using your email service
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider (e.g., 'gmail', 'yahoo')
  auth: {
    user: '...@gmail.com', // Replace with your email address
    pass: 'your-email-password'    // Replace with your email password
  }
});

// Email options
const mailOptions = {
  from: '...l@gmail.com', // Replace with your email address
  to: '...@gmail.com',   // Replace with the recipient email address (can be the same)
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error sending email:', error);
  }
  console.log('Email sent:', info.response);
});