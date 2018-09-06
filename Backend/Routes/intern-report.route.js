
const router = require('express').Router();
const controller = require('../Controllers/intern-report.controller');

router.post('/submit-intern-report', (request, response) => {

    controller.submitInternReport(request.body).then(internReportResponse => {
        internReportResponse.isSuccess = (internReportResponse.status < 400 && internReportResponse.status > 100) ? true : false;
        response.status(internReportResponse.status).send(internReportResponse);
    }).catch(err => {
        response.isSuccess = false;
        response.status(err.status ? err.status : 500).send(err);
    });
});

router.get('/submit-intern-report', (request, response) => {
    response.status(200).send('Hello');
});

module.exports = router;