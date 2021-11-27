

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

class Color {
    constructor(colorName, colorCode) {
        this.colorName = colorName;
        this.colorCode = colorCode;
    }
}


// THIS IS **NOT** all of the colors nor are they correct. This is just a sample
// CDLL I made up to test the CDLL functions. Similar in Syntax to Java Implementation
let myClass = new circularLinkedListClass();

myClass.add(new Color("Red Orange", "#FD5308"));
myClass.add(new Color("Orange", "#FB9902"));
myClass.add(new Color("Light Orange", "#F9BC02"));
myClass.add(new Color("Yellow", "#FFFE32"));
myClass.add(new Color("Lime Green", "#D0E92B"));
myClass.add(new Color("Green", "#66B132"));
myClass.add(new Color("Light Blue", "#0291CB"));
myClass.add(new Color("Blue", "#0247FE"));
myClass.add(new Color("Violet", "#3E01A4"));
myClass.add(new Color("Purple", "#8601B0"));
myClass.add(new Color("Magenta", "#A7194B"));
myClass.add(new Color("Red", "#FE2712"));

// Initialize all of the colors so they aren't sitting at null.
let currentColor = myClass.head;
let complementaryColor = myClass.traverseTo(6, currentColor);
let analogousOne = myClass.traverseTo(1,currentColor);
let analogousTwo = myClass.traverseTo(-1,currentColor);
let triadicOne = myClass.traverseTo(4,currentColor);
let triadicTwo = myClass.traverseTo(-4,currentColor);
let supplementaryOne = myClass.traverseTo(3,currentColor);
let supplementaryTwo = myClass.traverseTo(-3,currentColor);

// On Click functionality for our buttons.
// Color name is passed from HTML, used to traverse the CDLL, and display the colors to the user.
let onColorClick = function(colorName) {
    // console Log for viewing the color name. Testing Purposes.
    console.log(colorName);
    // Set the colors to the appropriate ones
    currentColor = myClass.traverseToByName(colorName, currentColor);
    let idCurrentColor = document.getElementById("ColorToChange");
    // Console Log for Testing Purposes
    console.log(currentColor.element.colorName);

    complementaryColor = myClass.traverseTo(6, currentColor);
    let idCompColor = document.getElementById("Complementary");

    analogousOne = myClass.traverseTo(1, currentColor);
    let idAnalOne = document.getElementById("AnalogousOne");

    analogousTwo = myClass.traverseTo(-1, currentColor);
    let idAnalTwo = document.getElementById("AnalogousTwo");

    triadicOne = myClass.traverseTo(4,currentColor);
    let idTriOne = document.getElementById("TriadicOne");

    triadicTwo = myClass.traverseTo(-4,currentColor);
    let idTriTwo = document.getElementById("TriadicTwo");

    supplementaryOne = myClass.traverseTo(3,currentColor);
    let idSupOne = document.getElementById("SupplementaryOne");

    supplementaryTwo = myClass.traverseTo(-3,currentColor);
    let idSupTwo = document.getElementById("SupplementaryTwo");

    idCurrentColor.innerHTML = currentColor.element.colorName;
    idCurrentColor.style.color = currentColor.element.colorCode;
    //idCurrentColor.style.fontSize = "x-large";

    idCompColor.innerHTML = complementaryColor.element.colorName;
    idCompColor.style.color = complementaryColor.element.colorCode;
    //idCompColor.style.fontSize = "x-large";
    // Start of Analogous Colors
    document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
    idAnalOne.innerHTML = analogousOne.element.colorName;
    //idAnalOne.style.fontSize = "x-large";
    idAnalOne.style.color = analogousOne.element.colorCode;

    document.getElementById("And").innerHTML = " and ";

    idAnalTwo.innerHTML = analogousTwo.element.colorName;
    //idAnalTwo.style.fontSize = "x-large";
    idAnalTwo.style.color = analogousTwo.element.colorCode;
    // End of Analogous Colors

    // Start of Triadic Colors
    document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
    idTriOne.innerHTML = triadicOne.element.colorName;
    //idTriOne.style.fontSize = "x-large";
    idTriOne.style.color = triadicOne.element.colorCode;

    document.getElementById("AndTriadic").innerHTML = " and ";

    idTriTwo.innerHTML = triadicTwo.element.colorName;
    //idTriTwo.style.fontSize = "x-large";
    idTriTwo.style.color = triadicTwo.element.colorCode;
    // End of Triadic Colors

    document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";
    idSupOne.innerHTML = supplementaryOne.element.colorName;
   
    idSupOne.style.color = supplementaryOne.element.colorCode;

    document.getElementById("AndSupplementary").innerHTML = " and ";

    idSupTwo.innerHTML = supplementaryTwo.element.colorName;
    
    idSupTwo.style.color = supplementaryTwo.element.colorCode;
}