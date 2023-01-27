function solve(firstNumber, secondNumber, thirdNumber)
{
    function sum()
    {
        return firstNumber + secondNumber;
    }
    function substract()
    {
        return sum(firstNumber, secondNumber) - thirdNumber;
    }

    return substract(thirdNumber);
}