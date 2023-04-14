class Vehicle{
    constructor(){
        this.vehicleId = ++Vehicle.Vehicles;
    }
    static Vehicles = 0;

    static addVehicle = function(vehicleNo, vehicleType, seats){
        let vehicle = new Vehicle();
        vehicle.vehicleNo = vehicleNo;
        vehicle.vehicleType = vehicleType;
        vehicle.totalSeats = totalSeats;
        return vehicle;
    }

}

module.exports.Vehicle = Vehicle;