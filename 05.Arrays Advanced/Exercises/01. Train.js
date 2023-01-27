function train(arr) {
    let wagons = arr
        .shift()
        .split(' ')
        .map(Number);

    let capacity = Number(arr.shift());

    for (let iterator of arr) {
        let command = iterator.split(' ');
        if (command[0] == 'Add') {
            wagons.push(Number(command[1]));
        } else {
            for (let i = 0; i < wagons.length; i++) {
                if (Number(command[0]) + wagons[i] <= capacity) {
                    wagons[i] += Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}