/**
 * PRIORITY QUEUE with Array
 */

const queue = require('./../queue/queue-array');

function priorityQueue() {
    const highPriorityQueue = queue();
    const lowPriorityQueue = queue();

    return {
        enqueue(item, isHighPriority = false) {
            const q = isHighPriority ? highPriorityQueue : lowPriorityQueue;
            q.enqueue(item);
        },
        dequeue() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue();
            }
            return highPriorityQueue.dequeue();
        },
        peek() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }
            return lowPriorityQueue.peek();
        },
        get length() {
            return highPriorityQueue.length + lowPriorityQueue.length;
        },
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        }
    }
}

module.exports = priorityQueue;