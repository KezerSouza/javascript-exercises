function fibonacci(x) {
    // 1, 1, 2, 3, 5, 8
    let sequencia = [1, 1, 2];

    for(let i = 3; i < x; i++) {
        sequencia.push(sequencia[i-1] + sequencia[i-2]);
    }

    if(x == 0) return 0;
    if(x < 0) return "OOPS";

    return sequencia[x-1];

}

// Do not edit below this line
module.exports = fibonacci;
