/*
Quick Access Shorthands:
document.querySelector('#ColorSelector').jscolor <-- Gets the jscolor instance from the HTML
 */

let wheel = new circularLinkedListClass();
let customWheel = new circularLinkedListClass();
let lengthOfCustomWheel = 0;
let currentCustomColor;


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

let getHREFLink = function(inputNode){
    let textColorToSearch = inputNode.element.codeName;
    let str = "<a style='color:" + inputNode.element.colorCode + "; text-decoration: none;' href='https://www.google.com/search?q=" + textColorToSearch + "+" + "shirt' target='_blank'>" + textColorToSearch;
    return str;
}

let getHREFLinkSP = function(colorToSearch, colorCode){
    let str = "<a style='color:" + colorCode + "; text-decoration: none;' href='https://www.google.com/search?q=" + colorToSearch + "+" + "shirt' target='_blank'>" + colorToSearch;
    return str;
}

// On Click functionality for our buttons.
// Color name is passed from HTML, used to traverse the CDLL, and display the colors to the user.
let onColorClick = function (colorName) {
    // console Log for viewing the color name. Testing Purposes.
    console.log(colorName);
    // Set the colors to the appropriate ones
    currentColor = wheel.traverseToByName(colorName, currentColor);
    let idCurrentColor = document.getElementById("ColorToChange");
    // Console Log for Testing Purposes
    console.log(currentColor.element.codeName);

    complementaryColor = wheel.traverseTo(6, currentColor);
    let idCompColor = document.getElementById("Complementary");

    analogousOne = wheel.traverseTo(1, currentColor);
    let idAnalOne = document.getElementById("AnalogousOne");

    analogousTwo = wheel.traverseTo(-1, currentColor);
    let idAnalTwo = document.getElementById("AnalogousTwo");

    triadicOne = wheel.traverseTo(4, currentColor);
    let idTriOne = document.getElementById("TriadicOne");

    triadicTwo = wheel.traverseTo(-4, currentColor);
    let idTriTwo = document.getElementById("TriadicTwo");

    supplementaryOne = wheel.traverseTo(3, currentColor);
    let idSupOne = document.getElementById("SupplementaryOne");

    supplementaryTwo = wheel.traverseTo(-3, currentColor);
    let idSupTwo = document.getElementById("SupplementaryTwo");

    document.getElementById("ColorToChangeNoColor").innerHTML = "The current color is:";
    idCurrentColor.innerHTML = getHREFLink(currentColor);
    idCurrentColor.style.color = currentColor.element.colorCode;
    //idCurrentColor.style.fontSize = "x-large";

    document.getElementById("ComplementaryNoChange").innerHTML = "The complementary color is:";
    idCompColor.innerHTML = getHREFLink(complementaryColor);
    idCompColor.style.color = complementaryColor.element.colorCode;
    //idCompColor.style.fontSize = "x-large";
    // Start of Analogous Colors
    document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
    idAnalOne.innerHTML = getHREFLink(analogousOne);
    //idAnalOne.style.fontSize = "x-large";
    idAnalOne.style.color = analogousOne.element.colorCode;

    document.getElementById("And").innerHTML = " and ";

    idAnalTwo.innerHTML = getHREFLink(analogousTwo);
    //idAnalTwo.style.fontSize = "x-large";
    idAnalTwo.style.color = analogousTwo.element.colorCode;
    // End of Analogous Colors

    // Start of Triadic Colors
    document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
    idTriOne.innerHTML = getHREFLink(triadicOne);
    //idTriOne.style.fontSize = "x-large";
    idTriOne.style.color = triadicOne.element.colorCode;

    document.getElementById("AndTriadic").innerHTML = " and ";

    idTriTwo.innerHTML = getHREFLink(triadicTwo);
    //idTriTwo.style.fontSize = "x-large";
    idTriTwo.style.color = triadicTwo.element.colorCode;
    // End of Triadic Colors

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
    // Testing Log
    console.log("The chosen color is: " + savedColor);
        // Define some colors by playing wheel of fortune!
        let compColor = tinycolor(savedColor).spin(180).toHexString();
        let triadicColorOne = tinycolor(savedColor).spin(120).toHexString();
        let triadicColorTwo = tinycolor(savedColor).spin(-120).toHexString();
        let analColorOne = tinycolor(savedColor).spin(30).toHexString();
        let analColorTwo = tinycolor(savedColor).spin(-30).toHexString();
        let suppColorOne = tinycolor(savedColor).spin(90).toHexString();
        let suppColorTwo = tinycolor(savedColor).spin(-90).toHexString();

        // define a new color and add it to OUR wheel of fortune. (But we don't add it yet)
        let colorToAdd = getColorNames(savedColor, compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo);
        addCustomColor(colorToAdd);

        // Log the color's information because we gotta make sure it's working, yessirrrrr
        console.log("Here's the saved color's (" + colorToAdd.codeName + ") information: ");
        console.log("The complementary color is: " + colorToAdd.compName);
        console.log("The clockwise triadic color is: " + colorToAdd.triadicOneName);
        console.log("The counter-clockwise triadic color is: " + colorToAdd.triadicTwoName);
        console.log("The clockwise analogous color is: " + colorToAdd.analOneName);
        console.log("The counter-clockwise analogous color is: " + colorToAdd.analTwoName);
        console.log("The clockwise supplementary color is: " + colorToAdd.suppOneName);
        console.log("The counter-clockwise supplementary color is: " + colorToAdd.suppTwoName);

        // this just makes the code a tad cleaner and easier to write.
        let idCurrentColor = document.getElementById("ColorToChange");
        let idCompColor = document.getElementById("Complementary");
        let idAnalOne = document.getElementById("AnalogousOne");
        let idAnalTwo = document.getElementById("AnalogousTwo");
        let idTriOne = document.getElementById("TriadicOne");
        let idTriTwo = document.getElementById("TriadicTwo");
        let idSupOne = document.getElementById("SupplementaryOne");
        let idSupTwo = document.getElementById("SupplementaryTwo");

        document.getElementById("ColorToChangeNoColor").innerHTML = "The current color is:";
        idCurrentColor.innerHTML = getHREFLinkSP(colorToAdd.codeName, colorToAdd.colorCode);
        //idCurrentColor.innerHTML = colorToAdd.codeName;
        //idCurrentColor.style.color = colorToAdd.colorCode;
        //idCurrentColor.style.fontSize = "x-large";

        document.getElementById("ComplementaryNoChange").innerHTML = "The complementary color is:";
        idCompColor.innerHTML = getHREFLinkSP(colorToAdd.compName, colorToAdd.compColor);
        //idCompColor.style.color = colorToAdd.compColor;
        //idCompColor.style.fontSize = "x-large";
        // Start of Analogous Colors
        document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
        idAnalOne.innerHTML = getHREFLinkSP(colorToAdd.analOneName, colorToAdd.analColorOne);
        //idAnalOne.style.fontSize = "x-large";
        //idAnalOne.style.color = colorToAdd.analColorOne;

        document.getElementById("And").innerHTML = " and ";

        idAnalTwo.innerHTML = getHREFLinkSP(colorToAdd.analTwoName, colorToAdd.analColorTwo);
        //idAnalTwo.style.fontSize = "x-large";
        //idAnalTwo.style.color = colorToAdd.analColorTwo;
        // End of Analogous Colors

        // Start of Triadic Colors
        document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";
        idTriOne.innerHTML = getHREFLinkSP(colorToAdd.triadicOneName, colorToAdd.triadicColorOne);
        //idTriOne.style.fontSize = "x-large";
        //idTriOne.style.color = colorToAdd.triadicColorOne;

        document.getElementById("AndTriadic").innerHTML = " and ";

        idTriTwo.innerHTML = getHREFLinkSP(colorToAdd.triadicTwoName, colorToAdd.triadicColorTwo);
        //idTriTwo.style.fontSize = "x-large";
        //idTriTwo.style.color = colorToAdd.triadicColorTwo;
        // End of Triadic Colors

        // Didn't implement supplementary colors just yet. Hol up!
        document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";
        idSupOne.innerHTML = getHREFLinkSP(colorToAdd.suppOneName, colorToAdd.suppColorOne);

        document.getElementById("AndSupplementary").innerHTML = " and ";
        idSupTwo.innerHTML = getHREFLinkSP(colorToAdd.suppTwoName, colorToAdd.suppColorTwo);
} // Thiiiiis one is the end of the function \o/

