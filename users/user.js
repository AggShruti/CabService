
class User{
    
    constructor( ){
        this.userId = ++User.UserId;
    }
    static UserId = 0;
    addUser = function(userName, location, phoneNumber){
        // let user = new User();
        this.userName = userName;
        this.location = location;
        this.phoneNumber = phoneNumber;
        return this;
    }
    get getUserName(){
        return this.userName;
    }

    get getLocation(){
        return this.location;
    }

}

module.exports = {
    User : User
};