// let UserId;

let _ = require("lodash");

class Admin{

    passengers = [];
    drivers = [];
    vehicles = [];
    constructor(){
    }
    set Users(users){
        this.users = users;
    }

    addUser = function(){

        try{        
            let DriverInst = require("./users/driver.js").Driver;
            let u = new DriverInst();
            let pp = _.pick(u.addUser("Anushka", [0,0], "00022233", 0, "auto"), ["userId", "userName", "location", "phoneNumber", "vehicle"] );
            console.log(pp);
            let Passenger =  require("./users/index.js").getInstance("passenger");
            console.log(Passenger);
            let passengerInst = new Passenger();
            let user = _.pick(passengerInst.addUser("Shruti Aggarwal", [0,0], "00022233"), ["userId", "userName", "location", "phoneNumber"] );
            this.passengers.push(user);
            console.log(this.passengers);

            let Driver = require("./users/index.js").getInstance("Driver");
            let driverInst = new Driver();
            user = _.pick(driverInst.addUser("Diksha Aggarwal", [0,0], "00022233", 0, "auto"), ["userId", "userName", "location", "phoneNumber", "vehicle"] );
            this.drivers.push(user);
            console.log(this.drivers);

        }
        catch(err){
            return console.log("error", err);
        }
    }
    removeUser = function(userId){
        try{
            this.users = this.users.filter((user)=> user!=userId);
        }
        catch{
            return "error";
        }
    }



}

module.exports.Admin = Admin;