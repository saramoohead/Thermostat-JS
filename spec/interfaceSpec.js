describe('Interface', function() {

  beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '../';
      loadFixtures('index.html');
  });

  describe('can display', function() {

    it('default temperature', function() {
      expect($('.temperature')).toContainText('20');
    });

    it('an increased temperature when the up arrow is clicked', function () {
      $('input.up').click();
      expect($('.temperature')).toContainText('21');
    });

    it('a decreased temperature when the down arrow is clicked', function () {
      $('input.down').click();
      expect($('.temperature')).toContainText('19');
    });

    it('has a maximum of 25 when power save mode is on', function () {
      expect($('input.psmode')).toBeChecked();
      for(var i=0; i<7; i++) {
        $('input.up').click();
      }
      expect($('.temperature')).toContainText('25');
    });

    it('has a maximum of 32 when power save mode is off', function() {
      $('input.psmode').click();
      expect($('input.psmode')).not.toBeChecked();
      for(var i=0; i<15; i++) {
        $('input.up').click();
      }
      expect($('.temperature')).toContainText('32');
    });

  });

});
