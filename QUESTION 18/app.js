var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
// Print your array in its original order.
var places = ['Turkey', 'China', 'Oman', 'Qatar', 'Japan'];
console.log('original' + places);
//Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + __spreadArray([], places, true).sort());
//Show that your array is still in its original order by printing it.
console.log('original' + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log('original' + places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('original' + places.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original' + places.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Sorted in Alphabetical Order' + places.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('Original Array Reversed Again' + places.reverse());
