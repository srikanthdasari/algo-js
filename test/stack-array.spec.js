/**
 * Test Case for Stack using Array
 */

var expect = require('chai').expect;
var stack = require('./../stack/stack-array');

describe('stack()',function(){
    it('pushing the items to stack', function(){
        const s = stack();

        s.push(1);
        s.push(2);

        expect(s.length).to.be.equal(2);
        expect(s.peek()).to.be.equal(2);
    });

    it('pop the items from stack', function(){
        const s = stack();

        s.push('first');
        s.push('second');

        expect(s.length).to.be.equal(2);
        expect(s.peek()).to.be.equal('second');
        
        s.pop();

        expect(s.length).to.be.equal(1);
        expect(s.peek()).to.be.equal('first');

    });
})