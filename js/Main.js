/*
Quick Access Shorthands:
document.querySelector('#ColorSelector').jscolor <-- Gets the jscolor instance from the HTML
 */

let wheel = new circularLinkedListClass();
let customWheel = new circularLinkedListClass();
let lengthOfCustomWheel = 0;
let currentCustomColor;

let idCurrentColor = document.getElementById("ColorToChange");
let idCompColor = document.getElementById("Complementary");
let idAnalOne = document.getElementById("AnalogousOne");
let idAnalTwo = document.getElementById("AnalogousTwo");
let idTriOne = document.getElementById("TriadicOne");
let idTriTwo = document.getElementById("TriadicTwo");
let idSupOne = document.getElementById("SupplementaryOne");
let idSupTwo = document.getElementById("SupplementaryTwo");


class CustomColor {
    constructor(colorCode) {

        let createPartnerColor = function(spinInt) {
            return tinycolor(colorCode).spin(spinInt).toHexString();
        }

        let getColorName = function(colorToName) {
            let colorToNameArr = ntc.name(colorToName);
            return colorToNameArr[1];
        }

        let compColor;
        let triadicColorOne;
        let TriadicColorTwo;
        let analColorOne;
        let analColorTwo;
        let suppColorOne;
        let suppColorTwo;

        let codeName;
        let compName;
        let triadicOneName;
        let triadicTwoName;
        let analOneName;
        let analTwoName;
        let suppOneName;
        let suppTwoName;

        // These are the hex values of the saved color
        this.colorCode = colorCode;
        this.compColor = createPartnerColor(180);
        this.triadicColorOne = createPartnerColor(120);
        this.triadicColorTwo = createPartnerColor(-120);
        this.analColorOne = createPartnerColor(35);
        this.analColorTwo = createPartnerColor(-35);
        this.suppColorOne = createPartnerColor(90);
        this.suppColorTwo = createPartnerColor(-90);

        // These are the saved corresponding color names
        this.codeName = getColorName(this.colorCode);
        this.compName = getColorName(this.compColor);
        this.triadicOneName = getColorName(this.triadicColorOne);
        this.triadicTwoName = getColorName(this.triadicColorTwo);
        this.analOneName = getColorName(this.analColorOne);
        this.analTwoName = getColorName(this.analColorTwo);
        this.suppOneName = getColorName(this.suppColorOne);
        this.suppTwoName = getColorName(this.suppColorTwo);
    }
}

class BaseColor {
    constructor(codeName, colorCode) {
        this.codeName = codeName;
        this.colorCode = colorCode;
    }
}

//O(1) time for inserting all of the RYB colors we have on our color wheel. Fancy.
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
let analogousOne = wheel.traverseTo(1, currentColor);
let analogousTwo = wheel.traverseTo(-1, currentColor);
let triadicOne = wheel.traverseTo(4, currentColor);
let triadicTwo = wheel.traverseTo(-4, currentColor);
let supplementaryOne = wheel.traverseTo(3, currentColor);
let supplementaryTwo = wheel.traverseTo(-3, currentColor);

let currentColorIsDefault = true;
let dropdown = document.getElementById('clothingArticle');
let selectedClothing = dropdown.options[dropdown.selectedIndex].text;

let updateClothing = function() {
    console.log("Clothing Changed");
    selectedClothing = dropdown.options[dropdown.selectedIndex].text;
}

let getHREFLink = function (inputNode) {
    let textColorToSearch = inputNode.element.codeName;
    dropdown = document.getElementById('clothingArticle');
    let str = "<a style='color:" + inputNode.element.colorCode + "; text-decoration: none;' href='https://www.google.com/search?q=" + textColorToSearch + "+" + selectedClothing + "' target='_blank'>" + textColorToSearch;
    return str;
}

let getHREFLinkSP = function (colorToSearch, colorCode) {
    let str = "<a style='color:" + colorCode + "; text-decoration: none;' href='https://www.google.com/search?q=" + colorToSearch + "+" + selectedClothing + "' target='_blank'>" + colorToSearch;
    return str;
}

