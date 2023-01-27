function solve(arr)
{
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                isTop = true;              
            }
            else {
                isTop = false;
                break;
            } 
        }
        if (isTop) {
            result += arr[i] + ' ';
        }
    }
    console.log(result)
}

solve([14, 24, 3, 19, 15, 17]);