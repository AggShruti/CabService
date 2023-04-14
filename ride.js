class Ride{
    constructor(){
        this.rideId = ++Ride.rides;
        this.isAvailable = true;
    }
    static rides = 0;

    static createRide(vehicleDetails, source, destination, type){
        let ride = new Ride();
        ride.source = source;
        ride.destination = destination;
        ride.vehicle = vehicleDetails;
        if(type === "shared"){
            let behaviour = require("./rideBehaviours/sharedRide.js").SharedRide;
            ride.behaviour = new behaviour();
        }
        else{
            let behaviour = require("./rideBehaviours/individualRide.js").IndividualRide;
            ride.behaviour = new behaviour();
        }
        return ride;
    }
 
    checkAvailablity(seatsRequested){
        ride.behaviour.checkAvailablity(this.vehicle, this.seatsOccupied, this)
        if(this.vehicle.totalSeats - this.seatsOccupied < seatsRequested){
            return false;
        }
        else return true;
    }

    selectRide(seatsRequested){
        if(seatsRequested === 0 ){
            throw "Seats requested should be more than 0";
        }
        else if(seatsRequested >= 2){
            throw "Only 1 or 2 seats can be requested";
        }

        if(this.checkAvailablity(seatsRequested)){
            this.seatsOccupied += seatsRequested;
            if(this.checkAvailablity(0)){
                this.isAvailable = true;
            }
            else{
                this.isAvailable = false;
            }
        }
        else{
            throw "Seats are not available";
        }
    }

    endRide(){


    }

}

module.exports.Ride = Ride;