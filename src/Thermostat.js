var Thermostat = function() {
  this.defaultTemperature = 20;
  this.temperature = 0;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature++;
};
