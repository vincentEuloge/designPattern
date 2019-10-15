const myModule = (function(){
    const privateConstant = "I'm private";

    return {
        getConstant
    };

    function getConstant(){
        return privateConstant.replace("private", "public");
    }

    function internalMethod() {
        console.log("Nobody see me");
    }
})();

console.log(myModule.getConstant())

module.exports = {
    myModule
};




// and if we are in a webpack environment, no need of iife

// the module file
/*
const privateConstant = "I'm private";

export {
    getConstant
};

function getConstant(){
    return privateConstant.replace("private", "public");
}

function internalMethod() {
    console.log("Nobody see me");
}
*/

// anb to use it
// import {getConstant} from "./theModule"