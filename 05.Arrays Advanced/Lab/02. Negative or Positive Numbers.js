function negativeOrPositive(arr) {
    let result = [];
    for (let iterator of arr) {
        iterator < 0 ? result.unshift(iterator) : result.push(iterator);
    }
    console.log(result.join('\n'));
}