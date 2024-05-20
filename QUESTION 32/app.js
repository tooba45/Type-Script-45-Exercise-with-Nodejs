//Array Of Current Users
var current_users = ["Uzma", "Ali", "zain", "Ramsha", "Bushra"];
//Array Of New Users
var new_users = ["Hamza", "Aqsa", "Zain", "Dua", "Ramsha"];
//Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    //Making a Condition for username already exist and save in our_condition varaiable  
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print differnt messages using If-Else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
