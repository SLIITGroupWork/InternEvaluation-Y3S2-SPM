const Mongoose = require('../DBSchemas/schemas');
const UserSchema = Mongoose.model('User');

var UserController  = function () {
    this.add = function (userInstance) {
        return new Promise(function (resolve,reject) {
            const user = new UserSchema({
                FirstName:userInstance.FirstName,
                LastName:userInstance.LastName,
                BirthDay:userInstance.BirthDay
            })

            user.save().then(function () {
                resolve({status:200,message:'Object added successfully',isSuccess:true});
            }).catch(function (reason) {
                reject({status:500,message:"Error" + reason,isSuccess:false});
            })
        })
    }

    this.viewAll = function () {
        return new Promise(function (resolve,reject) {
            UserSchema.find().exec().then(function (value) {
                resolve({status:200,data:value,isSuccess:true});
            }).catch(function (reason) {
                reject({status:500,message:reason,isSuccess:false});
            })
        })
    }

    this.search = function (userID) {
        return new Promise(function (resolve,reject) {
            UserSchema.find({ID:userID}).exec().then(function (value) {
                resolve({status:200,data:value,isSuccess:true});
            }).catch(function (reason) {
                reject({status:500,message:reason,isSuccess:false});
            })
        })
    }
}

module.exports = new UserController();