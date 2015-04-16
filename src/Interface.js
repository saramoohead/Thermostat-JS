var thermostat = new Thermostat();

$(document).ready(function () {
  $('.temperature').text(thermostat.temperature);
});