// This method creates and returns a color object with the color names included. Pretty sick huh? (KILL ME THIS WAS AWFUL
// TO MAKE)
let getColorNames = function (savedColor, compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo) {
    /*
    Quick Rundown of how this syntax works rq by using the first one as an example:
    let savedColorArr = ntc.name(savedColor);
    ^ this is an array.   ^ ntc.name takes the savedColor (or the selectedColor) and finds its closest match in a database of names.
                            It returns an array with that looks like: {"Input Color", "Closest Match Name", "Exact Match RGBA"}
    let colorName = savedColorArr[1];
                     ^ This is the "Closest Match Name" mentioned above. That's how I am getting the color names. :)
     Then it's just rinse and repeat!
     */
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

// Here we return the super long custom color object.
    return new CustomColor(savedColor, compColor, triadicColorOne, triadicColorTwo, analColorOne, analColorTwo, suppColorOne, suppColorTwo,
        colorName, compName, triadicOneName, triadicTwoName, analOneName, analTwoName, suppOneName, suppTwoName);
}

// This just populates shit. // LOCAL STORAGE WORKS IN CHROME.
let addCustomColor = function (color) {
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
        // Logs it to the console. :D
        console.log("The custom color saved in the CDLL is: " + customColorToPopulate.codeName);
        lengthOfCustomWheel++;
    }

    currentCustomColor = customWheel.head;
}
// Running this method writes all the saved variables to the console. Testing purposes only
testAllSavedColors();

