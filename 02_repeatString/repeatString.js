function repeatString(x, y) {
    let stringFinal = "";
    for(let i = 0; i < y; i++) {
        stringFinal = stringFinal.concat(x);
    }

    if(y < 0) return "ERROR";
    return stringFinal;


}

// Do not edit below this line
module.exports = repeatString;
