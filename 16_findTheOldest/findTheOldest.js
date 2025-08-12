const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();

    const oldestPerson = people.reduce((oldest, curr) => {
        let oldestDeathYear = oldest.yearOfDeath;
        let currDeathYear = curr.yearOfDeath;

        if (!("yearOfDeath" in oldest)) {
            oldestDeathYear = currentYear;
        }

        if (!("yearOfDeath" in curr)) {
            currDeathYear = currentYear;
        }


        if ((currDeathYear - curr.yearOfBirth) > (oldestDeathYear - oldest.yearOfBirth)) {
            oldest = curr;
        }

        return oldest;
    }, people[0]);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
