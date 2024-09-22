const removeFromArray = function(array,remove,remove2,remove3,remove4) {
    let result = [];
    let size = array.length;
    for(let i =0;i<size;i++){
        if(array[i] === remove || array[i] === remove2 || array[i] === remove3 || array[i] === remove4){
            continue;
        }else{
        result.push(array[i]);
    }
}
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
