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
            let userInst = new DriverInst();
            let driver = _.pick(userInst.addUser("Anushka", [0,0], "00022233", 0, "auto"), ["userId", "userName", "location", "phoneNumber", "vehicle"] );
            this.drivers.push(driver);
            console.log(driver);


            let PassengerInst =  require("./users/passenger.js").Passenger;
            userInst = new PassengerInst();
            let passenger = _.pick(userInst.addUser("Shruti Aggarwal", [0,0], "00022233"), ["userId", "userName", "location", "phoneNumber"] );
            this.passengers.push(passenger);
            console.log(this.passengers);

            

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