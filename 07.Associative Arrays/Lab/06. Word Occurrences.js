function solve(input)
{
    let words = new Map();
    for (let i = 0; i < input.length; i++) {
        if (!words.has(input[i])) {
            words.set(input[i], 1)
        }
        else {
            words.set(input[i], words.get(input[i]) + 1)
        }
    }
    words = new Map([...words.entries()].sort((a, b) => b[1] - a[1]));
    for (const key of words) {
        console.log(`${key[0]} -> ${key[1]} times`);
    }
}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])