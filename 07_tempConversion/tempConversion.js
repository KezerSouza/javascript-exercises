function convertToCelsius(temperature) {
  temperature = (temperature - 32) * 5/9;
  if(temperature % 1 != 0) temperature = Number(temperature.toFixed(1));

  return temperature;
}

const convertToFahrenheit = function(temperature) {
  temperature = temperature * 9/5 + 32;
  if(temperature % 1 != 0) temperature = Number(temperature.toFixed(1));

  return temperature;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
