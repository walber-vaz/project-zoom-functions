const data = require('../data/zoo_data');

// const entrantsTest = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const childQtd = entrants.filter(({ age }) => age < 18).length;
  const adultsQtd = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const seniorsQtd = entrants.filter(({ age }) => age >= 50).length;

  return {
    child: childQtd,
    adult: adultsQtd,
    senior: seniorsQtd,
  };
}

function calculateEntry(entrants) {
  const { prices } = data;
  if (entrants === undefined || !entrants.length) return 0;

  const { child, adult, senior } = countEntrants(entrants);
  const calChild = child * prices.child;
  const calAdult = adult * prices.adult;
  const calSenior = senior * prices.senior;

  return calChild + calAdult + calSenior;
}

// console.log(countEntrants());
module.exports = { calculateEntry, countEntrants };
