var nodemailer = require('nodemailer');
var mongoose = require('../DBSchemas/schemas');
const activitySchema = mongoose.model('ActivityDummy');

let supervisorController = function () {
    this.sendMail = function (body) {
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
                to: body.senderEmail,
                subject: body.emailSubject,
                html: body.emailBody
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    reject({status:500,message:error,isSuccess:false});
                } else {
                    resolve({status:200,message:"Message sent :" + info.response,isSuccess:true});
                }
            });
        })
    },
    this.getDummyActivity = function (studentID) {
        return new Promise(function (resolve,reject) {
            activitySchema.find({studentID:studentID}).exec().then(function (item) {
                resolve({status:200,data:item,isSuccess:true});
            }).catch(function (error) {
                reject({status:500,error:"error occured in server",isSuccess:false});
            })
        })
    },
    this.saveDummyActivity = function (body) {
        return new Promise(function (resolve, reject) {
            const activity = new activitySchema(
                {
                    studentID:body.studentID,
                    activity:body.activity,
                    from:body.activity,
                    to:body.to
                }
            )

            activity.save().then(function () {
                resolve({status:200,message:"Object added successfully",isSuccess:true});
            }).catch(function (error) {
                reject({status:500,message:error,isSuccess:false});
            })
        });
    }
}

module.exports = new supervisorController();