var thermostat = new Thermostat();

$(document).ready(function () {
  $('#temperature').text(thermostat.temperature);
  $('input.thermostat__control__up').click(function() {
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.temperature);
  });

  $('input.thermostat__control__down').click(function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temperature);
  });

  $('input.psmode').change(function () {
    if($('input.psmode').is(':checked'))
      thermostat.powerSaverOn();
    else
      thermostat.powerSaverOff();
  });
});
