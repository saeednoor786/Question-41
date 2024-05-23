"use strict";
// Q:41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array
// Array of magician's names
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller", "Dynamo"];
// Function to print the names of magicians
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Call the function and pass the array
show_magicians(magicians);
