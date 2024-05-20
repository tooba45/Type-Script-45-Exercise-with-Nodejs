//Array Of Current Users
let current_users = ["Uzma", "Ali", "zain", "Ramsha", "Bushra"];

//Array Of New Users
let new_users = ["Hamza", "Aqsa", "Zain", "Dua", "Ramsha"];

//Loop through new_users to check for usernames availability
new_users.forEach(new_one_user => {

 //Making a Condition for username already exist and save in our_condition varaiable  
    let our_condition = current_users.some (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
   
   //Print differnt messages using If-Else statements
    if(our_condition){
       console.log(`Sorry ${new_one_user} is already taken!`) 
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})
