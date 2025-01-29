function reverseString(x) {

    let reversed = "";

    for(let i = x.length-1; i >= 0; i--) {
        reversed = reversed.concat(x[i]);
    }

    return reversed;
}   

// Do not edit below this line
module.exports = reverseString;
