function solve(input)
{
    let result = {};

    input.forEach(line => {
        let [companyName, personID] = line.split(' -> ')
        if (!result.hasOwnProperty(companyName)) {
            result[companyName] = [];
        }
        result[companyName].push(personID)
    });

    let sortedCompanies = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));

    sortedCompanies.forEach(el => {
        
        const companyName = el[0];
        const allIds = el[1];
        console.log(companyName);

        let uniqueId = new Set(allIds);
        for (const id of uniqueId) {
            console.log(`-- ${id}`);
        }

        
    })
}