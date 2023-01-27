function solve(word,text)
{
    let splittedText = text.split(' ')
    for (const w of splittedText) {
        if (w.toLocaleLowerCase() === word.toLocaleLowerCase()) {
            console.log(word);   
            return;
        }
    }
    console.log(`${word} not found!`);
}

solve('javascript',
'JavaScript is the best programming language'
)