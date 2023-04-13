let { User } = require("./user.js");

class Passenger extends User{
    constructor(){
        super();
        this.userId = ++Passenger.UserId;
    };

    static UserId = 0;
    
    searchCab = function(location){
        return vehicles;
    }

    selectCab = function(vehicleId){
        //vehicle got engaged
    }
}

module.exports.Passenger = Passenger;