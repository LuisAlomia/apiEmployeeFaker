const router = require('express').Router();
const controller = require('./employee.controller');

router.post('/', controller.EmployeeFaker);

module.exports = router;
