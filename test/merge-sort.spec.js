/**
 * Tests for Merge Sort
 */

var expect = require('chai').expect;
var mergeSort = require('./../sorting/mergesort/merge-sort');

describe("mergeSort()",function(){
    it("Should sort the given array usng the Merge Sort",function(){
        expect(mergeSort([14,33,27,10,36,19,42,44])).to.be.deep.equal([10,14,19,27,33,36,42,44]);
    })
})