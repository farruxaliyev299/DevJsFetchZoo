interface IAnimalBase {
    speciesName: string;
    biome: string;
    needReservoir: boolean;
    area: number;
    food: string;
    type: "predator" | "herbivore";
}

interface IAnimal extends IAnimalBase {
    name: string;
    age: number;
    amountFood: number;
}

interface IAviary {
    biome: string;
    isReservoir: boolean;
    space: number;
    animals: IAnimal[];
}

function addToReservoir(aviary:IAviary, animal:IAnimal){
    if(setllementValidations(aviary,animal)){
        aviary.animals.push(animal);
        aviary.space = aviary.space - animal.area;
        console.log(aviary);
    }
    else{
        console.log("Animal can not habitate in this Aviary");
    }
}

function setllementValidations(aviary:IAviary, animal:IAnimal):boolean{
    let check = true;

    if(aviary.biome.trim().toLowerCase() !== animal.biome.trim().toLowerCase()){
        check = false;
    }
    else if(!aviary.isReservoir){
        check = false;
    }
    else if(animal.area > aviary.space){
        check = false;
    }
    
    if(aviary.animals.length > 0){
        if(animal.type === "predator" && aviary.animals.every(avAnimal => avAnimal.speciesName.trim().toLowerCase() !== animal.speciesName.trim().toLowerCase())){
            check = false;
        }
        else if(animal.type === "herbivore" && aviary.animals.every(animal => animal.type !== "herbivore")){
            check = false;
        }
    }

    return check;
}

const animal1: IAnimal = {
    name: "aNameHer",
    age: 3,
    area: 2,
    biome: "Mountain",
    speciesName: "goat",
    amountFood: 10,
    food: "grass",
    needReservoir: true,
    type: "herbivore"
}

const animal2: IAnimal = {
    name: "aNamePre",
    age: 5,
    area: 4,
    biome: "Mountain",
    speciesName: "wolf",
    amountFood: 15,
    food: "meat",
    needReservoir: true,
    type: "predator"
}

const animal3: IAnimal = {
    name: "aNamePre",
    age: 6,
    area: 5,
    biome: "Mountain",
    speciesName: "wolf",
    amountFood: 20,
    food: "meat",
    needReservoir: true,
    type: "predator"
}

const aviary1: IAviary = {
    biome: "Mountain",
    isReservoir: true,
    space: 20,
    animals: []
}

addToReservoir(aviary1, animal3);
addToReservoir(aviary1, animal2);