"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Add your import statement here:
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    // Add the printDaysToLocation function here.
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " has " + this.getDaysToLocation(location.kilometersAway) + " days until it reaches " + location.name + ".");
    };
    return Spacecraft;
}());
// Paste in the code from step 6 here:
var spaceShuttle = new Spacecraft('Determination', 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
