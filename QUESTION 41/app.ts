//Define a function to print each magician name from an array
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Define an array containing magicians name
let magician_names = ["Harry poter", "Hamza", "Usman"]

//Call the function to print each magician name
show_magicians(magician_names)