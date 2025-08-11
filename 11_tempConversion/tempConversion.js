const convertToCelsius = function(fahrTemp) {


  return Number(((fahrTemp - 32) * 5/9).toFixed(1));

};

const convertToFahrenheit = function(celsTemp) {

  return Number((celsTemp * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
