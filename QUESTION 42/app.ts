function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);

}

//Define an array of magicians names
let magician_names=["Harry poter", "Hamza", "Usman"];

let great_magicians = make_great(magician_names);
console.log(great_magicians);