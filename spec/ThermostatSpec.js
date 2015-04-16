describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('Starts', function() {

    it('at 20 degrees', function() {
      expect(thermostat.temperature).toBe(20);
    });

    it('with power saver mode on', function() {
      expect(thermostat.powerSaver).toBe(true);
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

    it('turn power saver mode on', function() {
      thermostat.powerSaverOn();
      expect(thermostat.powerSaver).toBe(true);
    });

    it('turn power saver mode off', function() {
      thermostat.powerSaverOn();
      thermostat.powerSaverOff();
      expect(thermostat.powerSaver).toBe(false);
    });

    it('be reset to 20 degrees by hitting reset', function() {
      thermostat.increaseTemp();
      thermostat.resetTemp();
      expect(thermostat.temperature).toBe(20);
    });

  });

  describe('Cannot', function() {

    it('drop below 10 degrees', function() {
      for (i = 0; i < 15; i++) {
        thermostat.decreaseTemp();
      };
      expect(thermostat.temperature).toBe(10);
    });

    it('exceed 25 degrees whilst power saver mode is on', function() {
      for (var i = 0; i < 15; i++) {
        thermostat.increaseTemp();
      };

      expect(thermostat.temperature).toBe(25);
    });

    it('exceed 32 degrees whilst power saver mode is off', function() {
      thermostat.powerSaver = false
      for (var i = 0; i < 15; i++) {
        thermostat.increaseTemp();
      };
      expect(thermostat.temperature).toBe(32);
    });

  });

});
