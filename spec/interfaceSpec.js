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

    it('a decreased temperature when the up arrow is clicked', function () {
      $('input.down').click();
      expect($('.temperature')).toContainText('19');
    });

  });

});
