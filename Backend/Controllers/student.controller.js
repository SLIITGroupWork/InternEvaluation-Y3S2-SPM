const Mongoose = require('../DBSchemas/schemas');
const StudentSchema = Mongoose.model('Student');

const StudentController  = function () {
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            const student = new StudentSchema({
                studentID: data.studentID,
                name: data.name,
                address: data.address,
                homePhone: data.homePhone,
                mobilePhone: data.mobilePhone,
                email: data.email,
                semester: data.semester,
                year: data.year,
                cgpa: data.cgpa
            });
            student.save().then(() => {
                resolve({status: 200, message: "Added new student"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    };

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            StudentSchema.update({studentID: id}, data).then(() => {
                resolve({status: 200, message: "Updated student"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            StudentSchema.find().populate('Student').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            StudentSchema.find({_id: id}).populate('Student').exec().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    };

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            StudentSchema.remove({studentID: id}).then(() => {
                resolve({status: 200, message: "Removed student"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
    };

module.exports = new StudentController();