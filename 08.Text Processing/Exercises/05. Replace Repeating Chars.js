function solve(text)
{
    let newString = text[0];
    for (let i = 1; i < text.length; i++) {
        if (text[i] !== text[i - 1]) {
            newString += text[i]
        }
    }
    console.log(newString);
}

solve('aaaaabbbbbcdddeeeedssaa')