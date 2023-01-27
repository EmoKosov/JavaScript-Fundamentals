function solve(number)
{

    if (number == 100) {
        console.log("100% Complete!")
        return;
    }
    let dividedNum = number / 10;
    let result = `${number}% [`;
    for (let i = 0; i < dividedNum; i++) {
        result += "%"
    }

    for (let j = dividedNum; j < 10; j++) {
        result += ".";
    }
    result += "]";

    console.log(result);
    console.log("Still loading...");
}

solve(10)