let onAlreadySavedColorClick = function () {
    // Test Log
    console.log(this.innerText);
    // Here we set the current custom color node to the head. Then we traverse it from there.
    currentCustomColor = customWheel.head;
    currentCustomColor = customWheel.traverseToByName(this.innerText, currentCustomColor);

    // What follows is a copy / paste of our other onClick methods before for the custom color node.
    // It's important to note that our nodes in this CDLL implementation are generic. Some of the
    // items in the customWheel CDLL are JSON objects and some are color objects.
    let idCurrentColor = document.getElementById("ColorToChange");
    let idCompColor = document.getElementById("Complementary");
    let idAnalOne = document.getElementById("AnalogousOne");
    let idAnalTwo = document.getElementById("AnalogousTwo");
    let idTriOne = document.getElementById("TriadicOne");
    let idTriTwo = document.getElementById("TriadicTwo");
    let idSupOne = document.getElementById("SupplementaryOne");
    let idSupTwo = document.getElementById("SupplementaryTwo");

    idCurrentColor.innerHTML = getHREFLinkSP(currentCustomColor.element.codeName, currentCustomColor.element.colorCode);
    //idCurrentColor.innerHTML = currentCustomColor.element.codeName;
    //idCurrentColor.style.color = currentCustomColor.element.colorCode;
    //idCurrentColor.style.fontSize = "x-large";

    idCompColor.innerHTML = getHREFLinkSP(currentCustomColor.element.compName, currentCustomColor.element.compColor);
    //idCompColor.innerHTML = currentCustomColor.element.compName;
    //idCompColor.style.color = currentCustomColor.element.compColor;
    //idCompColor.style.fontSize = "x-large";
    // Start of Analogous Colors
    document.getElementById("AnalogousColorsNoColor").innerHTML = "The Analogous Colors are: ";
    idAnalOne.innerHTML = getHREFLinkSP(currentCustomColor.element.analOneName, currentCustomColor.element.analColorOne);
    //idAnalOne.innerHTML = currentCustomColor.element.analOneName;
    //idAnalOne.style.fontSize = "x-large";
    //idAnalOne.style.color = currentCustomColor.element.analColorOne;

    document.getElementById("And").innerHTML = " and ";
    idAnalTwo.innerHTML = getHREF(currentCustomColor.element.analTwoName, currentCustomColor.element.analColorTwo);
    //idAnalTwo.innerHTML = currentCustomColor.element.analTwoName;
    //idAnalTwo.style.fontSize = "x-large";
    //idAnalTwo.style.color = currentCustomColor.element.analColorTwo;
    // End of Analogous Colors

    // Start of Triadic Colors
    document.getElementById("TriadicColorsNoColor").innerHTML = "The Triadic Colors are: ";

    idTriOne.innerHTML = getHREFLinkSP(currentCustomColor.element.triadicOneName, currentCustomColor.element.triadicColorOne);
    //idTriOne.innerHTML = currentCustomColor.element.triadicOneName;
    //idTriOne.style.fontSize = "x-large";
    //idTriOne.style.color = currentCustomColor.element.triadicColorOne;

    document.getElementById("AndTriadic").innerHTML = " and ";
    idTriTwo.innerHTML = getHREFLinkSP(currentCustomColor.element.triadicTwoName, currentCustomColor.element.triadicColorTwo);
    //idTriTwo.innerHTML = currentCustomColor.element.triadicTwoName;
    //idTriTwo.style.fontSize = "x-large";
    //idTriTwo.style.color = currentCustomColor.element.triadicColorTwo;
    // End of Triadic Colors

    // Didn't implement supplementary colors just yet. Hol up!
    document.getElementById("SupplementaryColorsNoColor").innerHTML = "The Supplementary Colors are: ";

    idSupOne.innerHTML = getHREFLinkSP(currentCustomColor.element.suppOneName, currentCustomColor.element.suppColorOne);
    //idSupOne.innerHTML = currentCustomColor.element.suppOneName;

    //idSupOne.style.color = currentCustomColor.element.suppColorOne;

    document.getElementById("AndSupplementary").innerHTML = " and ";

    idSupTwo.innerHTML = getHREFLinkSP(currentCustomColor.element.suppTwoName, currentCustomColor.element.suppColorTwo);
    //idSupTwo.innerHTML = currentCustomColor.element.suppTwoName;

    //idSupTwo.style.color = currentCustomColor.element.suppColorTwo;

    console.log("CLicked a color");
    console.log("the clicked color was: " + currentCustomColor.element.colorCode);
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

let onClearStorageClick = function() {
    localStorage.clear();
    location.reload();
}

/*
// I believe that in order to add functionality for image searches or product searches, we'll use this:
http://api.serpstack.com/search?access_key=3764606f2e18d893ad9e662bb992b95d&query=" + "search_Term" + "&type=shopping"
as the URL builder

fetch("http://api.serpstack.com/search
     ?access_key=3764606f2e18d893ad9e662bb992b95d
     &query=dogs")
    .then((response) => {
        return response.json();
    })
    .then((results) => {
        let searchQuery = results;
        console.log(JSON.stringify(searchQuery));
    });
*/

let formatQuery = function(searchTerms) {
    let wordArr = searchTerms.split(" ");
    let strToReturn = "";
    for(let i = 0; i < wordArr.length - 1; i++) {
       // console.log(wordArr[i]);
        strToReturn += wordArr[i] + "+";
       // console.log(strToReturn);
    }
    strToReturn += wordArr[wordArr.length - 1];
   // console.log(strToReturn);
    return strToReturn;
}

// Tester Method for Experimenting with Returned JSON data without wasting API calls. Use the below
// Function to return true API calls.
 let getStaticSearchResults = function() {
    fetch("./js/data.json")
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            console.log(results);
            let imageResults = results;
            tablePlaceholderPopulate(imageResults);
        });
}

