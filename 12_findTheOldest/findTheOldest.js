const findTheOldest = function(arr) {
    let length = arr.length;
    let oldestAge =0;
    let oldestPerson = arr[0];
    for (let i =0; i<length;i++){
        if (!arr[i].yearOfDeath){
            arr[i].yearOfDeath = new Date().getFullYear();
        }
        let age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if (age>oldestAge){
            oldestAge = age;
            oldestPerson = arr[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
