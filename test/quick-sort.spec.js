/**
 * Test Cases for Quick Sort
 */

var expect = require('chai').expect;
var quickSort = require('./../sorting/quickSort/quick-sort');

describe('quickSort()',function(){
    it('Should sort the given array using QuickSort',function(){
        expect(quickSort([14,33,27,10,36,19,42,44])).to.be.deep.equal([10,14,19,27,33,36,42,44]);
    })
})