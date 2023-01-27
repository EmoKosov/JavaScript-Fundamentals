function solve(firstArr, secondArr)
{
    let sum = 0;
    
    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] == secondArr[i]) {
            sum += Number(firstArr[i])
        }
        else {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
}