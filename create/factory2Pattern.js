class Burger{
    constructor(breadType, hasOignon, hasSalad, steakNb){
        this.breadType = breadType;
        this.hasOignon = hasOignon;
        this.hasSalad = hasSalad;
        this.steakNb = steakNb;
    }

    showSteakNb(){
        console.log(this.steakNb)
    }
}

const burger = (breadType, hasOignon, hasSalad, steakNb) => {
    return {
        breadType,
        hasOignon,
        hasSalad,
        steakNb,
        showSteakNb: () => { console.log(steakNb) }
    }
} 

const bigMacFromClass = new Burger("Bun", true, true, 2);
const bigMacFromFactory = burger("Bun", true, true, 2);

bigMacFromClass.showSteakNb();
bigMacFromFactory.showSteakNb();

setTimeout(bigMacFromClass.showSteakNb);
setTimeout(bigMacFromFactory.showSteakNb);
