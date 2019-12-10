import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';
import {Payload} from './Payload';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        let totalMass = 0;
        for(let i = 0; i < items.length; i++){
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else{
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else{
            return false;
        }
    }

    addAstronaut(astro: Astronaut): boolean{
        if(this.canAdd(astro)){
            this.astronauts.push(astro);
            return true;
        } else{
            return false;
        }
    }
}