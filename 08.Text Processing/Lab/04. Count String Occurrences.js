function solve(string, key)
{
    let counter = 0;
    for (const word of string.split(' ')) {
        if (word === key) {
            counter++;
        }
    }
    console.log(counter);
}

solve('This is a word and it also is a sentence',
'is'
)