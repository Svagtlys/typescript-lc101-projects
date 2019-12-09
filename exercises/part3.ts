// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Space Shuttle";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway: number): number{
    return ((kilometersAway * milesPerKilometer) / speedMph) / 24;
}

// Call the function and print the outputs for the Mars trip and the moon trip:
console.log(`${spacecraftName} has ${getDaysToLocation(kilometersToMars)} days left until it reaches Mars.`);
console.log(`${spacecraftName} has ${getDaysToLocation(kilometersToTheMoon)} days left until it reaches the Moon.`);
