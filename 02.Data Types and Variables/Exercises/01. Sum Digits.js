function solve(number)
{
    let numbertoStr = number.toString();
    let sum = 0;

    for (let index = 0; index < numbertoStr.length; index++) {
        
        sum += Number(numbertoStr[index]);
    }

    console.log(sum);
}