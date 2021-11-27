/*
Quick Access Shorthands:
document.querySelector('#ColorSelector').jscolor <-- Gets the jscolor instance from the HTML
 */



let wheel = new circularLinkedListClass();
let customWheel = new circularLinkedListClass();

class CustomColor {
    constructor(colorCode, compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo,
                codeName, compName, triadicOneName, triadicTwoName, analOneName, analTwoName, suppOneName, suppTwoName) {

        // These are the hex values of the saved color
        this.colorCode = colorCode;
        this.compColor = compColor;
        this.triadicColorOne = triadicColorOne;
        this.triadicColorTwo = triadicColorTwo;
        this.analColorOne = analColorOne;
        this.analColorTwo = analColorTwo;
        this.suppColorOne = suppColorOne;
        this.suppColorTwo = suppColorTwo;

        // These are the saved corresponding color names
        this.codeName = codeName;
        this.compName = compName;
        this.triadicOneName = triadicOneName;
        this.triadicTwoName = triadicTwoName;
        this.analOneName = analOneName;
        this.analTwoName = analTwoName;
        this.suppOneName = suppOneName;
        this.suppTwoName = suppTwoName;
    }
}


class BaseColor {
    constructor(colorName, colorCode) {
        this.colorName = colorName;
        this.colorCode = colorCode;
    }
}

// THIS IS **NOT** all of the colors nor are they correct. This is just a sample
// CDLL I made up to test the CDLL functions. Similar in Syntax to Java Implementation


wheel.add(new BaseColor("Red Orange", "#FD5308"));
wheel.add(new BaseColor("Orange", "#FB9902"));
wheel.add(new BaseColor("Light Orange", "#F9BC02"));
wheel.add(new BaseColor("Yellow", "#FFFE32"));
wheel.add(new BaseColor("Lime Green", "#D0E92B"));
wheel.add(new BaseColor("Green", "#66B132"));
wheel.add(new BaseColor("Light Blue", "#0291CB"));
wheel.add(new BaseColor("Blue", "#0247FE"));
wheel.add(new BaseColor("Violet", "#3E01A4"));
wheel.add(new BaseColor("Purple", "#8601B0"));
wheel.add(new BaseColor("Magenta", "#A7194B"));
wheel.add(new BaseColor("Red", "#FE2712"));

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

}

