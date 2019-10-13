const {Burger} = require ("./classPattern.js");

class burgerFactory{
    createBurger(type){
        switch(type){
            case "bigMac":
                return new Burger("Bun", true, true, 2);
            case "deluxe":
                return new Burger("Bun", false, false, 1);
        }
    }
}

const factory = new burgerFactory();
const deluxe = factory.createBurger("deluxe");

console.log(deluxe)