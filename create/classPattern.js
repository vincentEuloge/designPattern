class Burger{
    constructor(breadType, hasOignon, hasSalad, steakNb){
        this.breadType = breadType;
        this.hasOignon = hasOignon;
        this.hasSalad = hasSalad;
        this.steakNb = steakNb;
    }
}

const bigMac = new Burger("Bun", true, true, 2);
const cactus = new Burger("Muffin", false, true, 1);

console.log(bigMac)
console.log(cactus)

module.exports = {
    Burger
};