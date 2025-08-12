const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9\s]/g, '').replaceAll(' ', '').toLowerCase();

    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] != string[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
