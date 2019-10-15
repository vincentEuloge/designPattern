const {Burger} = require("./classPattern.js");

let burgerManagerInstance = null;

class BurgerManager{
    constructor(){
        if (burgerManagerInstance) return burgerManagerInstance

        this.burgers = [];
        burgerManagerInstance = this;
    }

    addBurger(burger){
        this.burgers.push(burger)
    }

    getNumberOfBurgers(){
        return this.burgers.length
    }

}

const burgerManager = new BurgerManager();

burgerManager.addBurger(new Burger("Bun", true, true, 2))

console.log(burgerManager.getNumberOfBurgers());

// on imagine être dans un autre fichier
const burgerManager2 = new BurgerManager();

console.log(burgerManager2.getNumberOfBurgers())