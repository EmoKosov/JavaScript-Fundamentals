function solve(input)
{
    let obj = {};
    let words = input.split(' ').map(x => x.toLowerCase());
    for (const word of words) {
        if (obj.hasOwnProperty(word)) {
            obj[word]++
        }
        else {
            obj[word] = 1;
        }
    }

    let result = '';
    const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (const kvp of sorted) {
        if (kvp[1] % 2 !== 0) {
            result += kvp[0] + " ";
        }
    }
    console.log(result);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')