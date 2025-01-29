function sumAll(x, y) {
    soma = 0;

    if(x < 0 || y < 0) return "ERROR";
    if(x % 1 != 0 || y % 1 != 0) return "ERROR";
    if(typeof(x) != 'number' || typeof(y) != 'number') return "ERROR";

    for(i = Math.min(x, y); i <= Math.max(x, y); i++) {
        soma += i;
    }

    return soma;
}

// Do not edit below this line
module.exports = sumAll;
