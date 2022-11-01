const data = require('../data/zoo_data');

const { species } = data;

// https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript
// const getLocation = () => {
//   const mapLocation = species.map(({ location }) => location);
//   return [...new Set(mapLocation)];
// };

const filterAnimal = (loc) => species
  .filter((specie) => specie.location === loc)
  .map(({ name }) => name);

// const namesAnimals = () => species
//   .filter((specie) => specie.residents)
//   .map(({ residents }) => residents.map((obj) => obj.name));

const getDefaultReturn = () => species.reduce((acc, el) => {
  acc[el.location] = filterAnimal(el.location);
  return acc;
}, {});

function getAnimalMap(options) {
  if (options === undefined) return getDefaultReturn();
  if (options.sex) return getDefaultReturn();
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
