function solve(n, numbers)
{
    let newNumbers = [];
    for (let i = 0; i < n; i++) {
        newNumbers.push(numbers[i])
    }
    console.log(newNumbers.reverse().join(' '));
}

solve(3, [10, 20, 30, 40, 50])