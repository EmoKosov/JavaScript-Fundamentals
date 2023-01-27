function solve(input) {
    let element = 0;
    let count = 0;
    for (let i = 0; i < input.length; i++) 
    {
        let currentElement = input[0];
        let currentCount = 1;
        for (let j = i + 1; j < input.length; j++) 
        {    
            if (input[i] == input[j])
            {
                currentElement = input[i]
                currentCount+=1;
            }
            else {
                break;
            }
        }
        if (currentCount > count) 
        {
            element = currentElement;
            count = currentCount;
        }
    }
    let result = Array(count + 1).join(`${element} `)
    console.log(result)
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);