const getTheTitles = function(books) {

    return books.reduce((arr, item) => {
        arr.push(item.title);
        return arr;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
