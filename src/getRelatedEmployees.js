const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const getIdManagers = employees.some((employee) => employee.managers.includes(id));
  return getIdManagers;
}

function getRelatedEmployees(managerId) {
  const { employees } = data;
  if (isManager(managerId)) {
    const filterId = employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
    return filterId;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
