
const mongoose = require('../DBSchemas/schemas');
const InternReportSchema = mongoose.model('InternReport');

class InternReportController {

    submitInternReport(internReportRequest) {
        return new Promise((resolve, reject) => {

            const internReportSchema = new InternReportSchema({
                studentId: 'IT16158764',
                ...internReportRequest.internReport
            });

            internReportSchema.save().then(internReport => {
                resolve({ status: 200, internReport });
            }).catch(error => {
                reject({ status: 500, message: error });
            });
        });
    }
}

module.exports = new InternReportController();