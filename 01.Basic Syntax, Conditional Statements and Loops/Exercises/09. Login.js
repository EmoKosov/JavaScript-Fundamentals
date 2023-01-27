function solve(arr)
{
    let username = arr[0];
    let password = username.split("").reverse().join("");
    let counter = 0;
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] === password) {
            console.log(`User ${username} logged in.`)
        }
        else {
            counter++;
            if (counter > 3) {
                console.log(`User ${username} blocked!`)
                return;
            }
            else {
                console.log('Incorrect password. Try again.')
            }
        }
    }
}

solve(['Acer','login','go','let me in','recA']);