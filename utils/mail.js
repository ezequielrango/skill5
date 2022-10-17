const nodemailer= require("nodemailer") 

const config =require('./config')

// const user = await nodemailer.createTestAccount()

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.USER,
    pass: config.PASS
  }
})

const sendMail = async (mail) => {
  try {
    const sentMail = await transporter.sendMail(mail)
    return sentMail
    
  } catch (error) {
    console.log(error);
  }

}

module.exports= {sendMail};
