const palindromes = function (str) {
    str = str.toLowerCase();
    str =str.replace(/[!,. ]/g, "");
    let arr = str.split('');
    let reversed = arr.reverse().join('');
    return  str ===reversed;
};

// Do not edit below this line
module.exports = palindromes;
