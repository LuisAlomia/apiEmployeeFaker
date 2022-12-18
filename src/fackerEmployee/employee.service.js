const EmployeeModel = require('../models/employee.models');
const randomData = require('../util/randomDataFaker');

const EmployeeFaker = async () => {
  const data = await EmployeeModel.create(randomData());
  return data;
};

module.exports = { EmployeeFaker };
