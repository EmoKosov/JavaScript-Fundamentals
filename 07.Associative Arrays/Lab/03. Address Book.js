function solve(input)
{
    let addressBook = {};
    for (let i = 0; i < input.length; i++) {
        let [name, address] = input[i].split(':');
        addressBook[name] = address;
    }

    let addressBookEntries = Object.entries(addressBook);


    addressBookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]))

    //console.log(addressBookEntries);
    
    for (const entry of addressBookEntries) {
        let name = entry[0];
        let address = entry[1];
        console.log(`${name} -> ${address}`);
    }
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)