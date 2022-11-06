const data = require('../data/zoo_data');

const { species } = data;

// https://pt.stackoverflow.com/questions/16483/remover-elementos-repetido-dentro-de-um-array-em-javascript
const setLocation = () => {
  const locationAnimal = species.map(({ location }) => location);
  return [...new Set(locationAnimal)];
};

const namesResidents = (residents, filter = 'none') => {
  if (filter === 'male' || filter === 'female') {
    return residents.reduce((acc, { name, sex }) => {
      if (filter === sex) return [...acc, name];
      return acc;
    }, []);
  }
  return residents.reduce((acc, { name }) => [...acc, name], []);
};

const nameAnimalLocations = (position, filter = 'none') => {
  const namesAnimals = species.filter(({ location }) => location === position);
  if (filter === 'none') return namesAnimals.map((animal) => animal.name);
  const arrNamesResidents = namesAnimals
    .map(({ name, residents }) => ({ [name]: namesResidents(residents, filter) }));
  return arrNamesResidents;
};

const sortAnimals = (param) => {
  const obj = param;
  setLocation().forEach((loc) => param[loc].forEach(((name, indice) =>
    Object.keys(name)
      .forEach((specie) => {
        obj[loc][indice][specie] = param[loc][indice][specie].sort();
      }))));
  return obj;
};

const locationAnimal = (filter, sort) => {
  const obj = setLocation().reduce((acc, el) => {
    const objAnimals = { [el]: nameAnimalLocations(el, filter) };
    return { ...acc, ...objAnimals };
  }, {});
  if (sort) return sortAnimals(obj);
  return obj;
};

function getAnimalMap(options) {
  if (options === undefined) {
    return locationAnimal();
  }
  if (options.includeNames === undefined) {
    return locationAnimal();
  }
  if (options.sex !== undefined) {
    return locationAnimal(options.sex, options.sorted);
  }
  if (options.includeNames === true) {
    return locationAnimal('byName', options.sorted);
  }
}

// console.log(locationAnimal({ sex: 'female', sorted: true }));
module.exports = getAnimalMap;
