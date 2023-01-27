function solve(arr) {
    for (const element of arr) {
        let townArgs = element.split(' | ')
        let object = {
            town: townArgs[0],
            latitude: Number(townArgs[1]).toFixed(2),
            longitude: Number(townArgs[2]).toFixed(2)
        };
        console.log(object);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'
]);