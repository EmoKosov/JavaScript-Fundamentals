function solve(str, char, result)
{
    let h = str.replace('_', char);
    
    if (h === result) {
        console.log('Matched');
    }
    else {
        console.log('Not Matched');
    }
}