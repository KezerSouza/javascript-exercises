function palindromes(x) {
    x = x.replaceAll(" ", "");
    x = x.replaceAll(",", "");
    x = x.replaceAll(".", "");
    x = x.replaceAll("!", "");
    x = x.toLowerCase();

    reverse = "";
    for(let i = x.length-1; i >= 0; i--) {
        reverse = reverse.concat(x[i]);
    }

    let result = false;
    if(reverse == x) result = true;

    return result;
}

// Do not edit below this line
module.exports = palindromes;
