function solve(bookPages,pageForHour, daysToRead){
    let totalTimeToRead = bookPages / pageForHour;
    let hoursPerDay = totalTimeToRead / daysToRead;
    console.log(hoursPerDay);
}

solve(432, 15, 4);