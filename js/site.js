function getUserString(){
    
    // Get the user's input
    let userString = document.getElementById("userInput").value;

    if (userString == ""){
        Swal.fire({
            title: "Uh oh!",
            text: "You must enter a string of characters to determine if it is a palindrome.",
            icon: "error",
            confirmButtonText: "OK",
            confirmButtonColor: "#44d7b6",
            focusConfirm: false,
            showCloseButton:true,
          });;
    };

    // Reverse the user's input => go into seperate function
    let revString = reverseString(userString);

    // Compare original input and reversed input => go into seperate function
    let compareResult = compareString(userString, revString);

    // Output result => go into seperate function
    displayString(userString, revString, compareResult);

}

function reverseString(userString){

    // Start at the last index of string array
    let startValue = userString.length - 1;
    let endValue = 0;
    
    let revString = "";

    // In a decremented for loop, the start value must be higher than the end value
    for(let i = startValue; i >= endValue; i--){
        revString += userString[i];
    };

    return revString;
}

function compareString(userString, revString){

    // Set RegEx variable
    let regEx = /[\W_]/g;

    // Use array function to normalizing casing
    // Use RegEx to remove spaces and special characters
    let modifiedUserString = userString.toLowerCase().replace(regEx, "");
    let modifiedRevString = revString.toLowerCase().replace(regEx, "");

    // Set result variable
    let emptyResult = '';
    let palindromeResult = 'YES! This is a palindrome!';
    let notPalindromResult = 'Sorry, this is not a palindrome.';

    if (modifiedUserString == ""){
        return emptyResult;
    }
    else if (modifiedUserString == modifiedRevString){        
        
        return palindromeResult;    
    }
    else {
        return notPalindromResult;
    }
}

function displayString(userString, revString, compareResult){

    
    // Locate the IDs in the DOM to display outputs    
    let output1 = document.getElementById("results1");
    let output2 = document.getElementById("results2");
    let output3 = document.getElementById("results3");

    // Results of original input, reversed string, and if it is a palindrome
    output1.innerHTML = userString;
    output2.innerHTML = revString;
    output3.innerHTML = compareResult;

    
}