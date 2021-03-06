const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// const pathname = path.resolve(__dirname + "/index.html");
const pathname = path.resolve(__dirname + "/mail.html");
// const pathname = path.resolve(__dirname + "/stripo.html");
const html = fs.readFileSync(pathname);

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: testAccount.user, // generated ethereal user
  //     pass: testAccount.pass, // generated ethereal password
  //   },
  // });

  // 1.创建一个Nodemailer smtp传输对象
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: "587",
    secureConnection: true,
    secure: false, // true for 465, false for other ports
    auth: { user: "sialvsic@outlook.com", pass: "qteoalbfntewmkhs" },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "sialvsic@outlook.com", // sender address
    to: "sialvsic@gmail.com", // list of receivers
    subject: "welcome to our world 224", // Subject line
    text: "Am i good body?", // plain text body
    // html: "<b>Hello world?</b>", // html body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
