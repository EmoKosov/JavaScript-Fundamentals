function solve(arr)
{
    let isPalindrome = false;
    
    for (let num of arr) {
        let reverseNumber = num.toString().split('').reverse().join('');

        if (num === Number(reverseNumber)) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

solve([123, 323, 421, 121])

