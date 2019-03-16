/**
 * Unit test for Insertion Sort
 */

var expect = require('chai').expect;
var insertionSort = require('../sorting/insertionSort/insertion-sort');

describe("insertionSort()", function(){
    it("Should sort the array using insertion sort",function(){
        expect(insertionSort([14,33,27,10,36,19,42,44])).to.be.deep.equal([10,14,19,27,33,36,42,44]);
    })
})