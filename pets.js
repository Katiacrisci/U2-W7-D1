class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed; 
  }
  isSameOwnerAs(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
        return true;
    }
  }
}




const pets = [];

function getPetData(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const pet = new Pet(data.name, data.ownerName, data.species, data.breed);
    pets.push(pet)
    console.log(pets)
    if (pets.length > 1) {
        console.log(pets[0].isSameOwnerAs(pets[1]))
    }
    
}

document.getElementById("petForm").addEventListener("submit", (event) => {
    event.preventDefault()
    getPetData(event.target)
    
})




