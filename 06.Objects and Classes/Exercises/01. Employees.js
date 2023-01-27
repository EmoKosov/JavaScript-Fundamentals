function solve(arr)
{

    for (let i = 0; i < arr.length; i++) {
        let object = {
            name: arr[i],
            number: arr[i].length
        }
        console.log(`Name: ${object.name} -- Personal Number: ${object.number}`)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )