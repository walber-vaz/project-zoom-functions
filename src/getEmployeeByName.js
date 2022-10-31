const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) return {};
  return employees.find((el) => el.firstName === employeeName || el.lastName === employeeName);
}

console.log(getEmployeeByName('Wishart'));
module.exports = getEmployeeByName;