let onSaveColorClick = function() {
    let savedColor = document.querySelector('#ColorSelector').jscolor.toHEXString();
    console.log("The chosen color is: " + savedColor);
    if(savedColor.valueOf() == "#FFFFFF") {
        console.log("Cannot Save Pure White cuz that shit is pasttyyyyyy");
    } else if(savedColor.valueOf() == "#000000") {
        console.log("Cannot Save Pure Black")
    } else {
        // Define some colors by playing wheel of fortune
        let compColor = tinycolor(savedColor).spin(180);
        let triadicColorOne = tinycolor(savedColor).spin(120);
        let triadicColorTwo = tinycolor(savedColor).spin(-120);
        let analColorOne = tinycolor(savedColor).spin(30);
        let analColorTwo = tinycolor(savedColor).spin(-30);
        let suppColorOne = tinycolor(savedColor).spin(90);
        let suppColorTwo = tinycolor(savedColor).spin(-90);

        // define a new color and add it to OUR wheel of fortune. (But we don't add it yet)
        let colorToAdd = getColorNames(savedColor,compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo);

        // Log the color's information because we gotta make sure it's working, yessirrrrr
        console.log("Here's the saved color's (" + colorToAdd.codeName + ") information: ");
        console.log("The complementary color is: " + colorToAdd.compName);
        console.log("The clockwise triadic color is: " + colorToAdd.triadicOneName);
        console.log("The counter-clockwise triadic color is: " + colorToAdd.triadicTwoName);
        console.log("The clockwise analogous color is: " + colorToAdd.analOneName);
        console.log("The counter-clockwise analogous color is: " + colorToAdd.analTwoName);
        console.log("The clockwise supplementary color is: " + colorToAdd.suppOneName);
        console.log("The counter-clockwise supplementary color is: " + colorToAdd.suppTwoName);

        let idCurrentColor = document.getElementById("ColorToChange");
        // Console Log for Testing Purposes

        let idCompColor = document.getElementById("Complementary");

        let idAnalOne = document.getElementById("AnalogousOne");

        let idAnalTwo = document.getElementById("AnalogousTwo");

        let idTriOne = document.getElementById("TriadicOne");

        let idTriTwo = document.getElementById("TriadicTwo");

        let idSupOne = document.getElementById("SupplementaryOne");

        let idSupTwo = document.getElementById("SupplementaryTwo");

        idCurrentColor.innerHTML = colorToAdd.codeName;
        idCurrentColor.style.color = colorToAdd.colorCode;
        //idCurrentColor.style.fontSize = "x-large";

        idCompColor.innerHTML = colorToAdd.compName;
        idCompColor.style.color = colorToAdd.compColor;
        //idCompColor.style.fontSize = "x-large";
        // Start of Analogous Colors
        document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
        idAnalOne.innerHTML = colorToAdd.analOneName;
        //idAnalOne.style.fontSize = "x-large";
        idAnalOne.style.color = colorToAdd.analColorOne;

        document.getElementById("And").innerHTML = " and ";

        idAnalTwo.innerHTML = colorToAdd.analTwoName;
        //idAnalTwo.style.fontSize = "x-large";
        idAnalTwo.style.color = colorToAdd.analColorTwo;
        // End of Analogous Colors

        // Start of Triadic Colors
        document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
        idTriOne.innerHTML = colorToAdd.triadicOneName;
        //idTriOne.style.fontSize = "x-large";
        idTriOne.style.color = colorToAdd.triadicColorOne;

        document.getElementById("AndTriadic").innerHTML = " and ";

        idTriTwo.innerHTML = colorToAdd.triadicTwoName;
        //idTriTwo.style.fontSize = "x-large";
        idTriTwo.style.color = colorToAdd.triadicColorTwo;
        // End of Triadic Colors

        // Didn't implement supplementary colors just yet. Hol up!
        document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";
        idSupOne.innerHTML = colorToAdd.suppOneName;

        idSupOne.style.color = colorToAdd.suppColorOne;

        document.getElementById("AndSupplementary").innerHTML = " and ";

        idSupTwo.innerHTML = colorToAdd.suppTwoName;

        idSupTwo.style.color = colorToAdd.suppColorTwo;




    } //Don't be confused, this is the end of the else statement.
} // Thiiiiis one is the end of the function \o/

// This method creates and returns a color object with the color names included. Pretty sick huh? (KILL ME THIS WAS AWFUL
// TO MAKE)
let getColorNames = function(savedColor, compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo) {

    let savedColorarr = ntc.name(savedColor);
    let colorName = savedColorarr[1];

    let compArr = ntc.name(compColor);
    let compName = compArr[1];

    let triadicOneArr = ntc.name(triadicColorOne);
    let triadicOneName = triadicOneArr[1];

    let triadicTwoArr = ntc.name(triadicColorTwo);
    let triadicTwoName = triadicTwoArr[1];

    let analOneArr = ntc.name(analColorOne);
    let analOneName = analOneArr[1];

    let analTwoArr = ntc.name(analColorTwo);
    let analTwoName = analTwoArr[1];

    let suppOneArr = ntc.name(suppColorOne);
    let suppOneName = suppOneArr[1];

    let suppTwoArr = ntc.name(suppColorTwo);
    let suppTwoName = suppTwoArr[1];

    return new CustomColor(savedColor, compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo,
                            colorName, compName, triadicOneName, triadicTwoName, analOneName, analTwoName, suppOneName, suppTwoName);



}
