function solve(nums, action)
{
    let numbersToTake = action[0];
    let numbersToDelete = action[1];
    let specialNumber = action[2];

    let takenNumbers = nums.slice(0, numbersToTake);
    takenNumbers.splice(0, numbersToDelete);


    let counter = 0;
    for (const number of takenNumbers) {
        if (number === specialNumber) {
            counter++;
        }
    }

    console.log(`Number ${specialNumber} occurs ${counter} times. `);
}