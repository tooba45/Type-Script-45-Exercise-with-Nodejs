//Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//Function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}

//Define an array of magicians names
let magician_names=["Harry poter", "Hamza", "Usman"];

//Making a copy of original array through.Slice() function
let copy_magician_names = magician_names.slice();

//Modify thr copied array to include "The Great" with thier names
let copy_great_magicians = make_great(copy_magician_names);

//show both arrays original and copy

//Original
show_magicians(magician_names);

//Copied
show_magicians(copy_great_magicians);