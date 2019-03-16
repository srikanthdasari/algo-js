/**
 * Tests for Bubblesort
 */
var expect = require('chai').expect;
var bubbleSort = require('./../sorting/bubblesort/bubble-sort');

describe("bubbleSort()",function(){
    it("Should Sort the Array using BubbleSort",function(){
        expect(bubbleSort([3,5,3,6,7,2,1])).to.be.deep.equal([1,2,3,3,5,6,7]);
    });
});