class User{
    
    constructor(userId, userName, location){
        this.constants = require("../constants").data;
        if(userId){
            this.getUsers()
        }
        this.userName = userName;
        this.location = location;
    }

    addUser = function(userName, location){
        
        let userId = this.constants.numberOfUsers.length;
        let user = {
            userId,
            userName,
            location
        }
        this.constants.numberOfUsers.length += 1;
        users.push(user);
    }

    removeUser = function(userId){
        this.constants.users = this.constants.users.filter((user)=> user.userId!= userId);
        return "Success";
    }
    getUsers = function(){
        return this.constants.users;
    }

}