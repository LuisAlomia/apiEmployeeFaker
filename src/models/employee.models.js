const { Schema, model } = require('mongoose');

const Empployee = new Schema({
  uuid: { type: String },
  name: { type: String },
  email: { type: String, unique: true },
  age: { type: Number },
  phone: { type: String },
  position: { type: String },
  branchOffice: {
    type: String,
    enum: ['BranchOne', 'BranchTwo', 'BranchTree'],
  },
  branchCity: { type: String, enum: ['CityOne', 'CityTwo'] },
  salary: { type: String },
});

const EmployeeModel = model('empployee', Empployee);

module.exports = EmployeeModel;
