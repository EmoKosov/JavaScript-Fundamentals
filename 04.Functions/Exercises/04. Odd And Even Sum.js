function solve(number)
{
    let evenSum = 0;
    let oddSum = 0;

    while (parseInt(number) > 0)
    {
        let reminder = parseInt(number % 10);
        if (reminder % 2 == 0) {
            evenSum += reminder;
        }
        else {
            oddSum += reminder
        }
        number /= 10;

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


function oddNEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let digits = num.toString();
    for (let d of digits) {
        if (Number(d) % 2 === 0) {
            evenSum += Number(d);
        } else {
            oddSum += Number(d);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}