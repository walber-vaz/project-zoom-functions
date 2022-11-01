const data = require('../data/zoo_data');

const { employees, species } = data;

const getSpecies = (name) => {
  const employeeResponsible = name.responsibleFor;
  const isSpecieResponsible = species.filter(({ id }) => employeeResponsible.includes(id));

  return isSpecieResponsible;
};

const getSpeciesName = (specie) => specie.map(({ name }) => name);
const getSpeciesLocation = (loc) => loc.map(({ location }) => location);

const getInfoEmployees = (name) => {
  const getEmployee = employees.find(({ firstName, lastName, id }) =>
    firstName === name || lastName === name || id === name);

  if (getEmployee === undefined) throw new Error('Informações inválidas');

  const getEmployeeIsResponsible = getSpecies(getEmployee);

  return {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: getSpeciesName(getEmployeeIsResponsible),
    locations: getSpeciesLocation(getEmployeeIsResponsible),
  };
};

const getAllEmployees = () => employees.map(({ firstName }) => getInfoEmployees(firstName));

const getEmployeesCoverage = (param) => {
  if (param === undefined) return getAllEmployees();
  if (param.name) return getInfoEmployees(param.name);

  return getInfoEmployees(param.id);
};

module.exports = getEmployeesCoverage;
