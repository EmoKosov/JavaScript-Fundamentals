function solve(input)
{
    let storage = new Map();
    for (let i = 0; i < input.length; i++) {
        let [item, quantity] = input[i].split(' ');
        quantity = Number(quantity);
        if (storage.has(item)) {
            quantity += storage.get(item);
        }
        storage.set(item,quantity);
    }

    for (const key of storage) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)