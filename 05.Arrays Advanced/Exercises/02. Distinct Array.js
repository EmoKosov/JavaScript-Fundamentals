function distinctArray(arr) {
    let result = [];
    for (const iterator of arr) {
        !result.includes(iterator) ? result.push(iterator) : null;
    }
    console.log(result.join(' '));
}