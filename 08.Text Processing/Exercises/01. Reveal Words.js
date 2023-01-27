function solve(words, text)
{
    text = ` ${text} `;
    const wordsArray = words.split(', ')
    wordsArray.forEach(word => {
        const match = ` ${'*'.repeat(word.length)} `
        text = text.replace(match, ` ${word} `)
    });
    console.log(text.trim());
}   



function solve1(revealWord, string)
{
    let result;
    let words = string.split(' ');
    let revealWords = revealWord.split(', ')
    for (const word of words) {
        if (word.includes("*")) {
            for (let i = 0; i < revealWords.length; i++) {
                if (word.length === revealWords[i].length) {
                    if (result !== undefined) {
                        result = result.replace(word, revealWords[i])
                    }
                    else {
                        result = string.replace(word, revealWords[i]);
                    }
                    break;
                }
            }
            continue;
            
        }
    }
    console.log(result);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)