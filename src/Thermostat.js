var Thermostat = function() {
  this.temperature = 20;
  this.powerSaver = true;
};

Thermostat.prototype.increaseTemp = function() {
  if (this.powerSaver === true && this.temperature < 25) {
    this.temperature++;
  }
  if (this.powerSaver === false && this.temperature < 32) {
    this.temperature++;
  }
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temperature > 10) this.temperature--;
};

Thermostat.prototype.powerSaverOn = function() {
  this.powerSaver = true;
};

Thermostat.prototype.powerSaverOff = function() {
  this.powerSaver = false;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};
