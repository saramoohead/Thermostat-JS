describe('Interface', function() {

  describe('can display', function() {

    it('default temperature', function() {
      expect('.temperature').toContainText('20');
    });

  });

});
