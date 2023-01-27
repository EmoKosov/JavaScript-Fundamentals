function solve(input) {

    let bitcoinPrice = 11949.16;
    let priceOneGramGold = 67.51;
    let boughtBitcoins = 0;
    let money = 0.00;
    let dayOfFirstBitcoinPurchased = 0;
    let day = 0;

    for (let index = 0; index < input.length; index++) 
    {
        day++;
        if (day % 3 !== 0) 
        {
            money += input[index] * priceOneGramGold;
        }
        else
         {
            let moneyForEveryThirdDay = input[index] * priceOneGramGold;
            money += moneyForEveryThirdDay - moneyForEveryThirdDay * 0.30;
       }

        while (money >= bitcoinPrice) 
        {
            if (boughtBitcoins == 0) {
                dayOfFirstBitcoinPurchased = index + 1;
            }
            money -= bitcoinPrice;
            boughtBitcoins++;
        }
    }
    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoinPurchased}`);   
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);