function solve(arr, number)
{
    let pairs = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j+=2) {
            if (arr[i] + arr[j] === number ) {
                if (!pairs.includes(arr[i])) {
                    console.log(`${arr[j]} ${arr[i]}`)
                    
                }
                
            }
        }
    }
   
}

solve([1, 7, 6, 2, 19, 23],
    8
    )