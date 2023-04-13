class Vehicle{
    constructor(){
        this.vehicleId = ++Vehicle.Vehicles;
    }
    // let constants = require("./constants.js");
    static Vehicles = 0;
    static addVehicle = function(vehicleNo, vehicleType){
        let vehicle = new Vehicle();
        vehicle.vehicleNo = vehicleNo;
        vehicle.vehicleType = vehicleType;
        return vehicle;
    }

}

module.exports.Vehicle = Vehicle;