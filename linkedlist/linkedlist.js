/***
 * Linked list usinf array
 */

var Node = require('./../common/node'); 

function LinkedList() {
    return {
        head:null,
        tail:null,
        length:0,

        push(value) {
            const node = Node(value);

            if(this.head === null ) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;
            }

            this.tail.next = node;
            this.tail = node;
            this.length++;

            return node;
        },
        pop() {
            if(this.isEmpty()) {
                return null;
            }

            const node = this.tail;

            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }

            let current = this.head;

            let penultimate;
            while(current) {
                if(current.next === this.tail) {
                    penultimate = current;
                    break;
                }
                current = current.next
            }

            penultimate.next=null;
            this.tail = penultimate;
            this.length--;

            return node;
        },

        get(index) {
            if(index < 0 || index > this.length - 1) {
                return null;
            }

            if(index === 0) {
                return this.head;
            }

            let current = this.head;
            let i = 0;

            while(i < index) {
                i++;
                current = current.next;
            }

            return current;
        },

        delete(index) {
            if(index < 0 || )
        }
    }
}
