function solve(input)
{   
    let commands = input.toString().split(`|`)
    let initialHealth = 100;
    let initialCoins = 0;
    
    for (let i = 0; i < commands.length; i++) {
        let internalCommand = commands[i].toString().split(` `);
        if (internalCommand[0] === "potion" ) {
            if (initialHealth + Number(internalCommand[1]) > 100) {
                console.log(`You healed for ${100 - initialHealth} hp.`)
                initialHealth = 100;
            }
            else {
                console.log(`You healed for ${internalCommand[1]} hp.`)
                initialHealth += Number(internalCommand[1]);
            }
            console.log(`Current health: ${initialHealth} hp.`);
        }
        else if (internalCommand[0] === "chest") {
            initialCoins += Number(internalCommand[1]);
            console.log(`You found ${internalCommand[1]} coins.`);
            
        }

        else {
            initialHealth -= Number(internalCommand[1]);
            if (initialHealth > 0) {
                console.log(`You slayed ${internalCommand[0]}.`);
                
            }
            else {
                console.log(`You died! Killed by ${internalCommand[0]}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
                
    }
                console.log(`You've made it!`);
                console.log(`Coins: ${initialCoins}`);
                console.log(`Health: ${initialHealth}`);
    
}

solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])