
function divideFactoriel(number, number2)
{
    function Factoriel(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
            return 1;
        else {
            return (num * Factoriel(num - 1));
        }
    }
    return (Factoriel(number) / Factoriel(number2)).toFixed(2);
}
