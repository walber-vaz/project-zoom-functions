// deno-lint-ignore-file
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

function getOldestFromFirstSpecies(idEmployees) {
  const getEmployee = employees
    .find(({ id }) => id === idEmployees).responsibleFor[0];

  const getAnimal = species
    .find(({ id }) => id === getEmployee).residents
    .sort((a, b) => b.age - a.age)[0];
  return [getAnimal.name, getAnimal.sex, getAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
