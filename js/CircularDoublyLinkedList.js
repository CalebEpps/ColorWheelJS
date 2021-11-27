

// ES6 Class Based Implementation of a CDLL
// Define Node class, used below.

class Node {
    constructor(element, next = null, previous = null) {
        this.element = element;
        this.next = next;
        this.previous = previous;
    }
}
// Define CDLL Class w/ Methods
class circularLinkedListClass {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
// function for adding an element to the CDLL. Relatively Straightforward
    add = function(element) {
        let node = new Node(element),
            current = this.head,
            previous;

            if(!this.head) {
                this.head = node;
                this.tail = node;
            } else {
                node.previous = this.tail;
                this.tail.next = node;
                this.tail = node;
            }
            this.head.previous = this.tail;
            this.tail.next = this.head;
            this.length++;
    }
// Methods that are used to set the nodes to their next and previous values. Only works if they return something.
    skipBackwards = function (node) {
        return node.previous;
    }

    skipForwards = function (node) {
        return node.next;
    }
// This method is confirmed working.
    traverseTo(traverseTo, node) {
        let counter = 0;
        if(traverseTo > 0) {
            while(counter < traverseTo) {
                node = this.skipForwards(node);
                counter++;
            }
            return node;
        } else {
            traverseTo = Math.abs(traverseTo);
            while(counter < traverseTo) {
                node = this.skipBackwards(node);
                counter++;
            }
            return node;
        }
        return node;
    }
// This function is currently unused and untested, but it should work.
    traverseToByName(colorName, node) {
        while(colorName.valueOf() != (node.element.colorName).valueOf()) {
            node = this.skipForwards(node);
            console.log(node.element.colorName);
        }
        return node;
    }


}