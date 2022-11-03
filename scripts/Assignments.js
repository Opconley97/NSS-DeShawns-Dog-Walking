import { getPets, getWalkers, getCities, getWalkerCities} from "./database.js"

// Get copy of state for use in this module

const walkerCities = getWalkerCities();
const cities = getCities();
const pets = getPets();
const walkers = getWalkers();


// Function whose responsibility is to find the walker assigned to a pet

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const walker of walkers) {
        for (const currentPet of pets) {
            let petWalker = null;
            if (walker.id === currentPet.walkerId) {
                petWalker = walker
                for (const walkerCity of walkerCities) {
                    if (walkerCity.walkerId === petWalker.id) {
                        for (const city of cities) {
                            if (walkerCity.cityId === city.id) {
                                assignmentHTML += `<li>
                                ${currentPet.name} is being walked by 
                                ${petWalker.name} in ${city.name}</li>`
                            }
                            
                        }
                    }
                }
            }
        }
    }
return assignmentHTML
}


document.addEventListener("click",(clickEvent) => {

    const itemClicked = clickEvent.target

    if (itemClicked.id.startsWith("pet")) {

        const [,petId] = itemClicked.id.split("--")

        for (const pet of pets) {
            if (pet.id === parseInt(petId)) {
                for (const walker of walkers) {
                    if (walker.id === pet.walkerId) {
                        window.alert(`${pet.name} is being walked by ${walker.name}`)
                    }
                }
            }
        }
    }


})