/**
 * Tests for Selection Sort
 */

var expect = require('chai').expect;
var selectionSort = require('./../sorting/selectionsort/selection-sort');
var selectionSort2 = require('./../sorting/selectionsort/selection-sort2');
describe("selectionSort()",function(){
    it("Should sort the given array using Selection Sort",function(){
        expect(selectionSort([14,33,27,10,36,19,42,44])).to.be.deep.equal([10,14,19,27,33,36,42,44]);
    })
})

describe("selectionSort2()",function(){
    it("Should sort the given array using Selection Sort",function(){
        expect(selectionSort2([14,33,27,10,36,19,42,44])).to.be.deep.equal([10,14,19,27,33,36,42,44]);
    })
})