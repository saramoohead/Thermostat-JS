var thermostat = new Thermostat();

$(document).ready(function () {
  $('.temperature').text(thermostat.temperature);
  $('input.up').click(function() {
    thermostat.increaseTemp();
    $('.temperature').text(thermostat.temperature);
  });

  $('input.down').click(function() {
    thermostat.decreaseTemp();
    $('.temperature').text(thermostat.temperature);
  });

  $('input.psmode').change(function () {
    if($('input.psmode').is(':checked'))
      thermostat.powerSaverOn();
    else
      thermostat.powerSaverOff();
  });
});
