function closureFunc () {
    let arr = 0;
    return function(x) {
        arr += x;
        return arr;
    }
}
let sum = closureFunc(0);
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));