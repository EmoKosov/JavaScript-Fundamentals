function solve(startingYield){

    let startYield = startingYield;
    let daysCounter = 0;
    let spiceExtracted = 0;

        while (startYield >= 100){

            spiceExtracted += startYield;
            spiceExtracted -= 26;
            startYield -= 10;
            daysCounter++
        }

        if (spiceExtracted >= 26){
            spiceExtracted -= 26;
        }

        console.log(daysCounter)
        console.log(spiceExtracted)
}
