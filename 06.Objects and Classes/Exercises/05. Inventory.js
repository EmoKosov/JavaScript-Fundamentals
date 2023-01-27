function solve(list)
{
    let heroes = [];

    list.forEach(line => {
        let [name,level,items] = line.split(' / ');
        let currentHero = {
            name,
            level : Number(level),
            items
        }
        heroes.push(currentHero);
    });
    heroes.sort((a, b) => a.level - b.level)
    heroes.forEach(element => {
        console.log(`Hero: ${element.name}\nlevel => ${element.level}\nitems => ${element.items}`);
    });
}