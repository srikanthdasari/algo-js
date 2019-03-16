/**
 * Test Case for QUEUE - ARAY
 */

var except = require('chai').expect;
var queue = require('./../queue/queue-array');

describe('queue()',function(){

    it('Adding the Item to queue',function(){
        const q = queue();
        q.enqueue("first");
        except(q.length).to.be.equal(1);
        except(q.peek()).to.be.deep.equal('first');
    })

    it('Adding multiple Item to queue',function(){
        const q = queue();
        q.enqueue("first");
        q.enqueue("second");
        q.enqueue("third");
        except(q.length).to.be.equal(3);
        except(q.peek()).to.be.deep.equal('first');
    })

    it('Deleting the Item to queue',function(){
        const q = queue();
        q.enqueue("first");
        q.enqueue("second");
        q.enqueue("third");
        
        except(q.length).to.be.equal(3);
        except(q.peek()).to.be.deep.equal('first');

        q.dequeue();

        except(q.length).to.be.equal(2);
        except(q.peek()).to.be.deep.equal('second');

        q.dequeue();

        except(q.length).to.be.equal(1);
        except(q.peek()).to.be.deep.equal('third');

        q.dequeue();

        except(q.length).to.be.equal(0);
        except(q.peek()).to.be.deep.equal(undefined);
        except(q.isEmpty()).to.be.true;
    })
})