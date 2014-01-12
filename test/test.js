var request = require('superagent');
var assert = require('assert');

describe('render page', function () {

    it('should start the web page', function (done) {
        
        request('http://localhost:3000', function (res) {

            // assert correct status code
            assert.ok(200 == res.status);
            done();

        });
    });

});