// lowercase babar
let personName: String = "Basit"
console.log("lowercase:", personName. toLowerCase());

// upercase BABAR
console.log("uppercase:", personName. toLocaleUpperCase());

// Tittlecase Babar
console.log("tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));