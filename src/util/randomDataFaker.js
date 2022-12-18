const faker = require('@faker-js/faker');
const random = require('./random');

const randomData = () => {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    let newEmployee = {
      uuid: faker.faker.datatype.uuid(),
      name: faker.faker.name.fullName(),
      email: faker.faker.internet.email(),
      age: faker.faker.datatype.number({ min: 18, max: 75 }),
      phone: faker.faker.phone.number(),
      position: faker.faker.name.jobTitle(),
      branchOffice: random(['BranchOne', 'BranchTwo', 'BranchTree']),
      branchCity: random(['CityOne', 'CityTwo']),
      salary: faker.faker.finance.amount(1, 9, 3, '$'),
    };

    arr.push(newEmployee);
  }

  return arr;
};

module.exports = randomData;
