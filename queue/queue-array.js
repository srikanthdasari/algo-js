/**
 * QUEUE - Using Arrays
 */

function Queue() {
    const queue = [];

    return {
        enqueue(x) {
            queue.unshift(x); // ADD Items to the begining of an array (FIFO)
        },
        dequeue() {
            if(queue.length === 0) {
                return undefined;
            }
            return queue.pop(); // REMOVE an item from the end of an array (FIFO)
        },
        peek() {
            if(queue.length === 0) {
                return undefined;
            }
            return queue[queue.length - 1]
        },
        get length(){
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0
        }

    }
}

module.exports = Queue;