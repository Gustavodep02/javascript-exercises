const repeatString = function(string,times) {
    if(times <0){
        return "ERROR";
    }
    let i =0;
    let result ="";
    while(i<times){
        i++;
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
