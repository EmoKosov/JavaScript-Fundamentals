function solve(firstNum, operator, secondNum)
{
    let result = 0;
    if (operator == "+") {
        result = firstNum + secondNum;
    }
    else if (operator == "-") {
        result = firstNum - secondNum;
    }
    else if (operator == "*") {
        result = firstNum * secondNum
    }
    else {
        result = firstNum / secondNum
    }

    console.log(result.toFixed(2));
}
