let {User} = require("./user.js");
let {individualRide, sharedRides} = require("../rideBehaviours/index.js")

class Driver extends User {
    constructor(){

    }

    acceptPassengerRequest = function(vehicleId, passengerId){
        //
    }

    offerRide = function(vehicleId){
        individualRide.offerRide(vehicleId);
        //search for passengers in locality
    }

    endRide = function(vehicleId, passengerId){
        //update vacant seats
    }

    startRide = function(vehicleId){
        //change status
    }


}