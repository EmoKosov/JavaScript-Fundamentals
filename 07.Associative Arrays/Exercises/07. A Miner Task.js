function solve(input)
{
    let storage = new Map();
    for (let i = 0; i < input.length - 1; i++) {
        let resource = input[i];
        let quantity = input[i+1]
        quantity = Number(quantity);
        if (storage.has(resource)) {
            quantity += storage.get(resource);
        }
        storage.set(resource,quantity);
        i++;
    }

    for (const key of storage) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    
)