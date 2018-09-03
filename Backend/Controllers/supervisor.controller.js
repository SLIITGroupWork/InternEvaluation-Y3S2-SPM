var nodemailer = require('nodemailer');

let supervisorController = function () {
    this.sendMail = function (senderEmail) {
        return new Promise(function (resolve, reject) {
            var transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'ravinduta@gmail.com',
                    pass: 'elidwivznfjguhaa'
                }
            });

            var mailOptions = {
                from: 'ravinduta@gmail.com',
                to: senderEmail,
                subject: 'Sending Email using Node.js',
                text: 'That was easy!'
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    reject({status:500,message:error});
                } else {
                    resolve({status:200,message:"Message sent :" + info.response});
                }
            });
        })
    }
}

module.exports = new supervisorController();