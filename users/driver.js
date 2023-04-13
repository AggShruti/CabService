const { Vehicle } = require("../vehicle.js");
let {User} = require("./user.js");

class Driver extends User {
    constructor(){
        super();
        this.userId = ++Driver.UserId;
    }

    static UserId = 0;

    addUser = function(userName, location, phoneNumber, vehicleNo, vehicleType){ //super concept
        console.log("reaching")
        // let user = new User();
        this.userName = userName;
        this.location = location;
        this.phoneNumber = phoneNumber;
        // let vehicle = new Vehicle();
        this.vehicle = Vehicle.addVehicle(vehicleNo, vehicleType);
        return this;
    }

    acceptPassengerRequest = function(vehicleId, passengerId){
        //
    }

    offerRide = function(vehicleId){
        // individualRide.offerRide(vehicleId);
        //search for passengers in locality
    }

    endRide = function(vehicleId, passengerId){
        //update vacant seats
    }

    startRide = function(vehicleId){
        //change status
    }


}

module.exports.Driver = Driver;