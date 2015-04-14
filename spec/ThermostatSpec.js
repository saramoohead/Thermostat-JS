describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Starts at', function() {

    it('20 degrees', function() {
      expect(thermostat.defaultTemperature).toBe(20);
    });

  });

  describe('Can', function() {

    it('increase temperature', function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toBe(1);
    });

  });

});
