//Making a function
function make_shirt(size: string = "Large", printMessage: string = "I Love TypeScript"){
   console.log(`Creating a ${size} shirt with ${printMessage} prints on shirt`)
}

//Calling a function with by default values
make_shirt();

//Calling a function now with medium size and default message
make_shirt("Medium")

//calling a function now with small size and also different Print message
make_shirt("Small", "I Love JavaScript");
