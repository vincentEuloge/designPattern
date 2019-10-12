const {Burger} = require ("./classPattern.js");

class VegeBurger extends Burger {
    constructor(breadType, hasOignon, hasSalad, hasTofu){
        super(breadType, hasOignon, hasSalad, 0);

        this.hasTofu = hasTofu;
    }
}

const tofutifo = new VegeBurger("Potatoes", true, true, true)

console.log(tofutifo)