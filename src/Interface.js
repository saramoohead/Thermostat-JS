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

  $('input#psmode').click(function () {
      if(thermostat.psStatus === 'On') {
        thermostat.powerSaverOff();
      } else {
        thermostat.powerSaverOn();
      }
      $('#psstatus').text(thermostat.psStatus);
  });

  $('#psstatus').text(thermostat.psStatus);

});
