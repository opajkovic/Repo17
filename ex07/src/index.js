const range = {
    max: 100.00,
    min: -25.00,
    num1: 17.50,
    num2: 88.80,
    average: 45.325
};
function middle(arr) {
    const {max, min} = range;
    const middle = (range.max + range.min) / 2.0
    return middle;
}
console.log(middle(range));
module.exports = middle;