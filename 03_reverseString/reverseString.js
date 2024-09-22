const reverseString = function(string) {
    let size = string.length;
    let result = "";
    for(let i = size-1; i>=0; i--){
        result = result + string[i];
    }
    return result;
}
// Do not edit below this line
module.exports = reverseString;
