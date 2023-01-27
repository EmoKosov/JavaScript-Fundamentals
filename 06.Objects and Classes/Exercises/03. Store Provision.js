function solve(firstArr, secondArr) {
    let listOfProduct = [];

    class Product {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }

        print() {
            console.log(`${this.product} -> ${this.quantity}`);
        }
    }

    for (let i = 0; i < firstArr.length - 1; i++) {
        if (i % 2 == 0) {
            let object = new Product(firstArr[i], Number(firstArr[i + 1]))
            listOfProduct.push(object);
        }
    }

    for (let i = 0; i < secondArr.length - 1; i++) {
        
        if (i % 2 == 0) {
            let existingProduct = listOfProduct.find((x => x.product == secondArr[i]));
            if (existingProduct) {
                existingProduct.quantity += Number(secondArr[i + 1]);
            }
            else {
                let object = new Product(secondArr[i], Number(secondArr[i + 1]));
                listOfProduct.push(object);
            }
        }
    }

    for (const el of listOfProduct) {
        el.print();
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)