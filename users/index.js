let {Passenger} = require("./passenger.js");
let {Driver} = require("./driver.js");

function getInstance(property){
    if(property === "passenger"){
        return Passenger;
    }
    else {
        return Driver;
    }
}

module.exports.getInstance = getInstance;