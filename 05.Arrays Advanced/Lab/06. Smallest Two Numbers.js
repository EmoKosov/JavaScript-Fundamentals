function solve(numbers)
{
    let sortedInAscending = numbers.sort((a, b) => {return a - b;} );
    
    console.log(`${sortedInAscending[0]} ${sortedInAscending[1]}`)
}

solve([30, 15, 50, 5]);