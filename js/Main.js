/*
Quick Access Shorthands:
document.querySelector('#ColorSelector').jscolor <-- Gets the jscolor instance from the HTML
 */

class Color {
    constructor(colorName, colorCode) {
        this.colorName = colorName;
        this.colorCode = colorCode;
    }
}

// THIS IS **NOT** all of the colors nor are they correct. This is just a sample
// CDLL I made up to test the CDLL functions. Similar in Syntax to Java Implementation
let wheel = new circularLinkedListClass();

wheel.add(new Color("Red Orange", "#FD5308"));
wheel.add(new Color("Orange", "#FB9902"));
wheel.add(new Color("Light Orange", "#F9BC02"));
wheel.add(new Color("Yellow", "#FFFE32"));
wheel.add(new Color("Lime Green", "#D0E92B"));
wheel.add(new Color("Green", "#66B132"));
wheel.add(new Color("Light Blue", "#0291CB"));
wheel.add(new Color("Blue", "#0247FE"));
wheel.add(new Color("Violet", "#3E01A4"));
wheel.add(new Color("Purple", "#8601B0"));
wheel.add(new Color("Magenta", "#A7194B"));
wheel.add(new Color("Red", "#FE2712"));

// Initialize all of the colors so they aren't sitting at null.
let currentColor = wheel.head;
let complementaryColor = wheel.traverseTo(6, currentColor);
let analogousOne = wheel.traverseTo(1,currentColor);
let analogousTwo = wheel.traverseTo(-1,currentColor);
let triadicOne = wheel.traverseTo(4,currentColor);
let triadicTwo = wheel.traverseTo(-4,currentColor);
let supplementaryOne = wheel.traverseTo(3,currentColor);
let supplementaryTwo = wheel.traverseTo(-3,currentColor);

// On Click functionality for our buttons.
// Color name is passed from HTML, used to traverse the CDLL, and display the colors to the user.
let onColorClick = function(colorName) {
    // console Log for viewing the color name. Testing Purposes.
    console.log(colorName);
    // Set the colors to the appropriate ones
    currentColor = wheel.traverseToByName(colorName, currentColor);
    let idCurrentColor = document.getElementById("ColorToChange");
    // Console Log for Testing Purposes
    console.log(currentColor.element.colorName);

    complementaryColor = wheel.traverseTo(6, currentColor);
    let idCompColor = document.getElementById("Complementary");

    analogousOne = wheel.traverseTo(1, currentColor);
    let idAnalOne = document.getElementById("AnalogousOne");

    analogousTwo = wheel.traverseTo(-1, currentColor);
    let idAnalTwo = document.getElementById("AnalogousTwo");

    triadicOne = wheel.traverseTo(4,currentColor);
    let idTriOne = document.getElementById("TriadicOne");

    triadicTwo = wheel.traverseTo(-4,currentColor);
    let idTriTwo = document.getElementById("TriadicTwo");

    supplementaryOne = wheel.traverseTo(3,currentColor);
    let idSupOne = document.getElementById("SupplementaryOne");

    supplementaryTwo = wheel.traverseTo(-3,currentColor);
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

    // This is a test line. It's just making sure that I can return the color I need to :D
    //document.getElementById("testChange").innerHTML = document.querySelector('#ColorSelector').jscolor.toHEXString();
}

