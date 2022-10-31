const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getNameAge = species.find((specie) => specie.name === animal);
  /**
   * @documents => MDN
   * O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
   */
  return getNameAge.residents.every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));
// console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
