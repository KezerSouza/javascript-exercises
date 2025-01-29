function removeFromArray(array,) {

    for(i = 1; i < arguments.length; i++) {
        for(j = 0; j < array.length; j++) {
            if(array[j] === arguments[i]) {
                array.splice(j, 1);
                j--;
            }
        }
        
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
