const nodemailer = require("nodemailer");

const sendNotice = ({ details }) => {
  const { data, emails } = details;
  const { title, description } = data;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "cr.csejnu@gmail.com",
      pass: process.env.EMAIl_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let htmlBodyGeneral = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email with Background Image</title>
   
</head>
<body >
    <div class="content">
     <img
      src="https://i.ibb.co/NCgZVJJ/Untitled-design-1.png"
      style="width: 100%; height: 100%; padding: 10px 0px"
      alt="Banner"
    />   
       <p> ${description}</p>
     </br>
      <p>Regards</p>
      <small>CR, CSE JNU,Batch-Ambiguity</small>
    </div>
</body>
</html>

`;
  const options = {
    from: "cr.csejnu@gmail.com",
    to: emails,
    subject: `${subject}`,
    html: htmlBodyGeneral,
  };
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendNotice;
