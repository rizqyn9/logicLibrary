
/*
    str between 4 && 25
    letter start doesnt only words
    str not include unique code
    last char cnt use underscore
*/



function CodelandUsernameValidation(str) { 
    // code goes here  
    const valid_reg = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    const valid_length = (str) => str.length >= 4 && str.length <= 25;
    return valid_reg.test(str) && valid_length(str);
}

console.log(

    CodelandUsernameValidation("1231asdad"),
    CodelandUsernameValidation("Hahahahah"),
    CodelandUsernameValidation("Riasdjhas_")
);


"use strict"
function CodelandUsernameValidation(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    return str.length >= 4 && str.length <= 25 && regex.test(str)
  }
     
console.log(

    CodelandUsernameValidation("1231asdad"),
    CodelandUsernameValidation("Hahahahah"),
    CodelandUsernameValidation("Riasdjhas_")
);