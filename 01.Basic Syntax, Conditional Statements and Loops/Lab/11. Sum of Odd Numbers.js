function solve(num)
{
    let sum = 0;
    for (let index = 1; index <= num*2; index++) {
        if (index % 2 != 0) {
            console.log(index);
            sum += index;
        }
    }
    console.log(`Sum: ${sum}`);
}

solve(5);