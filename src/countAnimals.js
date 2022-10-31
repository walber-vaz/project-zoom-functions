const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (animal === undefined) {
    return species.reduce((acc, el) => {
      acc[el.name] = el.residents.length;
      return acc;
    }, {});
  }
  const getSpecie = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.sex) {
    return getSpecie.filter((specie) => specie.sex === animal.sex).length;
  }
  return getSpecie.length;
}

console.log(countAnimals());
module.exports = countAnimals;
