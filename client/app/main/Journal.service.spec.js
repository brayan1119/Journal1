'use strict';

describe('Service: Journal', function () {

  // load the service's module
  beforeEach(module('journalApp'));

  // instantiate service
  var Journal;
  beforeEach(inject(function (_Journal_) {
    Journal = _Journal_;
  }));

  it('should do something', function () {
    expect(!!Journal).toBe(true);
  });

});
