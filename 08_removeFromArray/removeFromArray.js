const removeFromArray = function(arr, ...args) {

    for (let i = 0; i < args.length; i++) {
        let index = arr.findIndex(value => value === args[i]);

        if (index != -1) {
            arr.splice(index, 1);
        }

    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
