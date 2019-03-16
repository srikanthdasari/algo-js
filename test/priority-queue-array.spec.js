/**
 * Tests for Priority Queue - using Array
 */

var expect = require('chai').expect;
var priorityQueue = require('./../priority-queue/priority-queue-array');

describe('priorityQueue()',function(){
    it('Enqueue priority task',function(){
        const q = priorityQueue();
        q.enqueue('first task');
        q.enqueue('second task');

        expect(q.length).to.be.equal(2);
        expect(q.peek()).to.be.equal('first task');

        q.enqueue('emergency task',true);

        expect(q.length).to.be.equal(3);
        expect(q.peek()).to.be.equal('emergency task');
    });

    it('Dequeue priority task',function(){
        const q = priorityQueue();
        q.enqueue('first task');
        q.enqueue('second task');

        expect(q.length).to.be.equal(2);
        expect(q.peek()).to.be.equal('first task');

        q.enqueue('emergency task',true);

        expect(q.length).to.be.equal(3);
        expect(q.peek()).to.be.equal('emergency task');

        
        q.dequeue();

        expect(q.length).to.be.equal(2);
        expect(q.peek()).to.be.equal('first task');
    })
});