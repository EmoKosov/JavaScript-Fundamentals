function solve(n, k)
{
    let result = [1];
    
    for (let i = 1; i < n; i++) {
        
        let sum = 0;
        let index = Math.max(result.length - k, 0)
        let lastElements = result.slice(index); 

        for (const el of lastElements) {
            sum += el;
        }
        result.push(sum);
   }
   console.log(result.join(" "))
}

solve(6,3);