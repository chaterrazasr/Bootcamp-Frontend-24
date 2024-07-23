//Concatenating Strings in a 2D Array
function joinStringsIn2DArray(data) {
    return data.map(subArray => subArray.join(' ')).join(' ');
}

const data = [
    ["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]
];

console.log(joinStringsIn2DArray(data));