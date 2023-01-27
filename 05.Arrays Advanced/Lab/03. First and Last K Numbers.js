function solve(arr)
{
    let count = arr.shift();
    console.log(arr.slice(0, count).join(" "));
    console.log(arr.slice(arr.length - count).join(" "))
}

solve([2, 7, 8, 9])
    