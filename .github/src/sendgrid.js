import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: process.env.EMAIL_TO,
  from: process.env.EMAIL_FROM,
  subject: "This is a test",
  text: "Hello a commit has been done on the repo!",
  html: "<p>Hello a commit has been done on the repo!</p>",
}

sgMail
  .send(msg)
  .then(() => console.log("Mail sent successfully"))
  .catch((error) => console.error(error.toString()))
