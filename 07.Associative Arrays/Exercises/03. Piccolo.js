function solve(input)
{
    let parkingList = new Map();
    let fullList = input.map(el => el.split(', '))
    fullList.forEach(element => {
        const command = element[0];
        const carNumber = element[1]

        if (command === 'IN') {
            parkingList.set(carNumber, command);
        }
        else if(command === 'OUT')
        {
            parkingList.delete(carNumber);
        }
    });

    let sortedCarNumbers = Array.from(parkingList).sort((a, b) => a[0].localeCompare(b[0]))

    

    sortedCarNumbers.forEach((carNumber) => console.log(carNumber[0]))
    if (sortedCarNumbers.length === 0) {
        console.log('Parking lot is Empty');
    }
}

function solveWithArray(input)
{
    let parking = [];
    for (const line of input) {
        let [direction, carNumber] = line.split(', ')
        if (direction === "IN") {
            
            parking.push(carNumber);
        }
        else {
            const index = parking.indexOf(carNumber);
            parking.splice(index, 1)
        }
    }
    
    parking.sort((a,b) => a.localeCompare(b))
    if (parking.length == 0) {
        console.log("Parking Lot is Empty");
    }
    else {
        for (const car of parking) {
            console.log(car);
        }
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)