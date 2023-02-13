const addDays = require("date-fns/addDays");

const dateAfterXDays = (days) => {
  const date = addDays(new Date(2020, 7, 22), days);

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

module.exports = dateAfterXDays;
