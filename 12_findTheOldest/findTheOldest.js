function findTheOldest(x) {
    let ages = x.map(person => (person.yearOfDeath ? person.yearOfDeath : 2025) - person.yearOfBirth);

    let max = Math.max(...ages);
    let max_index = ages.indexOf(max);

    return x[max_index];
}

// Do not edit below this line
module.exports = findTheOldest;
