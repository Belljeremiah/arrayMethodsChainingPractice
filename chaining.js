const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const chainLine = integers.sort(function(a, b){return b-a})

const removeGreater19 = integers.filter(integers => {
    let greaterNineteen = false 
    
    if (integers < 19) {
        greaterNineteen = true
    }
    return greaterNineteen
})

const multiplyPost = removeGreater19.reduce(
    (currentTotal, nextValue) => currentTotal* 1.5, nextValue,
    0
)

console.log (multiplyPost);
console.log(removeGreater19);
console.log(chainLine);

