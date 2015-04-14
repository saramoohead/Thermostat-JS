describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Starts at', function() {

    it('20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });

  });

  describe('Can', function() {

    it('increase temperature', function() {
      thermostat.increaseTemp();
      expect(thermostat.temperature).toBe(21);
    });

    it('decrease temperature', function() {
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toBe(19);
    });

  });

  describe('Cannot', function() {

    it('cannot drop below 10 degrees', function() {
      for (var i = 0; i < 15 ; i++) {
        thermostat.decreaseTemp();
      }
      expect(thermostat.temperature).toBe(10);
    });

  });

});
