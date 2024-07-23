//Find the least frequent element in an arrangement
function getLeastFrequentItem(array) {
    if (array.length === 0) {
        throw new Error("The array is empty");
    }
    
    const frequencyMap = array.reduce((map, item) => {
        map[item] = (map[item] || 0) + 1;
        return map;
    }, {});

    const minFrequency = Math.min(...Object.values(frequencyMap));

    return Object.keys(frequencyMap).find(key => frequencyMap[key] === minFrequency);
}

console.log(getLeastFrequentItem([3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9]));
