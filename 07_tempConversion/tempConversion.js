const convertToCelsius = function(temperatureFar) {
  let celsius = (5/9)* (temperatureFar - 32);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temperatureCel) {
  let fahrenheit = (temperatureCel *1.8) + 32;
  return parseFloat(fahrenheit.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
