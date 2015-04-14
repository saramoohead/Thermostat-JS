describe('Thermostat', function() {

  var thermostat;

  describe('Starts at', function() {

    it('20 degrees', function() {
      thermostat = new Thermostat();
      expect(temperature).toBe(20);
    });

  });

});