// Return live API results
let getSearchResults = function(searchTerms) {
    fetch("https://api.scaleserp.com/search" +
        "?api_key=85808701374E484F90F03B8A0624F05A" +
        "&q=" + formatQuery(searchTerms) +
        "&search_type=shopping" +
        "&location=United+States")
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            let searchQuery = results.shopping_results;
            console.log(JSON.stringify(searchQuery));
            tablePlaceholderPopulate(searchQuery);
        });
}

// Table Placeholder Populate may not be renamed to tablePopulate.
// Functionally the same as the custom color table with differences in its output
let tablePlaceholderPopulate = function(imageResultsArr) {

    let table = document.getElementById("results_Grid");
    let tr;

    for (let i = 0; i < imageResultsArr.length; i++) {

        // console.log(imageResultsArr[i]);
        let td = document.createElement('td');
        td.style.maxWidth = "100px";
        td.style.padding = "10px";
        if (!(i % 5)) {
            // Start a new row and stylize it
            tr = document.createElement('tr');
            tr.style.maxWidth = "100px";
            table.appendChild(tr);
        }

        let link = document.createElement('a');
        link.href = imageResultsArr[i].link.replace("/url?url=", "");
        console.log(imageResultsArr[i].link.replace("/url?url=", ""));
        link.setAttribute('target', '_blank');

        // Create inline img and stylize it before appending it. May separate this
        // into a separate function and expand it with a fully dynamically generated table cell.
        let img = document.createElement('img');
        let imgSrc = imageResultsArr[i].image;
        img.src = imgSrc;
        img.style.maxWidth = "100%";
        img.style.padding = "10px";
        img.style.verticalAlign = "center";

        let title = document.createTextNode(imageResultsArr[i].title);
        let brand = document.createTextNode(imageResultsArr[i].price_raw);

        let titlePara = document.createElement('p');
        let brandPara = document.createElement('p');
        brandPara.style.textAlign = "center";
        titlePara.style.textAlign = "center";

        titlePara.appendChild(title);
        brandPara.appendChild(brand);

        link.appendChild(img);
        link.appendChild(titlePara);
        link.appendChild(brandPara);
        td.appendChild(link);
        tr.appendChild(td);
    }
}

// Test Static Search Results (No Live API)
getStaticSearchResults();
// This is the method that populates the table at runtime.
populateTableAtRuntime();
onColorClick("Red");