// lowercase babar
var personName = "Basit";
console.log("lowercase:", personName.toLowerCase());
// upercase BABAR
console.log("uppercase:", personName.toLocaleUpperCase());
// Tittlecase Babar
console.log("tittlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
