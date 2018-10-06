const Mongoose = require('../DBSchemas/schemas');
const ManagerSchema = Mongoose.model('VivaSchedule');

let ManagerController = function () {
    this.scheduleViva = (schedule) => {
        return new Promise((resolve,reject)=>{
            const viva = new ManagerSchema({
                batch:schedule.batch,
                specialization:schedule.specialization,
                scheduleDate:schedule.scheduleDate,
                allocationTime:schedule.allocationTime,
                endDate:schedule.endDate
            });

            viva.save().then(()=>{
                resolve({status:200,mesage:"Object added successfully",isSuccess:true})
            }).catch((error)=>{
                reject({status:500,error:error,isSuccess:false});
            })
        })
    },
    this.getVivaSchedule = ()=>{
        return new Promise((resolve,reject)=>{
            ManagerSchema.find().exec().then((data)=>{
                resolve({status:200,message:data,isSuccess:true});
            }).catch((error)=>{
                reject({status:500,message:error,isSuccess:false});
            })
        });
    }
}

module.exports = new ManagerController();