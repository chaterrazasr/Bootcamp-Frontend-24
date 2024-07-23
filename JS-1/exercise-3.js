//Remove duplicates in an array
function removeArrayDuplicates(arr) {
    return arr.filter((item, index, self) => self.indexOf(item) === index);
}

console.log(removeArrayDuplicates([7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd']));
