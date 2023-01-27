function solve1(arr)
{
    let sortedArray = arr.sort((a, b) => a - b);
    let resultArray = [];

    while (sortedArray.length > 0) {
        resultArray.push(sortedArray.pop());
        resultArray.push(sortedArray.shift());
    }
    
    console.log(resultArray.join(' '));
}

solve1([10, 11, 0, 1, 4, 1]);