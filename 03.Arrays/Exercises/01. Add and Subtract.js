function solve(arr)
{
    let modifiedArray = [];
    for (let i = 0; i < arr.length; i++) {
        modifiedArray.push(arr[i])
    }

    let arrSum = 0;
    let modifiedArraySum = 0;

    for (let i = 0; i < modifiedArray.length; i++) {
        if (modifiedArray[i] % 2 == 0) {
            modifiedArray[i] += i;
        }
        else {
            modifiedArray[i] -= i;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
        modifiedArraySum += modifiedArray[i];        
    }

    console.log(modifiedArray);
    console.log(arrSum);
    console.log(modifiedArraySum);
}

solve([5, 15, 23, 56, 35]);