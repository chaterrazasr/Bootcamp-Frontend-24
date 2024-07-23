//Find the smallest number in an arrangement
function getSmallestNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("The array is empty");
    }
    return numbers.reduce((min, current) => current < min ? current : min, numbers[0]);
}

console.log(getSmallestNumber([12, 6, 10, 2, 45, 10]));