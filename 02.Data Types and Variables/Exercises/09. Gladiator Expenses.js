function solve(lostFights, helmetPrice, swordPrice, sheildPrice, armorPrice)
{
    let expenses = 0;
    let turn = 1;
    let helpCounter = 0;

    while (turn <= lostFights) {
        
        if (turn % 2 == 0) {
            expenses += helmetPrice;
        }
        if (turn % 3 == 0) {
            expenses += swordPrice;
        }
        if (turn % 2 == 0 && turn % 3 == 0) {
            helpCounter++;
            expenses += sheildPrice;
            if (helpCounter % 2 == 0 && helpCounter != 0) {
                expenses += armorPrice;
            }
        }
        turn++;
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}