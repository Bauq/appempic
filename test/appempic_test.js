'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('should be Brian', function () {
    appempic.getName().should.equal('Brian');
  });

	it('should be Uribe', function () {
	    appempic.getLastName().should.equal('Ure');
	  });
});