// On Click functionality for our buttons.
// Color name is passed from HTML, used to traverse the CDLL, and display the colors to the user.
let onColorClick = function (colorName) {
    currentColorIsDefault = true;

    // Set the colors to the appropriate ones
    currentColor = wheel.traverseToByName(colorName, currentColor);
    complementaryColor = wheel.traverseTo(6, currentColor);
    analogousOne = wheel.traverseTo(1, currentColor);
    analogousTwo = wheel.traverseTo(-1, currentColor);
    triadicOne = wheel.traverseTo(4, currentColor);
    triadicTwo = wheel.traverseTo(-4, currentColor);
    supplementaryOne = wheel.traverseTo(3, currentColor);
    supplementaryTwo = wheel.traverseTo(-3, currentColor);

    document.getElementById("ColorToChangeNoColor").innerHTML = "The current color is:";
    idCurrentColor.innerHTML = getHREFLink(currentColor);
    idCurrentColor.style.color = currentColor.element.colorCode;

    document.getElementById("ComplementaryNoChange").innerHTML = "The complementary color is:";
    idCompColor.innerHTML = getHREFLink(complementaryColor);
    idCompColor.style.color = complementaryColor.element.colorCode;

    // Start of Analogous Colors
    document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
    idAnalOne.innerHTML = getHREFLink(analogousOne);
    idAnalOne.style.color = analogousOne.element.colorCode;
    document.getElementById("And").innerHTML = " and ";
    idAnalTwo.innerHTML = getHREFLink(analogousTwo);
    idAnalTwo.style.color = analogousTwo.element.colorCode;

    // Start of Triadic Colors
    document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
    idTriOne.innerHTML = getHREFLink(triadicOne);
    idTriOne.style.color = triadicOne.element.colorCode;
    document.getElementById("AndTriadic").innerHTML = " and ";
    idTriTwo.innerHTML = getHREFLink(triadicTwo);
    idTriTwo.style.color = triadicTwo.element.colorCode;

    document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";
    idSupOne.innerHTML = getHREFLink(supplementaryOne);
    idSupOne.style.color = supplementaryOne.element.colorCode;
    document.getElementById("AndSupplementary").innerHTML = " and ";
    idSupTwo.innerHTML = getHREFLink(supplementaryTwo);
    idSupTwo.style.color = supplementaryTwo.element.colorCode;

}

let onSaveColorClick = function () {
    // This variable holds the hex value of whatever the color selection is atm.
    let savedColor = document.querySelector('#ColorSelector').jscolor.toHEXString();
        // define a new color and add it to OUR wheel of fortune. (But we don't add it yet)
        let colorToAdd = new CustomColor(savedColor.valueOf());
        addCustomColor(colorToAdd);

        document.getElementById("ColorToChangeNoColor").innerHTML = "The current color is:";
        idCurrentColor.innerHTML = getHREFLinkSP(colorToAdd.codeName, colorToAdd.colorCode);

        document.getElementById("ComplementaryNoChange").innerHTML = "The complementary color is:";
        idCompColor.innerHTML = getHREFLinkSP(colorToAdd.compName, colorToAdd.compColor);

        // Start of Analogous Colors
        document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
        idAnalOne.innerHTML = getHREFLinkSP(colorToAdd.analOneName, colorToAdd.analColorOne);
        document.getElementById("And").innerHTML = " and ";
        idAnalTwo.innerHTML = getHREFLinkSP(colorToAdd.analTwoName, colorToAdd.analColorTwo);

        // Start of Triadic Colors
        document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
        idTriOne.innerHTML = getHREFLinkSP(colorToAdd.triadicOneName, colorToAdd.triadicColorOne);
        document.getElementById("AndTriadic").innerHTML = " and ";
        idTriTwo.innerHTML = getHREFLinkSP(colorToAdd.triadicTwoName, colorToAdd.triadicColorTwo);


        document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";
        idSupOne.innerHTML = getHREFLinkSP(colorToAdd.suppOneName, colorToAdd.suppColorOne);
        document.getElementById("AndSupplementary").innerHTML = " and ";
        idSupTwo.innerHTML = getHREFLinkSP(colorToAdd.suppTwoName, colorToAdd.suppColorTwo);
}

let onClearStorageClick = function() {
    localStorage.clear();
    window.location.reload();
}

// This just populates shit. // LOCAL STORAGE WORKS IN CHROME.
let addCustomColor = function (color) {
    console.log(color.codeName);
    localStorage.setItem(color.colorCode, JSON.stringify(color));
    customWheel.add(color);
    addToTable(color);
    lengthOfCustomWheel++;
}

// Prints all the saved color information to the console.
let testAllSavedColors = function () {
    // Get the keys stored in the local storage
    let keys = Object.keys((localStorage));
    // Just a variable for holding the length of our local storage.
    let i = keys.length;
// Using a while loop like this is easier than a for loop in javascript.
    while (i--) {
        //console.log((localStorage.getItem(keys[i])));
        // Converts the stringified JSON back into an object.
        let customColorToPopulate = JSON.parse(localStorage.getItem(keys[i]));
        // Adds that object to our custom wheel.
        customWheel.add(customColorToPopulate);
        lengthOfCustomWheel++;
    }
    currentCustomColor = customWheel.head;
}
// Running this method writes all the saved variables to the console. Testing purposes only
testAllSavedColors();

