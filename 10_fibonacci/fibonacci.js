const fibonacci = function(num) {
    if (num == 0) {return 0}else if (num <0){return "OOPS"};
    let fib = [];
    let a = 1;
    let b = 1;
    for (let i=0;i<26;i++){
        fib.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
