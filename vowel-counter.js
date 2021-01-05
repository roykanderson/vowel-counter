function setSubmitListeners() {
    // query the elements that we will be adding event listeners to
    let submit = document.querySelector("#submit");
    let input = document.querySelector("#input");

    // make the submit button trigger the function we want when its clicked
    submit.addEventListener("click", displayNumberOfVowels);

    // make the input button tigger the display function whenever the user hits enter
    input.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            console.log("yeah");
            displayNumberOfVowels();
        }
    });
}

// 
function displayNumberOfVowels() {
    // query the input that we will be getting the string we're counting the vowels in from
    // also the element that will display the number of vowels that we find
    let input = document.querySelector("#input");
    let display = document.querySelector("#num-vowels");
    let boilerPlateSpan = document.querySelector("span");

    // set the value of input to a variable called string that we can pass to our vowel counter function
    let string = input.value;

    // pass getNumberOfVowels() our string and assign the value it returns to a variable
    let numberOfVowels = getNumberOfVowels(string);

    // update the DOM to display the number of vowels we found
    boilerPlateSpan.style.display = "inline";
    display.innerText = numberOfVowels;
}

// takes in a string and returns the number of vowels contained in the string
function getNumberOfVowels(string) {
    let vowelCount = 0;
    for (let i = 0; i < string.length; i++) {
        vowelCount += isLetterA(string[i]);
        vowelCount += isLetterE(string[i]);
        vowelCount += isLetterI(string[i]);
        vowelCount += isLetterO(string[i]);
        vowelCount += isLetterU(string[i]);
    }
    return vowelCount;
}

// takes in a character and returns 1 if it is 'A' or 'a', 0 if not
function isLetterA(letter) {
    if (letter === "A" || letter === "a") {
        return 1;
    }
    return 0;
}

// takes in a character and returns 1 if it is 'E' or 'e', 0 if not
function isLetterE(letter) {
    if (letter === "E" || letter === "e") {
        return 1;
    }
    return 0;
}

// takes in a character and returns 1 if it is 'I' or 'i', 0 if not
function isLetterI(letter) {
    if (letter === "I" || letter === "i") {
        return 1;
    }
    return 0;
}

// takes in a character and returns 1 if it is 'O' or 'o', 0 if not
function isLetterO(letter) {
    if (letter === "O" || letter === "o") {
        return 1;
    }
    return 0;
}

// takes in a character and returns 1 if it is 'U' or 'u', 0 if not
function isLetterU(letter) {
    if (letter === "U" || letter === "u") {
        return 1;
    }
    return 0;
}

window.onload = setSubmitListeners();