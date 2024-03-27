exports.authenticateUser = function(username, password){
    if(username === 'admin' && password === "admin"){
        return "You are a Valid User"
    } else {
        return "You are not a VALID User";
    }
}