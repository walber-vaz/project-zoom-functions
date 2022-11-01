const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployee = (nameEmployee) => {
  if (nameEmployee.name) {
    return employees.find(({ firstName, lastName, id }) =>
      [firstName, lastName].includes(nameEmployee.name || nameEmployee.id));
  }

  if (nameEmployee.id) return employees.find(({ id }) => id === nameEmployee.id);
};

const confirmEmployee = (name) => {
  const isError = getEmployee(name);
  if (!isError) throw new Error('Informações inválidas');
  const responsibility = species.filter((specie) => isError.responsibleFor.includes(specie.id));

  return {
    id: isError.id,
    fullName: `${isError.firstName} ${isError.lastName}`,
    species: responsibility.map((specie) => specie.name),
    locations: responsibility.map((specie) => specie.location),
  };
};

const getEmployeesCoverage = (name) => {
  if (!name) {
    const arrNameResponsability = [];
    employees.forEach((employee) => {
      const firstNameEmployee = {
        name: employee.firstName,
      };
      arrNameResponsability.push(confirmEmployee(firstNameEmployee));
    });
    return arrNameResponsability;
  }
  return confirmEmployee(name);
};

module.exports = getEmployeesCoverage;
