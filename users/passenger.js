let { User } = require("./user.js");

class Passenger extends User{
    constructor(){
        super();
        
    };

    
    searchCab = function(location){
        return vehicles;
    }

    selectCab = function(vehicleId){
        //vehicle got engaged
    }
}

module.exports.Passenger = Passenger;