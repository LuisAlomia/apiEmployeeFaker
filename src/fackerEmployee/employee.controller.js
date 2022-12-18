const service = require('./employee.service');

const EmployeeFaker = (req, resp) => {
  service
    .EmployeeFaker()
    .then((data) => resp.status(201).json(data))
    .catch((err) => resp.status(400).json(err));
};

module.exports = { EmployeeFaker };
