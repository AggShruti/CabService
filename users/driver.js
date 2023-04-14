const { Vehicle } = require("../vehicle.js");
let {User} = require("./user.js");
let {Ride} = require("../ride.js");

class Driver extends User {
    constructor(){
        super();
    }


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

    offerRide = function(source, destination){

        let rideDetails = Ride.createRide(this.vehicle, source ,destination);
        return rideDetails;
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