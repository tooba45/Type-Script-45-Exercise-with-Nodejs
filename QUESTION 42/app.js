function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magician_names = ["Harry poter", "Hamza", "Usman"];
var great_magicians = make_great(magician_names);
console.log(great_magicians);
