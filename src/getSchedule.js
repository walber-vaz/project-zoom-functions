const data = require('../data/zoo_data');

const { species, hours } = data;

const getNameSpecies = (day) => {
  const exhibition = species.filter(({ availability }) => availability.includes(day));
  return exhibition.map((animal) => animal.name);
};

const getDaysAll = () => {
  const obj = {};
  const daysWeek = Object.keys(hours);
  daysWeek.forEach((day) => {
    if (day === 'Monday') {
      obj.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      obj[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getNameSpecies(day),
      };
    }
  });
  return obj;
};

const getDaysWeek = (day) => {
  if (day === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  const daysOfWeek = Object.keys(hours);
  if (daysOfWeek.includes(day)) {
    return { [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: getNameSpecies(day),
    },
    };
  }
  return day;
};

function getSchedule(scheduleTarget) {
  const dayWeek = getDaysWeek(scheduleTarget);
  if (typeof dayWeek === 'object') return dayWeek;
  const result = species.find(({ name }) => name === scheduleTarget);
  if (scheduleTarget === undefined || result === undefined) return getDaysAll();
  return result.availability;
}

module.exports = getSchedule;
