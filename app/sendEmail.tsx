import nodemailer from 'nodemailer'
// import 'setimmediate';

const transporter = nodemailer.createTransport({
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: 'support@autopartsquare.com',
    pass: 'ypofbomnpsgapdey',
  },
})

// setImmediate(() => console.log("AAA"));

export function sendContact(name: string, email: string, subject: string, message: string) {
  const htmlBody = "<table width='100%' border='0' cellspacing='3' cellpadding='3' bgcolor='#F9F9F9'><tbody><tr><td colspan='4' align='center' bgcolor='#CCCCCC'><strong>You Have Received Enquiry. Following are the details</strong></td></tr>" +
    "<tr><td> Name: </td><td>" + name + "</td> </tr>" +
    "<tr><td> Email: </td><td><a href='mailto:" + email + "' rel='noreferrer' target='_blank'>" + email + "</a></td></tr>" +
    "<tr><td> Subject: </td><td>" + subject + "</td> </tr>" +
    "<tr> <td> Message: </td><td>" + message + "</td></tr>" +
    "</tbody></table>";

  const mailData = {
    from: 'UsedAutoLeads <support@autopartsquare.com>',
    // to: 'austin.tech.space@gmail.com',
    to: 'a2zautoleads@gmail.com',
    replyTo: email,
    subject: "UsedAutoPartsPro Contact",
    html: htmlBody
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        reject(error);
        // console.log(error);
      } else {
        resolve(info.response);
        // console.log('Email sent successfully:', info.response);
      }
    })
  })
}
export function sendEmail(year: string, engine_size: string, make: string,
  model: string, transmission: string, part: string, name: string,
  email: string, phone: string, zip_code: string) {

  // console.log("Hello", year, engine_size, make, model, transmission, part, name, email, phone, zip_code);

  const htmlBody = "<table width='100%' border='0' cellspacing='3' cellpadding='3' bgcolor='#F9F9F9'><tbody><tr><td colspan='4' align='center' bgcolor='#CCCCCC'><strong>You Have Received Enquiry. Following are the details</strong></td></tr>" +
    "<tr><td> Name: </td><td>" + name + "</td> </tr>" +
    "<tr><td> Email: </td><td><a href='mailto:" + email + "' rel='noreferrer' target='_blank'>" + email + "</a></td></tr>" +
    "<tr><td> Phone Number: </td><td>" + phone + "</td> </tr>" +
    "<tr> <td> Zip code: </td><td>" + zip_code + "</td></tr>" +
    "<tr><td> Make name: </td><td>" + make + "</td></tr>" +
    "<tr><td> Model name: </td><td>" + model + "</td></tr>" +
    "<tr><td> Make year: </td><td>" + year + "</td></tr>" +
    "<tr><td>Engine part: </td><td>" + part + "</td> </tr>" +
    "<tr><td> Engine size: </td><td>" + engine_size + "</td></tr>" +
    "<tr><td> Transmission select: </td><td>" + transmission + "</td></tr>" +
    "</tbody></table>";

  const mailData = {
    from: 'UsedAutoLeads <sales@autopartsquare.com>',
    // to: 'austin.tech.space@gmail.com',
    to: 'a2zautoleads@gmail.com',
    replyTo: email,
    subject: "UAP - " + year + " - " + make + " - " + part + "- " + zip_code,
    html: htmlBody
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        reject(error);
        // console.log(error);
      } else {
        resolve(info.response);
        // console.log('Email sent successfully:', info.response);
      }
    })
  })

}
