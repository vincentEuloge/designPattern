const {Burger} = require ("../create/classPattern");

const burgerMixin = {
    retrieveSteack(){
        if (this.steakNb === 0) return;

        this.steakNb -= 1;
    }
}

Object.assign(Burger.prototype, burgerMixin);

const bigMac = new Burger("Bun", true, true, 2);

console.log(`Number of big mac steak : ${bigMac.steakNb}` )

bigMac.retrieveSteack();

console.log(`Number of big mac steak : ${bigMac.steakNb}` )