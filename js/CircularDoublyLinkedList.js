

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
// Methods that are used to set the nodes to their next and previous values. Only works if they return something because javascript.
    skipBackwards = function (node) {
        return node.previous;
    }

    skipForwards = function (node) {
        return node.next;
    }

    traverseTo(traverseTo, node) {
        // Counter will be used to control the iterations of our while loop.
        let counter = 0;
        // If traverseTo is greater than 0, we traverse the wheel clockwise by skipping the node forwards.
        if(traverseTo > 0) {
            while(counter < traverseTo) {
                node = this.skipForwards(node);
                counter++;
            }
            // Return the node. Required in javascript for some reason. lol
            return node;
        } else {
            // If traverseTo is *less than* 0, we traverse the wheel counterclockwise.
            // This is done by getting the absolute value of traverseTo and skipping the node backwards.
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
        while(colorName.valueOf() !== (node.element.codeName).valueOf()) {
            node = this.skipForwards(node);
        }
        return node;
    }

    //Get the indexOf item
    indexOf = function(elm){
        let current = this.head,
            index = -1;

        //If element found then return its position
        while(current){
            if(elm === current.element.colorCode) {
                return ++index;
            }

            index++;
            current = current.next;
        }

        //Else return -1
        return -1;
    }

    delete = function (elm) {
        return this.removeAt(this.indexOf(elm));
    };

    getElementAt = function(index) {
        if(index >= 0){
            let node = this.head;
            for(let i = 0; i < index && node != null; i++){
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    removeAt = function (index) {
        if(index >= 0 && index < length){
            let current = this.head;

            //Remove from head
            if(index === 0){
                if(length === 1){
                    this.head = undefined;
                }else{
                    const removed = this.head;
                    current = this.getElementAt(length - 1);
                    this.head = this.head.next;
                    current.next = this.head;
                    current = removed;
                }
            }else{
                //Remove at given index (middle or end)
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }

            if(this.head){
                //Mark head's prev element as last element
                this.head.prev = this.tail;

                //Mark tail's next element as first element
                this.tail.next = this.head;
            }

            length--;
            return current.element;
        }
        return undefined;
    }




}