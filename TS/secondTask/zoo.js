function addToReservoir(aviary, animal) {
    if (setllementValidations(aviary, animal)) {
        aviary.animals.push(animal);
        aviary.space = aviary.space - animal.area;
        console.log(aviary);
    }
    else {
        console.log("Animal can not habitate in this Aviary");
    }
}
function setllementValidations(aviary, animal) {
    var check = true;
    if (aviary.biome.trim().toLowerCase() !== animal.biome.trim().toLowerCase()) {
        check = false;
    }
    else if (!aviary.isReservoir) {
        check = false;
    }
    else if (animal.area > aviary.space) {
        check = false;
    }
    if (aviary.animals.length > 0) {
        if (animal.type === "predator" && aviary.animals.every(function (avAnimal) { return avAnimal.speciesName.trim().toLowerCase() !== animal.speciesName.trim().toLowerCase(); })) {
            check = false;
        }
        else if (animal.type === "herbivore" && aviary.animals.every(function (animal) { return animal.type !== "herbivore"; })) {
            check = false;
        }
    }
    return check;
}
var animal1 = {
    name: "aNameHer",
    age: 3,
    area: 2,
    biome: "Mountain",
    speciesName: "goat",
    amountFood: 10,
    food: "grass",
    needReservoir: true,
    type: "herbivore"
};
var animal2 = {
    name: "aNamePre",
    age: 5,
    area: 4,
    biome: "Mountain",
    speciesName: "wolf",
    amountFood: 15,
    food: "meat",
    needReservoir: true,
    type: "predator"
};
var animal3 = {
    name: "aNamePre",
    age: 6,
    area: 5,
    biome: "Mountain",
    speciesName: "wolf",
    amountFood: 20,
    food: "meat",
    needReservoir: true,
    type: "predator"
};
var aviary1 = {
    biome: "Mountain",
    isReservoir: true,
    space: 20,
    animals: []
};
addToReservoir(aviary1, animal3);
addToReservoir(aviary1, animal2);
