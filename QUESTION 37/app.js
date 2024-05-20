//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with ").concat(printMessage, " prints on shirt"));
}
//Calling a function with by default values
make_shirt();
//Calling a function now with medium size and default message
make_shirt("Medium");
//calling a function now with small size and also different Print message
make_shirt("Small", "I Love JavaScript");