let onAlreadySavedColorClick = function () {
    currentColorIsDefault = false;
    // Here we set the current custom color node to the head. Then we traverse it from there.
    currentCustomColor = customWheel.head;
    currentCustomColor = customWheel.traverseToByName(this.innerText, currentCustomColor);

    idCurrentColor.innerHTML = getHREFLinkSP(currentCustomColor.element.codeName, currentCustomColor.element.colorCode);
    idCompColor.innerHTML = getHREFLinkSP(currentCustomColor.element.compName, currentCustomColor.element.compColor);

    // Start of Analogous Colors
    document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
    idAnalOne.innerHTML = getHREFLinkSP(currentCustomColor.element.analOneName, currentCustomColor.element.analColorOne);
    document.getElementById("And").innerHTML = " and ";
    idAnalTwo.innerHTML = getHREFLinkSP(currentCustomColor.element.analTwoName, currentCustomColor.element.analColorTwo);

    // Start of Triadic Colors
    document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
    idTriOne.innerHTML = getHREFLinkSP(currentCustomColor.element.triadicOneName, currentCustomColor.element.triadicColorOne);
    document.getElementById("AndTriadic").innerHTML = " and ";
    idTriTwo.innerHTML = getHREFLinkSP(currentCustomColor.element.triadicTwoName, currentCustomColor.element.triadicColorTwo);

    document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";
    idSupOne.innerHTML = getHREFLinkSP(currentCustomColor.element.suppOneName, currentCustomColor.element.suppColorOne);
    document.getElementById("AndSupplementary").innerHTML = " and ";
    idSupTwo.innerHTML = getHREFLinkSP(currentCustomColor.element.suppTwoName, currentCustomColor.element.suppColorTwo);
}

// Function to populate table.
let populateTableAtRuntime = function () {
    // Declare the table row variable.
    // No need to initialize it because it'll be initialized every FIVE colors to make a new row.
    let tr;
    // The table will be the same length of the custom wheel, so we can populate it using this variable.
    for (let i = 0; i < lengthOfCustomWheel; i++) {
        // Here we create a table entry.
        let td = document.createElement('td');
        // This controls the number of elements per row.
        if (!(i % 7)) {
            // If this operation is false, we create a new table before adding more td's.
            tr = document.createElement('tr');
            document.getElementById('customColors').appendChild(tr);
        }
        // The proceeding code appends a text node to our td and styles it a bit.
        td.appendChild(document.createTextNode(currentCustomColor.element.codeName));
        td.style.color = currentCustomColor.element.colorCode;
        td.style.padding = '15px';
        td.style.backgroundColor = currentCustomColor.element.colorCode;
        // This line adds the td to the tr (table div to the table row)
        tr.appendChild(td);
        // They also need an on click listener. That's added below.
        td.addEventListener('click', onAlreadySavedColorClick);
        // Since we're populating the whole table right now, we need to skip to the next node for the next iteration.
        currentCustomColor = customWheel.skipForwards(currentCustomColor);
    }

}

// This method is called when we need to dynamically add a new color to our table.
// This method is separate from our initial table population method despite it being almost the same.
// the biggest difference is we need to declare our 'tr' variable before we proceed with the rest of the function.
let addToTable = function (color) {
    let table = document.getElementById('customColors');
    let tr = table.rows[table.rows.length - 1];
    // Notice the '<=' operator. Since the lengthOfCustomWheel variable is just an int,
    // we use it to place the new color in the table dynamically.
    for (let i = 0; i <= lengthOfCustomWheel; i++) {
        if (i < lengthOfCustomWheel) {
            // We do nothing here.
        } else {
            // This code is very similar to the above population method.
            let td = document.createElement('td');
            if (!(i % 7)) {
                tr = document.createElement('tr');
                document.getElementById('customColors').appendChild(tr);
            }
            td.appendChild(document.createTextNode(color.codeName));
            td.style.color = color.colorCode;
            td.style.textAlign = 'center';
            td.style.padding = '15px';
            td.style.backgroundColor = color.colorCode;
            tr.appendChild(td);
            td.addEventListener('click', onAlreadySavedColorClick);
        }

    }


}
// This is the method that populates the table at runtime.
populateTableAtRuntime();
// Initial call to populate the page.
onColorClick('Red');
