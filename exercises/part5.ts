import {SpaceLocation} from "./SpaceLocation";

// Add your import statement here:


let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;

class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * this.milesPerKilometer;
    let hours: number = milesAway / this.speedMph;
    return hours / 24;
  }

  // Add the printDaysToLocation function here.
  printDaysToLocation(location: SpaceLocation): void {
    console.log(`${this.name} has ${this.getDaysToLocation(location.kilometersAway)} days until it reaches ${location.name}.`);
  }

}

// Paste in the code from step 6 here:
let spaceShuttle = new Spacecraft('Determination', 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));